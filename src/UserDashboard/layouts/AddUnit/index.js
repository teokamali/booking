import React, { useEffect, useState } from "react";
import Select from "react-select";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetProperties } from "hooks/useProperty";
import { useGetBedTypes } from "hooks/useUnits";

import { Counter } from "components";
import { Field, Form, Formik } from "formik";
import "./index.scss";

const AddUnit = () => {
	const [adult, setAdult] = useState(0);
	const [children, setChildren] = useState(0);
	const [bedrooms, setBedrooms] = useState(0);
	const [unitCount, setUnitCount] = useState(1);
	const [totalBeds, setTotalBeds] = useState(1);

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
	const { data: bedTypes, isLoading: BedTypesIsLoading } = useGetBedTypes();
	console.log(bedTypes);

	let bedTypesList = [];
	if (!BedTypesIsLoading) {
		bedTypes.data.map((item) =>
			bedTypesList.push({
				label: item.name,
				value: item.id,
			})
		);
	}

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div className='container w-75'>
				<Formik
					// validationSchema={AddPropertyValidate}
					initialValues={{
						property_id: "",
						name: "",
						adults_sleeps_count: 0,
						kids_sleeps_count: 0,
						price: "",
						bedrooms_count: 0,
						description: "",
						unit_count: 1,
						beds: [
							{
								bed_type_id: "2",
								count: 1,
							},
						],
					}}
					// onSubmit={(e) => formSubmitHandler(e)}
				>
					{({ values, errors }) => (
						<Form>
							{/* Property Id */}
							<div className=' mb-3'>
								<label htmlFor=''>Select Your Property</label>
								<Select
									className='basic-single'
									classNamePrefix='select'
									options={propertyList}
									name='property_id'
									onChange={(e) => (values.property_id = e.value)}
								/>
							</div>
							{/* name */}
							<div className='form-floating mb-3'>
								<Field
									type='text'
									className='form-control'
									id='name'
									placeholder='Name'
									name='name'
								/>
								<label htmlFor='name'>Name</label>
							</div>
							{/* price */}
							<div className='input-group mb-3'>
								<span className='input-group-text'>$</span>
								<Field
									type='text'
									className='form-control'
									id='price'
									placeholder='Price'
									name='price'
								/>
							</div>
							<div className='counter-input-wrapper'>
								<span>Adult Count</span>
								<Counter value={adult} onValueChange={setAdult} />
							</div>
							<div className='counter-input-wrapper'>
								<span>Children Count</span>
								<Counter value={children} onValueChange={setChildren} />
							</div>
							<div className='counter-input-wrapper'>
								<span>Bedrooms Count</span>
								<Counter value={bedrooms} onValueChange={setBedrooms} />
							</div>
							<div className='counter-input-wrapper'>
								<span>Unit Count</span>
								<Counter value={unitCount} onValueChange={setUnitCount} min={1} />
							</div>
							<div className='counter-input-wrapper'>
								<span>Bed Count</span>
								<Counter value={totalBeds} onValueChange={setTotalBeds} min={1} />
							</div>

							<div className='Beds-wrapper'>
								<Select
									className='basic-single'
									classNamePrefix='select'
									options={bedTypesList}
									// name='property_id'
									// onChange={(e) => (values.beds.count = e.value)}
								/>
								<Counter
									// value={bed.count}
									// onValueChange={}
									min={1}
								/>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</DashboardLayout>
	);
};

export default AddUnit;
