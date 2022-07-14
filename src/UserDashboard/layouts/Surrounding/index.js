import React, { useState } from "react";
import { Modal } from "components";
import Select from "react-select";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import "./index.scss";
import { Field, Form, Formik } from "formik";
import { MapContainer } from "react-leaflet";
import { Map, Button, Loader, Toastify } from "components";
import {
	useGetProperties,
	useGetSurroundingCategories,
	usePostSurrounding,
} from "hooks/useProperty";
import { addSurroundingValidation } from "validations";
import { omit } from "lodash";

function Surrounding() {
	const [location, setLocation] = useState({
		lat: 0,
		lng: 0,
	});
	const { mutate: postSurroundingMutate, isLoading: isPostSurroundingLoading } =
		usePostSurrounding();

	// get Property List
	const { data: proppertyList, isLoading: isPropertyListLoading } = useGetProperties();
	let newPropertyList = [];
	if (!isPropertyListLoading) {
		proppertyList.data.data.map((item) =>
			newPropertyList.push({
				label: item.name,
				value: item.id,
			})
		);
	}
	// List Of Surrounding categories
	const { data: surroundingCategories, isLoading: isSurroundingCategoriesLoading } =
		useGetSurroundingCategories();
	let newSurroundingList = [];
	if (!isSurroundingCategoriesLoading) {
		surroundingCategories.data.map((item) =>
			newSurroundingList.push({
				label: item.title,
				value: item.id,
			})
		);
	}

	let Initialvalue = {
		property_id: "",
		property_label: "",
		surrounding_category_id: "",
		surrounding_category_label: "",
		surrounding_name: "",
		lat: null,
		long: null,
	};

	// form submit handler
	const onSubmitHandler = (val) => {
		const formData = omit(val, ["property_label", "surrounding_category_label"]);
		if (val.lat === null) {
			Toastify("error", "Please Select a location");
		} else {
			postSurroundingMutate(formData);
		}
	};

	// todo : show errors under inputs
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div className='surrounding_page'>
				<div className='surrounding_page__header'>
					<h2>List of Surroundings</h2>
					<Modal
						id='addSurroundigModal'
						buttonClassnames='btn-main'
						buttonText='Add'
						modalTitle='Add New Surrounding'
					>
						<Formik
							initialValues={Initialvalue}
							onSubmit={(values, { resetForm }) => {
								onSubmitHandler(values);
								resetForm({ values: Initialvalue });
							}}
							validationSchema={addSurroundingValidation}
						>
							{({ values, errors, touched, setValues }) => (
								<Form className='add-surroundig-form'>
									<div>
										<label htmlFor=''>Select Your Property</label>
										<Select
											options={newPropertyList}
											name='property_id'
											className='basic-single propertyList-select'
											value={{
												value: values.property_id,
												label: values.property_label,
											}}
											onChange={(e) =>
												setValues((prev) => ({
													...prev,
													property_id: e.value,
													property_label: e.label,
												}))
											}
										/>
										{errors.property_id && touched.property_id && (
											<span className='input-error'>
												{errors.property_id}
											</span>
										)}
									</div>
									<div>
										<label htmlFor=''>Select Surrounding Category</label>
										<Select
											options={newSurroundingList}
											name='surrounding_category_id'
											className='basic-single surrounding-select'
											value={{
												value: values.surrounding_category_id,
												label: values.surrounding_category_label,
											}}
											onChange={(e) =>
												setValues((prev) => ({
													...prev,
													surrounding_category_id: e.value,
													surrounding_category_label: e.label,
												}))
											}
										/>
										{errors.surrounding_category_id &&
											touched.surrounding_category_id && (
												<span className='input-error'>
													{errors.surrounding_category_id}
												</span>
											)}
									</div>
									<div>
										<label htmlFor=''>Surrounding Name</label>
										<Field className='form-control' name='surrounding_name' />
										{errors.surrounding_name && touched.surrounding_name && (
											<span className='input-error'>
												{errors.surrounding_name}
											</span>
										)}
									</div>
									<div>
										<label htmlFor=''>Locate Surrounding On Map</label>
										<MapContainer
											style={{ height: "400px", width: "400px" }}
											center={[location.lat, location.lng]}
											zoom={12}
											minZoom={4}
											// scrollWheelZoom={true}
										>
											<Map
												userLocation={location}
												setUserLocation={setLocation}
												clickedPosition={{
													lat: values.lat,
													lng: values.long,
												}}
												// setClickPosition={setPosition}
												setClickPosition={(e) => {
													setValues((prev) => ({
														...prev,
														lat: e.lat,
														long: e.lng,
													}));
												}}
											/>
										</MapContainer>
									</div>
									<Button
										disabled={isPostSurroundingLoading}
										isLoading={isPostSurroundingLoading}
									>
										Submit
									</Button>
									{/* {!isPropertyPostLoading ? (
										<Button
											type='submit'
											className='w-100 my-3'
											isLoading={isPropertyPostLoading}
										>
											Submit
										</Button>
									) : (
										<Loader />
									)} */}
								</Form>
							)}
						</Formik>
					</Modal>
				</div>
			</div>
		</DashboardLayout>
	);
}

export default Surrounding;
