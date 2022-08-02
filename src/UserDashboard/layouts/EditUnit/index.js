import React, { useEffect, useState } from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetProperties } from "hooks/useProperty";
import { useGetBedTypes, useUpdateUnit } from "hooks/useUnits";
import { AddUnitValidate } from "validations";
import { Counter, Button, Loader2 } from "components";
import { useFormik } from "formik";
import Select from "react-select";
import { useGetUnitById } from "hooks/useUnits";
import { useLocation } from "react-router-dom";

function EditUnit() {
	const [unitData, setUnitData] = useState();
	const [loading, setLoading] = useState(true);
	const location = useLocation().pathname;
	const unitId = location.split("/")[4];
	const { data, isLoading } = useGetUnitById(unitId);
	let formikInitialValue = {
		property_id: "",
		name: "",
		adults_sleeps_count: 1,
		kids_sleeps_count: 1,
		price: 1,
		bedrooms_count: 1,
		description: "",
		beds: [
			{
				bed_type_id: 1,
				count: 1,
			},
		],
	};
	const formik = useFormik({
		initialValues: formikInitialValue,
		validationSchema: AddUnitValidate,
		onSubmit: (values) => {
			const formData = { unitId, values };
			updateUnit(formData);
		},
	});
	useEffect(() => {
		if (data) {
			setUnitData(data.data);
			setLoading(false);
			formik.setValues(unitData);
		} else {
			setLoading(true);
		}
	}, [isLoading]);
	const [selectedBeds, setSelectedBeds] = useState([]);
	// user Properties
	const { data: properties, isLoading: propertyLoading } = useGetProperties();
	let propertyList = [];
	if (!propertyLoading) {
		properties.data.data.map((item) =>
			propertyList.push({
				label: item.name,
				value: item.id,
			})
		);
	}

	// beds type
	const { data: bedTypes } = useGetBedTypes();
	const { mutate: updateUnit } = useUpdateUnit();

	const handleChangeCounter = (name, val) => {
		formik.setValues((prev) => ({ ...prev, [name]: val }));
	};

	const handleIncreamentBed = (value) => {
		const newBed = { bed_type_id: null, count: 1 };
		if (value > formik.values.beds.length) {
			formik.setValues((prev) => ({ ...prev, beds: [...prev.beds, newBed] }));
		} else {
			formik.setValues((prev) => ({ ...prev, beds: prev.beds.slice(0, -1) }));
			handleRemoveBed();
		}
	};

	const handleBedCount = (index, val) => {
		formik.setValues((prev) => ({
			...prev,
			beds: prev.beds.map((bed, inx) => {
				if (index === inx) {
					return {
						...bed,
						count: val,
					};
				} else {
					return bed;
				}
			}),
		}));
	};
	const handleTypeId = (index, val) => {
		formik.setValues((prev) => ({
			...prev,
			beds: prev.beds.map((bed, inx) => {
				if (index === inx) {
					return {
						...bed,
						bed_type_id: val,
					};
				} else {
					return bed;
				}
			}),
		}));
	};

	const handleSetSelectedBeds = (id) => {
		setSelectedBeds((prev) => [...prev, id]);
	};
	const handleRemoveBed = () => {
		setSelectedBeds((prev) => prev.slice(0, -1));
	};

	if (unitData && !loading) {
		return (
			<DashboardLayout>
				<DashboardNavbar />
				<div className='container w-75'>
					<form onSubmit={formik.handleSubmit}>
						{/* Property Id */}
						<div className=' mb-3'>
							<label htmlFor=''>Select Your Property</label>
							<Select
								className='basic-single'
								classNamePrefix='select'
								options={propertyList}
								defaultValue={() =>
									propertyList.find(
										(item) => item.value === data.data.property_id
									)
								}
								name='property_id'
								onChange={(e) => (formik.values.property_id = e.value)}
							/>
						</div>
						{formik.errors.property_id && formik.touched.property_id && (
							<span className='input-error'>{formik.errors.property_id}</span>
						)}
						{/* name */}
						<div className='form-floating mb-3'>
							<input
								type='text'
								className='form-control'
								id='name'
								placeholder='Name'
								name='name'
								onChange={formik.handleChange}
								value={formik.values.name}
							/>
							<label htmlFor='name'>Name</label>
						</div>
						{formik.errors.name && formik.touched.name && (
							<span className='input-error'>{formik.errors.name}</span>
						)}
						{/* description */}
						<div className='form-floating mb-3'>
							<textarea
								className='form-control'
								id='description'
								placeholder='Description'
								name='description'
								style={{ height: "200px" }}
								onChange={formik.handleChange}
								value={formik.values.description}
							/>
							<label htmlFor='name'>Description</label>
						</div>
						{formik.errors.description && formik.touched.description && (
							<span className='input-error'>{formik.errors.description}</span>
						)}
						{/* price */}
						<div className='input-group mb-3'>
							<span className='input-group-text'>$</span>
							<input
								type='text'
								className='form-control'
								id='price'
								placeholder='Price'
								name='price'
								onChange={formik.handleChange}
								value={formik.values.price}
							/>
						</div>
						{formik.errors.price && formik.touched.price && (
							<span className='input-error'>{formik.errors.price}</span>
						)}
						{/* adults_sleeps_count */}
						<div className='counter-input-wrapper'>
							<span>Adult Count</span>
							<Counter
								value={formik.values.adults_sleeps_count}
								onValueChange={(value) =>
									handleChangeCounter("adults_sleeps_count", value)
								}
								min={1}
							/>
						</div>
						{formik.errors.adults_sleeps_count &&
							formik.touched.adults_sleeps_count && (
								<span className='input-error'>
									{formik.errors.adults_sleeps_count}
								</span>
							)}
						{/* children_sleep-count */}
						<div className='counter-input-wrapper'>
							<span>Children Count</span>
							<Counter
								value={formik.values.kids_sleeps_count}
								onValueChange={(value) =>
									handleChangeCounter("kids_sleeps_count", value)
								}
								min={1}
							/>
						</div>
						{formik.errors.kids_sleeps_count && formik.touched.kids_sleeps_count && (
							<span className='input-error'>{formik.errors.kids_sleeps_count}</span>
						)}
						{/* bedroms count */}
						<div className='counter-input-wrapper'>
							<span>Bedrooms Count</span>
							<Counter
								value={formik.values.bedrooms_count}
								onValueChange={(value) =>
									handleChangeCounter("bedrooms_count", value)
								}
								min={1}
							/>
						</div>
						{formik.errors.bedrooms_count && formik.touched.bedrooms_count && (
							<span className='input-error'>{formik.errors.bedrooms_count}</span>
						)}

						{/* beds_count */}
						<div className='counter-input-wrapper'>
							<span>Bed Count</span>
							<Counter
								value={formik.values.beds.length}
								onValueChange={(value) => handleIncreamentBed(value)}
								min={1}
							/>
						</div>

						{formik.values.beds.map((bed, i) => {
							return (
								<div className='Beds-wrapper ' key={i}>
									<Select
										className='basic-single'
										classNamePrefix='select'
										options={
											bedTypes
												? bedTypes.filter((bed) => {
														return !selectedBeds.includes(bed.value);
												  })
												: []
										}
										// name='property_id'
										onChange={(e) => {
											handleTypeId(i, e.value);
											handleSetSelectedBeds(e.value);
										}}
									/>
									<Counter
										value={bed.count}
										onValueChange={(val) => handleBedCount(i, val)}
										min={1}
									/>
								</div>
							);
						})}

						<Button type='submit' className='mt-4 w-100'>
							Submit
						</Button>
					</form>
				</div>
			</DashboardLayout>
		);
	} else {
		return <Loader2 />;
	}
}

export default EditUnit;
