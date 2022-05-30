import React, { useEffect, useState } from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetPropertyType } from "hooks/useProperty";
import { Modal, Map } from "components";
import { useGetGallery } from "hooks/useUserGallery";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { MapContainer } from "react-leaflet";
import Select from "react-select";
import AsyncSelect from "react-select/async";

import { capitalizeFirstLetter } from "utils/functions";
import { useGetCountries } from "hooks/useProperty";
import { useGetCities } from "hooks/useProperty";

import "./index.scss";

const AddProperty = () => {
	// select image functionalities
	useGetGallery();
	const { data } = useGetGallery(); //token
	const [selectedImages, setSelectedImages] = useState([]);
	const onImageClickHandler = (item) => {
		setSelectedImages((prev) => [...prev, item]);
	};
	const removeImage = (item) => {
		setSelectedImages((prev) => prev.filter((image) => image.id !== item.id));
	};
	// map functionality
	const [position, setPosition] = useState();
	const [location, setLocation] = useState({
		lat: 50.5,
		lng: 30.5,
	});

	// get countries
	const { data: countries, isLoading: countryLoading } = useGetCountries();
	let countryList = [];
	if (!countryLoading) {
		countries.data.data.map((item) =>
			countryList.push({
				label: capitalizeFirstLetter(item.name),
				value: item.id,
			})
		);
	}
	// get cities
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [isCityDisabled, setisCityDisabled] = useState(true);
	const { data: cityData, isLoading: isCityLoading } = useGetCities({
		id: selectedCountry,
		options: {
			enabled: !!selectedCountry,
		},
	});

	// get propertie types
	const { data: propertyTypes, isLoading: propertyTypesLoading } = useGetPropertyType();
	let newTypes = [];
	if (!propertyTypesLoading) {
		propertyTypes.data.data.map((item) =>
			newTypes.push({
				label: capitalizeFirstLetter(item.type),
				value: item.id,
			})
		);
	}

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div className='AddPropertyPage'>
				<div className='AddPropertyPage__header'>
					<h2>Add new Property</h2>
				</div>
				<div className='AddPropertyPage__body'>
					{/* Add Image */}
					<div className='container'>
						<div className='d-flex align-items-center justify-content-between'>
							<label htmlFor=''>Select Your Service Images</label>
							<Modal
								id='galleryModal'
								buttonText='Images'
								buttonClassnames='btn-main'
								modalTitle='Media Gallery'
								renderCloseButton={true}
							>
								<div className='container'>
									<div className='row'>
										{data ? (
											data.data.length === 0 ? (
												<h4>Your Gallery is Empty</h4>
											) : (
												data.data.map((item) => (
													<div
														className='galleryImages col-12 col-md-6 col-lg-3'
														key={item.id}
													>
														{selectedImages.includes(item) ? (
															<div className='galleryImage-wrapper'>
																<div
																	className='galleryImageOverlay '
																	onClick={() =>
																		removeImage(item)
																	}
																>
																	<i className='fas fa-check'></i>
																</div>
																<img
																	className={`galleryImage selected`}
																	src={item.medium_image_link}
																	alt=''
																/>
															</div>
														) : (
															<img
																className={`galleryImage`}
																src={item.medium_image_link}
																alt=''
																onClick={() =>
																	onImageClickHandler(item)
																}
															/>
														)}
													</div>
												))
											)
										) : null}
									</div>
								</div>
							</Modal>
						</div>
					</div>
					{/* Preview selected images */}
					<div className='container mt-3'>
						<div className='row'>
							{selectedImages.map((images, i) => (
								<div className='col-6 col-md-3 mb-3' key={i}>
									<img
										className='preview-image'
										src={images.medium_image_link}
										alt=''
									/>
								</div>
							))}
						</div>
					</div>
					{/* form */}
					<div className='container mt-3'>
						<Formik
							// validationSchema={Validate}
							initialValues={{
								property_type_id: 0,
								name: "",
								description: "",
								subtitle: "",
								images: [],
								address: {
									city_id: 0,
									full: "",
									location: {
										lat: 0,
										long: 0,
									},
								},
							}}
							// onSubmit={(e) => submitHandler(e)}
						>
							{({ values }) => (
								<Form>
									{/* type */}
									<div className=' mb-3'>
										<label htmlFor=''>Select Your Service Type</label>
										<Select
											className='basic-single'
											classNamePrefix='select'
											options={newTypes}
											name='property_type_id'
											onChange={(e) => (values.property_type_id = e.value)}
										/>
									</div>
									{/* city and country*/}
									<div className='row mb-3'>
										<div className='col-6'>
											<label htmlFor=''>Select Your Country</label>
											<Select
												className='basic-single'
												classNamePrefix='select'
												options={countryList}
												onChange={(e) => {
													setSelectedCountry(e.value);
													// cityHandler(e);
												}}
												isSearchable
											/>
										</div>
										<div className='col-6'>
											<label htmlFor=''>Select Your City</label>
											<Select
												options={cityData}
												className='basic-single'
												classNamePrefix='select'
												isSearchable
												isLoading={isCityLoading}
												isDisabled={!!!cityData}
											/>
										</div>
									</div>
									{/* name */}
									<div className='form-floating mb-3'>
										<input
											type='text'
											className='form-control'
											id='name'
											placeholder='Name'
											name='name'
										/>
										<label htmlFor='name'>Name</label>
									</div>
									{/* subtitle */}
									<div className='form-floating mb-3'>
										<input
											type='text'
											className='form-control'
											id='subtitle'
											placeholder='Subtitle'
											name='subtitle'
										/>
										<label htmlFor='subtitle'>Subtitle</label>
									</div>
									{/* description */}
									<div className='form-floating mb-3'>
										<textarea
											type='text'
											className='form-control'
											id='description'
											placeholder='Description'
											name='description'
											style={{ height: "100px" }}
										/>
										<label htmlFor='description'>Description</label>
									</div>
									{/* fullAddress */}
									<div className='form-floating mb-3'>
										<input
											type='text'
											className='form-control'
											id='fullAddress'
											placeholder='Full Address'
											name='fullAddress'
										/>
										<label htmlFor='fullAddress'>Full Address</label>
									</div>
								</Form>
							)}
						</Formik>
					</div>
					{/* Map */}
					<div className='container'>
						<MapContainer
							style={{ height: "400px" }}
							center={[location.lat, location.lng]}
							zoom={13}
							scrollWheelZoom={true}
						>
							<Map
								clickedPosition={position}
								setClickedPosition={setPosition}
								userLocation={location}
								setUserLocation={setLocation}
							/>
						</MapContainer>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default AddProperty;
