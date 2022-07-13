import { Field, Form, Formik } from "formik";
import React from "react";
import { Modal, Button, FaqTable, Loader2 } from "components";
import Select from "react-select";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetProperties, usePostFaq } from "hooks/useProperty";
import { addFaq } from "validations";
import "./index.scss";
import { ReusableTable } from "../../../components";

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
							{proppertyList?.data.data.map((hotel) => {
								return (
									<ReusableTable
										tableHead={["Property Id", "Question", "Answer", "Actions"]}
									>
										{hotel.faqs.map((item, i) => (
											<tr className='table_body_row' key={i}>
												<td className=' table_body_d'>
													<span>{item.property_id}</span>
												</td>
												<td className='table_body_d'>
													<span>{item.question}</span>
												</td>
												<td className='table_body_d'>
													<span>{item.answer}</span>
												</td>
												<td className=' table_body_d'>
													<div className='TbuttonsWrapper'>
														<button
															type='button'
															// onClick={() => onEdit(item)}
															className='action-button'
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																viewBox='0 0 512 512'
															>
																<path d='M497.9 74.16L437.8 14.06c-18.75-18.75-49.19-18.75-67.93 0l-56.53 56.55l127.1 128l56.56-56.55C516.7 123.3 516.7 92.91 497.9 74.16zM290.8 93.23l-259.7 259.7c-2.234 2.234-3.755 5.078-4.376 8.176l-26.34 131.7C-1.921 504 7.95 513.9 19.15 511.7l131.7-26.34c3.098-.6191 5.941-2.141 8.175-4.373l259.7-259.7L290.8 93.23z' />
															</svg>
														</button>

														<button
															type='button'
															// onClick={() => onDelete(item.id)}
															className='action-button'
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																viewBox='0 0 448 512'
															>
																<path d='M53.21 467c1.562 24.84 23.02 45 47.9 45h245.8c24.88 0 46.33-20.16 47.9-45L416 128H32L53.21 467zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z' />
															</svg>
														</button>
													</div>
												</td>
											</tr>
										))}
									</ReusableTable>
								);
							})}
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
