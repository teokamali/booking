import React, { useContext, useEffect, useState } from "react";
import { Button, Loader2, Modal, AddGalleryModal } from "../../../components";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import {
	useGetGallery,
	usePostGallery,
	useDeleteGallery,
	useUpdateGallery,
} from "../../../hooks/useUserGallery";
import "./index.scss";
import { Field, Form, Formik } from "formik";

const Gallery = () => {
	const { data, isLoading } = useGetGallery(); //token
	const { mutate: deleteGalleryImage } = useDeleteGallery(); //id
	const { mutate: updateGallery, isLoading: isUpdateLoading } = useUpdateGallery(); //id , title
	// useGetGallery();
	const deleteHandler = (id) => {
		deleteGalleryImage({ id });
	};
	const updateTitleHandler = (values) => {
		updateGallery({ id: values.id, title: values.title });
	};
	const ImageGallery = ({ id, title, image, onDelete }) => {
		return (
			<div className='imageGallery'>
				<img src={image} alt='' />
				<div className='actions'>
					<Modal
						id={`EditModal${id}`}
						buttonClassnames='edit-title fa-regular fa-pen'
						modalTitle='Edit Image Title'
					>
						<Formik
							initialValues={{
								title: title,
								id: id,
							}}
						>
							{({ errors, touched, values, isSubmitting }) => (
								<Form
									onSubmit={(e) => {
										e.preventDefault();
										updateTitleHandler(values);
									}}
								>
									<div className='form-floating input-wrapper mb-3'>
										<Field
											className='form-control'
											name='title'
											placeholder='Title'
											id='title'
											autoComplete='off'
											type='text'
										/>
										<label htmlFor='title'>Update Title</label>
									</div>
									<img className='mb-3 img-preview' src={image} alt='preview' />
									<Button
										isBold
										hasBorder
										disabled={isUpdateLoading}
										isLoading={isUpdateLoading}
										type='submit'
									>
										Update
									</Button>
								</Form>
							)}
						</Formik>
					</Modal>
					<button className='delete-btn' onClick={onDelete}>
						<i className='fa-regular fa-trash'></i>
					</button>
				</div>
			</div>
		);
	};

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div className='gallery'>
				<div className='gallery__header'>
					<h2>List Of Gallery Images</h2>
					<AddGalleryModal />
				</div>
				<div className='gallery__body'>
					<div className='row'>
						{!isLoading ? (
							data.data.length === 0 ? (
								<h2>Gallery is Empty</h2>
							) : (
								data.data.map((item) => (
									<div
										className='col-12 col-md-6 col-lg-3 item-card '
										key={item.id}
									>
										<ImageGallery
											id={item.id}
											title={item.title}
											image={`${item.original_image_link}`}
											onDelete={() => deleteHandler(item.id)}
										/>
										<h2 className='item-title'>{item.title}</h2>
									</div>
								))
							)
						) : (
							<Loader2 />
						)}
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Gallery;
