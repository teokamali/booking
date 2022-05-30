import React, { useState } from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetPropertyType } from "hooks/useProperty";
import { Modal, Map, Button, Toastify, Loader } from "components";
import { useGetGallery } from "hooks/useUserGallery";
import { Formik, Form, Field } from "formik";
import { MapContainer } from "react-leaflet";
import Select from "react-select";
import { capitalizeFirstLetter } from "utils/functions";
import { useGetCountries } from "hooks/useProperty";
import { useGetCities } from "hooks/useProperty";
import { AddPropertyValidate } from "validations/index";
import "./index.scss";
import { usePostProperty } from "../../../hooks/useProperty";

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
	const images = selectedImages.map((image) => image.id);

	// map functionality
	const [location, setLocation] = useState({
		lat: 0,
		lng: 0,
	});
	const [position, setPosition] = useState();
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
	// Form Submit Handler
	const { mutate: postPropertyResult, isLoading: isPropertyPostLoading } = usePostProperty();
	const formSubmitHandler = (e) => {
		if (images.length === 0) {
			Toastify("error", "Please select at least one image");
		}
		if (position === undefined) {
			Toastify("error", "Please select a loacation on map");
		}
		const formData = {
			property_type_id: e.property_type_id,
			name: e.name,
			description: e.description,
			subtitle: e.subtitle,
			images: images,
			address: {
				city_id: e.city_id,
				full: e.full,
				location: {
					lat: position.lat,
					long: position.lng,
				},
			},
		};
		if (images.length !== 0 && position !== undefined) {
			console.log(formData);
			postPropertyResult(formData);
		}
	};

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
							validationSchema={AddPropertyValidate}
							initialValues={{
								property_type_id: "",
								name: "",
								description: "",
								subtitle: "",
								city_id: "",
								full: "",
							}}
							onSubmit={(e) => formSubmitHandler(e)}
						>
							{({ values, errors }) => (
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
												name='city_id'
												onChange={(e) => (values.city_id = e.value)}
												isSearchable
												isLoading={isCityLoading}
												isDisabled={!!!cityData}
											/>
										</div>
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
									{/* subtitle */}
									<div className='form-floating mb-3'>
										<Field
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
											onChange={(e) => (values.description = e.target.value)}
											style={{ height: "100px" }}
										/>
										<label htmlFor='description'>Description</label>
									</div>
									{/* fullAddress */}
									<div className='form-floating mb-3'>
										<Field
											type='text'
											className='form-control'
											id='fullAddress'
											placeholder='Full Address'
											name='full'
										/>
										<label htmlFor='fullAddress'>Full Address</label>
									</div>
									{/* Map */}
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
									{isPropertyPostLoading ? (
										<Loader />
									) : (
										<Button type='submit' className='w-100 my-3'>
											Submit
										</Button>
									)}
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default AddProperty;
