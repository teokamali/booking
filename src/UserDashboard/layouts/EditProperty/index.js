import React, { useEffect, useState } from "react";
import { useGetPropertyType } from "hooks/useProperty";
import { Modal, Map, Button, Loader, Toastify } from "components";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetGallery } from "hooks/useUserGallery";
import { Formik, Form, Field } from "formik";
import { MapContainer } from "react-leaflet";
import Select from "react-select";
import { capitalizeFirstLetter } from "utils/functions";
import { useGetCountries, useGetPropertyById } from "hooks/useProperty";
import { useGetCities } from "hooks/useProperty";
import { AddPropertyValidate } from "validations/index";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { useLocation } from "react-router-dom";
import { useUpdateProperty } from "hooks/useProperty";

const EditProperty = ({ data }) => {
	// select image functionalities
	const pathname = useLocation().pathname;
	const propertyId = pathname.split("/")[4];
	const { data: propertyData, isLoading: isPropertyLoading } = useGetPropertyById(propertyId);
	useGetGallery();
	const { data: galleryData } = useGetGallery(); //token

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
	if (!countryLoading && !isPropertyLoading) {
		countries.data.data.map((item) =>
			countryList.push({
				label: capitalizeFirstLetter(item.name),
				value: item.id,
			})
		);
	}

	// get cities
	const [selectedCountry, setSelectedCountry] = useState();
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
	const { mutate: updateProperty, isLoading: isUpdating } = useUpdateProperty();
	const formSubmitHandler = (e) => {
		const formData = {
			property_type_id: e.property_type_id,
			name: e.name,
			description: e.description,
			subtitle: e.subtitle,
			images: images,
			cover_image_id: images[0],
			address: {
				city_id: e.city_id,
				full: e.full,
				location: {
					lat: position.lat,
					long: position.lng,
				},
			},
		};
		if (images.length === 0) {
			Toastify("error", "Please select at least one image");
		}
		if (position === undefined) {
			Toastify("error", "Please select a loacation on map");
		}
		if (selectedImages.length === 0) {
			galleryData.data.map((item) => setSelectedImages((prev) => [...prev, item.id]));
		}
		if (images.length !== 0 && position !== undefined) {
			updateProperty({ formData, propertyId });
		}
	};

	return (
		<DashboardLayout>
			<DashboardNavbar />
			{propertyData ? (
				<>
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
								isScrollable={true}
							>
								<div className='container'>
									<div className='row'>
										{galleryData &&
											galleryData.data.map((item) => (
												<div
													className='galleryImages col-12 col-md-6 col-lg-3'
													key={item.id}
												>
													{selectedImages.includes(item) ? (
														<div className='galleryImage-wrapper'>
															<div
																className='galleryImageOverlay '
																onClick={() => removeImage(item)}
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
											))}
									</div>
								</div>
							</Modal>
						</div>
					</div>
					{/* Preview selected images */}
					<div className='container mt-3'>
						<div className='preview'>
							<Gallery>
								{propertyData.data.images.map((images, i) => (
									<Item
										original={images.original_image_link}
										thumbnail={images.thumb_image_link}
										width='1024'
										height='768'
										key={i}
										cropped
									>
										{({ ref, open }) => (
											<img
												className='preview-image'
												ref={ref}
												onClick={open}
												src={images.thumb_image_link}
												alt=''
											/>
										)}
									</Item>
								))}
							</Gallery>
						</div>
					</div>
					{/* form */}
					<div className='container mt-3'>
						<Formik
							// validationSchema={AddPropertyValidate}
							initialValues={{
								property_type_id: propertyData.data.property_type_id,
								name: propertyData.data.name,
								description: propertyData.data.description,
								subtitle: propertyData.data.subtitle,
								city_id: "",
								full: propertyData.data.address.full,
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
											defaultValue={newTypes.find(
												(item) =>
													item.value ===
													propertyData.data.property_type_id
											)}
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
												defaultValue={countryList.find(
													(item) =>
														item.label ===
														propertyData.data.address.country.name
												)}
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
												placeholder={propertyData.data.address.city.name}
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
											value={propertyData.data.description}
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
												clickedPosition={
													position
														? position
														: [
																propertyData.data.address.location
																	.latitude,
																propertyData.data.address.location
																	.longitude,
														  ]
												}
												setClickPosition={setPosition}
											/>
										</MapContainer>
									</div>
									<Button type='submit' className='w-100 my-3'>
										Submit
									</Button>
								</Form>
							)}
						</Formik>
					</div>
				</>
			) : (
				<Loader />
			)}
		</DashboardLayout>
	);
};

export default EditProperty;
