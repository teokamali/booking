import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import { useGetProperties, usePostGeneralRules } from "hooks/useProperty";
import { Button, Toastify, Counter } from "components";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import "./index.scss";

function GeneralRules() {
	const { data: properties, isLoading: propertyLoading } = useGetProperties();
	const { mutate: postGeneralRulesMutate, isLoading: isPostLoading } = usePostGeneralRules();
	const [propertyId, setPropertyId] = useState(null);
	const [formInitial, setFormInitial] = useState({
		check_in_from: null,
		check_in_to: null,
		check_out_from: null,
		check_out_to: null,
		cancellation_prepayment: "",
		refundable_damage_deposit: "",
		children_and_beds: ["", "", ""],
		age_restriction: false,
		smoking: false,
		pets: false,
		parties: false,
	});
	let propertyList = [];
	if (!propertyLoading) {
		properties.data.data.map((item) =>
			propertyList.push({
				label: item.name,
				value: item.id,
			})
		);
	}

	const formSubmitHandler = (e) => {
		e.preventDefault();
		const data = { propertyId, formInitial };
		if (propertyId) {
			if (
				formInitial.check_in_from &&
				formInitial.check_in_to &&
				formInitial.check_out_from &&
				formInitial.check_out_to
			) {
				if (
					formInitial.cancellation_prepayment !== "" &&
					formInitial.refundable_damage_deposit !== ""
				) {
					postGeneralRulesMutate(data);
				} else {
					Toastify(
						"error",
						"You Should Write Your Property Cancelation and Refundable Rules"
					);
				}
			} else {
				Toastify("error", "You Should Select Check-In And Check-Out Time Range");
			}
		} else {
			return Toastify("error", "You Should Select A Property");
		}
	};

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div id='general-rules'>
				<form onSubmit={formSubmitHandler}>
					{/* select Property */}
					<div className='mb-3'>
						<label htmlFor=''>Select Your Property</label>
						<Select
							className='basic-single'
							classNamePrefix='select'
							options={propertyList}
							name='property_id'
							onChange={(e) => setPropertyId(e.value)}
						/>
					</div>
					{/* time pickers */}
					<div className='row'>
						<div className='col-12 col-md-6 col-lg-3'>
							<div className='time-picker-wrapper'>
								<label htmlFor=''>Check In From</label>
								<DatePicker
									disableDayPicker
									format='HH:mm'
									inputClass='form-control'
									plugins={[<TimePicker hideSeconds />]}
									onChange={(e) => {
										setFormInitial((prevState) => {
											return {
												...prevState,
												check_in_from: e.format("HH:mm"),
											};
										});
									}}
								/>
							</div>
						</div>
						<div className='col-12 col-md-6 col-lg-3'>
							<div className='time-picker-wrapper'>
								<label htmlFor=''>Check In To</label>
								<DatePicker
									disableDayPicker
									format='HH:mm'
									inputClass='form-control'
									plugins={[<TimePicker hideSeconds />]}
									onChange={(e) => {
										setFormInitial((prevState) => {
											return {
												...prevState,
												check_in_to: e.format("HH:mm"),
											};
										});
									}}
								/>
							</div>
						</div>
						<div className='col-12 col-md-6 col-lg-3'>
							<div className='time-picker-wrapper'>
								<label htmlFor=''>Check Out From</label>
								<DatePicker
									disableDayPicker
									format='HH:mm'
									inputClass='form-control'
									plugins={[<TimePicker hideSeconds />]}
									onChange={(e) => {
										setFormInitial((prevState) => {
											return {
												...prevState,
												check_out_from: e.format("HH:mm"),
											};
										});
									}}
								/>
							</div>
						</div>
						<div className='col-12 col-md-6 col-lg-3'>
							<div className='time-picker-wrapper'>
								<label htmlFor=''>Check Out To</label>
								<DatePicker
									disableDayPicker
									inputClass='form-control'
									format='HH:mm'
									plugins={[<TimePicker hideSeconds />]}
									onChange={(e) => {
										setFormInitial((prevState) => {
											return {
												...prevState,
												check_out_to: e.format("HH:mm"),
											};
										});
									}}
								/>
							</div>
						</div>
					</div>
					{/* textareas */}
					<div className='form-floating mt-3'>
						<textarea
							className='form-control'
							placeholder='Leave a comment here'
							id='floatingTextarea2'
							style={{ height: "100px" }}
							value={formInitial.cancellation_prepayment}
							onChange={(e) => {
								setFormInitial((prevState) => {
									return {
										...prevState,
										cancellation_prepayment: e.target.value,
									};
								});
							}}
						></textarea>
						<label htmlFor='floatingTextarea2'>Cancellation Prepayment</label>
					</div>
					<div className='form-floating mt-3'>
						<textarea
							className='form-control'
							placeholder='Leave a comment here'
							id='floatingTextarea3'
							style={{ height: "100px" }}
							value={formInitial.refundable_damage_deposit}
							onChange={(e) => {
								setFormInitial((prevState) => {
									return {
										...prevState,
										refundable_damage_deposit: e.target.value,
									};
								});
							}}
						></textarea>
						<label htmlFor='floatingTextarea3'>Refundable Damage Deposit</label>
					</div>
					{/* childern and beds rules */}
					<div className='childern-and-beds-wrapper mt-3'>
						<span>childern and beds rules</span>
						<div className='input-wrapper'>
							<label htmlFor=''>1-</label>
							<input
								type='text'
								className='form-control mb-3'
								value={formInitial.children_and_beds[0]}
								onChange={(e) => {
									setFormInitial((prevState) => {
										return {
											...prevState,
											children_and_beds: prevState.children_and_beds.map(
												(item, i) => {
													if (i === 0) {
														return e.target.value;
													} else {
														return item;
													}
												}
											),
										};
									});
								}}
							/>
						</div>
						<div className='input-wrapper'>
							<label htmlFor=''>2-</label>
							<input
								type='text'
								className='form-control mb-3'
								value={formInitial.children_and_beds[1]}
								onChange={(e) => {
									setFormInitial((prevState) => {
										return {
											...prevState,
											children_and_beds: prevState.children_and_beds.map(
												(item, i) => {
													if (i === 1) {
														return e.target.value;
													} else {
														return item;
													}
												}
											),
										};
									});
								}}
							/>
						</div>
						<div className='input-wrapper'>
							<label htmlFor=''>3-</label>
							<input
								type='text'
								className='form-control mb-3'
								value={formInitial.children_and_beds[2]}
								onChange={(e) => {
									setFormInitial((prevState) => {
										return {
											...prevState,
											children_and_beds: prevState.children_and_beds.map(
												(item, i) => {
													if (i === 2) {
														return e.target.value;
													} else {
														return item;
													}
												}
											),
										};
									});
								}}
							/>
						</div>
					</div>

					{/* checkboxs */}
					<div className='row align-items-center'>
						<div className='col-12 col-md-6'>
							<div className='checkbox-wrapper'>
								<label htmlFor='age_restriction'>
									Do you have Age Restriction in your Property?
								</label>
								<Checkbox
									id='age_restriction'
									className='custom-checkedbox'
									checked={formInitial.age_restriction ? true : false}
									onChange={(e) => {
										setFormInitial((prevState) => {
											return {
												...prevState,
												age_restriction: e.target.checked,
											};
										});
									}}
								/>
							</div>
						</div>
						<div className='col-12 col-md-6'>
							<div className='checkbox-wrapper'>
								<label htmlFor='smoking'>
									Is Smoking Allowed in your Property?
								</label>
								<Checkbox
									className='custom-checkedbox'
									id='smoking'
									checked={formInitial.smoking ? true : false}
									onChange={(e) => {
										setFormInitial((prevState) => {
											return {
												...prevState,
												smoking: e.target.checked,
											};
										});
									}}
								/>
							</div>
						</div>
						<div className='col-12 col-md-6'>
							<div className='checkbox-wrapper'>
								<label htmlFor='pets'>do Pets allowed in your Property?</label>
								<Checkbox
									id='pets'
									checked={formInitial.pets ? true : false}
									className='custom-checkedbox'
									onChange={(e) => {
										setFormInitial((prevState) => {
											return {
												...prevState,
												pets: e.target.checked,
											};
										});
									}}
								/>
							</div>
						</div>
						<div className='col-12 col-md-6'>
							<div className='checkbox-wrapper'>
								<label htmlFor='parties'>
									Events and parties allowed in your Property?
								</label>
								<Checkbox
									id='parties'
									checked={formInitial.parties ? true : false}
									className='custom-checkedbox'
									onChange={(e) => {
										setFormInitial((prevState) => {
											return {
												...prevState,
												parties: e.target.checked,
											};
										});
									}}
								/>
							</div>
						</div>
					</div>
					<Button
						type='submit'
						className='w-100'
						isLoading={isPostLoading}
						disabled={isPostLoading}
					>
						Submit
					</Button>
				</form>
			</div>
		</DashboardLayout>
	);
}

export default GeneralRules;
