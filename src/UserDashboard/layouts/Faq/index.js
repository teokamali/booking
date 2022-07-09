import { Field, Form, Formik } from "formik";
import React from "react";
import { Modal, Button, FaqTable, Loader2 } from "components";
import Select from "react-select";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetProperties, usePostFaq } from "hooks/useProperty";
import { addFaq } from "validations";
import "./index.scss";

function Faq() {
	const { mutate: postFaqMutate, isLoading: postFaqIsLoading } = usePostFaq();
	// get Property List
	const { data: proppertyList, isLoading: isPropertyListLoading } = useGetProperties();
	console.log(proppertyList?.data.data);
	let newPropertyList = [];
	if (!isPropertyListLoading) {
		proppertyList.data.data.map((item) =>
			newPropertyList.push({
				label: item.name,
				value: item.id,
			})
		);
	}
	let formInitial = {
		property_id: "",
		property_label: "",
		question: "",
		answer: "",
	};
	const formSubmitHandler = (val) => {
		console.log(val);

		const propertyId = val.property_id;
		const formData = {
			question: val.question,
			answer: val.answer,
		};
		postFaqMutate({ propertyId, formData });
	};
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div className='faqPage'>
				<div className='faqPage__header'>
					<h3>List of FAQs</h3>
					<Modal
						id={`Add_FAQ`}
						buttonClassnames='btn-main'
						buttonText='Add FAQ'
						modalTitle='Add New FAQ'
					>
						<Formik
							initialValues={formInitial}
							validationSchema={addFaq}
							onSubmit={(val) => formSubmitHandler(val)}
						>
							{({ values, errors, touched, setValues }) => (
								<Form>
									{console.log(errors)}
									<div className='mb-3'>
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

									<div className='form-floating mb-3'>
										<Field
											type='text'
											className='form-control'
											id='question'
											name='question'
											autoComplete='off'
											placeholder='Question'
										/>
										<label htmlFor='question'>Question</label>
										{errors.question && touched.question && (
											<span className='input-error'>{errors.question}</span>
										)}
									</div>

									<div className='form-floating mb-3'>
										<Field
											type='text'
											className='form-control'
											id='answer'
											name='answer'
											placeholder='Answer'
										/>
										<label htmlFor='answer'>Answer</label>
										{errors.answer && touched.answer && (
											<span className='input-error'>{errors.answer}</span>
										)}
									</div>

									<Button
										className='w-100'
										type='submit'
										data-bs-dismiss='modal'
										aria-label='Close'
									>
										Submit
									</Button>
								</Form>
							)}
						</Formik>
					</Modal>
				</div>

				{proppertyList ? (
					proppertyList.data.data.length === 0 ? (
						<h2>Empty</h2>
					) : (
						<div>
							{proppertyList?.data.data.map((hotel) => (
								<FaqTable
									key={hotel.id}
									title={hotel.name}
									tableHead={["Property Id", "Question", "Answer", "Actions"]}
									// onEdit={onEditUnit}
									// onDelete={(id) => deletePropertyHandler(id)}
									data={hotel.faqs}
								/>
							))}
						</div>
					)
				) : (
					<div className='w-100'>
						<Loader2 />
					</div>
				)}
			</div>
		</DashboardLayout>
	);
}

export default Faq;
