import { CButton } from "@coreui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import InputwithValidation from "../../components/InputwithValidation";
function AddUsers() {
	// isvalid state and toggle validation form for submition function
	const [formIsValid, setFormIsValid] = useState(false);
	const formValidationHandler = () => {
		if (
			formIsValid.nameAndFamilyName !== "" &&
			formIsValid.email !== "" &&
			formIsValid.phoneNumber !== "" &&
			formIsValid.username !== ""
		) {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	};
	const [initialFormValue, setInitialFormValue] = useState({
		avatar: "",
		nameAndFamilyName: "",
		email: "",
		username: "",
		phoneNumber: "",
	});
	const formSubmitHandler = (values, e) => {
		// console.log(values);
		e.preventDefault();
	};
	const phoneRegEx =
		/(0|\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
	const Validate = Yup.object({
		nameAndFamilyName: Yup.string("فرمت اطلاعات وارد شده اشتباه است")
			.max(24, "نام بسیار طولانی است!")
			.required("فیلد الزامی"),
		email: Yup.string("فرمت اطلاعات وارد شده اشتباه است")
			.email("فرمت ایمیل اشتباه است")
			.required("فیلد الزامی"),
		username: Yup.string("فرمت اطلاعات وارد شده اشتباه است")
			.max(16, "نام کاربری بسیار طولانی است!")
			.required("فیلد الزامی"),
		phoneNumber: Yup.string()
			.matches(phoneRegEx, "شماره تماس نامعتبر")
			.max(11, "شماره تماس نامعتبر")
			.required("فیلد الزامی"),
	});

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-6'>
					<Formik
						validationSchema={Validate}
						initialValues={initialFormValue}
						onSubmit={(values) => formSubmitHandler(values)}
					>
						{(formik) => (
							<Form onChange={formValidationHandler}>
								<div className='mb-3'>
									<InputwithValidation
										type='file'
										id='avatar'
										label='تصویر'
										name='avatar'
									/>
								</div>
								<div className='mb-3'>
									<InputwithValidation
										type='text'
										id='username'
										label='نام کاربری'
										name='username'
										placeholder='مثال: alimohammadi'
									/>
								</div>
								<div className='mb-3'>
									<InputwithValidation
										type='text'
										id='nameAndFamilyName'
										label='نام و نام خانوادگی'
										name='nameAndFamilyName'
										placeholder='مثال: علی محمدی'
									/>
								</div>
								<div className='mb-3 '>
									<InputwithValidation
										type='email'
										id='email'
										label='ایمیل'
										name='email'
										placeholder='مثال: name@example.com'
									/>
								</div>
								<div className='mb-3'>
									<InputwithValidation
										type='text'
										id='phoneNumber'
										label='شماره تماس'
										name='phoneNumber'
										placeholder='مثال: 09112223344'
									/>
								</div>
								{formIsValid ? (
									<CButton type='submit' color='success'>
										ثبت
									</CButton>
								) : (
									<CButton type='submit' color='success' disabled>
										ثبت
									</CButton>
								)}
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
}

export default AddUsers;
