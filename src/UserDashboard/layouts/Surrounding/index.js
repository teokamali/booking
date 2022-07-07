import React, { useState } from "react";
import { Modal } from "components";
import Select from "react-select";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import "./index.scss";
import { Field, Form, Formik } from "formik";
import { MapContainer } from "react-leaflet";
import { Map, Button, Loader } from "components";
import { useGetProperties, useGetSurroundingCategories } from "hooks/useProperty";

function Surrounding() {
	const [location, setLocation] = useState({
		lat: 0,
		lng: 0,
	});
	const [position, setPosition] = useState();

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
		surrounding_category_id: "",
		surrounding_name: "",
		lat: "",
		long: "",
	};

	// form submit handler
	const onSubmitHandler = (e) => {
		console.log(e);
	};

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
						<Formik initialValues={Initialvalue}>
							{({ values, errors }) => (
								<Form
									className='add-surroundig-form'
									onSubmit={(values) => onSubmitHandler(values)}
								>
									<div>
										<label htmlFor=''>Select Your Property</label>
										<Select
											options={newPropertyList}
											className='basic-single propertyList-select'
											onChange={(e) => console.log(e.value)}
										/>
									</div>
									<div>
										<label htmlFor=''>Select Surrounding Category</label>
										<Select
											options={newSurroundingList}
											className='basic-single surrounding-select'
											onChange={(e) => console.log(e)}
										/>
									</div>
									<div>
										<label htmlFor=''>Surrounding Name</label>
										<Field className='form-control' name='surrounding_name' />
									</div>
									<div>
										<label htmlFor=''>Locate Surrounding On Map</label>
										<div className='container'>
											<MapContainer
												style={{ height: "400px" }}
												center={[location.lat, location.lng]}
												zoom={13}
												minZoom={5}
												scrollWheelZoom={true}
											>
												<Map
													userLocation={location}
													setUserLocation={setLocation}
													clickedPosition={position}
													setClickPosition={setPosition}
												/>
											</MapContainer>
										</div>
									</div>
									<Button>Submit</Button>
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
