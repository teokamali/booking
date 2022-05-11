import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { LoginValidate, RegisterValidate } from "../../validations";
import api from "../../api";
import Cookies from "js-cookie";
import { constans } from "../../values";
import { useNavigate } from "react-router";
import { userTypes } from "../../values";
import { Modal, CustomRadioButton2, Toastify, Button } from "../index";
import "./index.scss";

const LoginModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [registerForm, setRegisterForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    lang: "en",
    currency: "USD",
    user_type_id: 1,
    password: "",
    password_confirmation: "",
  });
  const navigate = useNavigate();
  const loginSubmitHandler = async (values) => {
    try {
      const loginRes = await api.webSiteLogin(values.email, values.password);
      Cookies.set(constans.TOKEN, loginRes.data.access_token);
      Toastify("success", "Logged in successfully");
      setTimeout(() => {
        navigate("/dashboard");
        document.querySelector(".modal-backdrop").remove("");
      }, 3000);
    } catch (error) {
      Toastify("error", "Invalid login");
    }
  };
  const registerSubmitHandler = async (values) => {
    const formData = {
      first_name: values.name,
      last_name: values.fname,
      email: values.email,
      lang: "en",
      currency: "USD",
      user_type_id: registerForm.user_type_id,
      password: values.password,
      password_confirmation: values.confirmPass,
    };
    try {
      const RegisterRes = await api.webSiteRegister(formData);
      Cookies.set(constans.TOKEN, RegisterRes.access_token);
      Toastify("success", "Registeration successfull!");
      setTimeout(() => {
        navigate("/dashboard");
        document.querySelector(".modal-backdrop").remove("");
      }, 3000);
    } catch (error) {
      Toastify("error", "An error occurred while registering");
    }
  };

  return (
    <Modal
      id="LoginModal"
      buttonClassnames="login-modal-btn"
      buttonText={<i className="fa-regular fa-user user-dashboard"></i>}
      modalTitle="Login/Register"
      submitButtonClassNames="d-none"
    >
      {/* Login form */}
      <div
        className="login-form"
        style={isLogin ? { left: "0" } : { left: "100%" }}
      >
        <h4>Login to Your Account</h4>
        <div className="other-options">
          <button className="login-with-fb">
            <span className="icon fa-brands fa-facebook-square"></span>
            Login with facebook
          </button>
          <button className="login-with-google">
            <span className="icon fa-brands fa-google"></span>
            Login with google
          </button>
        </div>
        <Formik
          validationSchema={LoginValidate}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            // same shape as initial values
            loginSubmitHandler(values);
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <div className="form-floating input-wrapper">
                <Field
                  className="form-control"
                  name="email"
                  placeholder="Email Address"
                  id="email"
                  type="text"
                />
                <label htmlFor="email">Email Address</label>

                {errors.email && touched.email && (
                  <span className="input-error">{errors.email}</span>
                )}
              </div>
              <div className="form-floating input-wrapper">
                <Field
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>

                {errors.password && touched.password && (
                  <span className="input-error">{errors.password}</span>
                )}
              </div>
              <span>
                dont have account?
                <button
                  type="button"
                  onClick={() => setIsLogin((prev) => !prev)}
                >
                  Register
                </button>
              </span>
              <Button isBold hasBorder type="submit" id="loginBtn">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* Register form */}
      <div
        className="register-form"
        style={!isLogin ? { left: "0" } : { left: "-100%" }}
      >
        <h4>Register</h4>
        <div className="other-options">
          <button className="login-with-fb">
            <span className="icon fa-brands fa-facebook-square"></span>
            Register with facebook
          </button>
          <button className="login-with-google">
            <span className="icon fa-brands fa-google"></span>
            Register with google
          </button>
        </div>
        <div className="user-role">
          <CustomRadioButton2
            data={userTypes}
            groupname="role"
            label="Register As:"
            value={registerForm.user_type_id}
            onValueChange={(value) =>
              setRegisterForm({
                ...registerForm,
                user_type_id: parseInt(value),
              })
            }
            backgroundColor="#ff3f3f"
            borderColor="#b1b7c1"
            boxShadow="0 0 0 0.25rem rgba(255, 63, 63, 0.28)"
            ActiveColor="#fff"
          />
        </div>
        <Formik
          validationSchema={RegisterValidate}
          initialValues={{
            name: "",
            fname: "",
            email: "",
            password: "",
            confirmPass: "",
          }}
          onSubmit={(values) => {
            registerSubmitHandler(values);
          }}
        >
          {({ errors, touched, values }) => (
            <Form onChange={() => console.log(errors)}>
              <div className="form-floating input-wrapper">
                <Field
                  className="form-control"
                  name="name"
                  placeholder="name"
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
                {errors.name && touched.name && (
                  <span className="input-error">{errors.name}</span>
                )}
              </div>
              <div className="form-floating input-wrapper">
                <Field
                  className="form-control"
                  name="fname"
                  placeholder="Family Name"
                  id="fname"
                  type="text"
                />
                <label htmlFor="fname">Family Name</label>

                {errors.fname && touched.fname && (
                  <span className="input-error">{errors.fname}</span>
                )}
              </div>
              <div className="form-floating input-wrapper">
                <Field
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  id="register-email"
                  type="text"
                />
                {errors.email && touched.email && (
                  <span className="input-error">{errors.email}</span>
                )}
                <label htmlFor="register-email">Email</label>
              </div>
              <div className=" form-floating input-wrapper">
                <Field
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  id="register-password"
                  type="password"
                />
                <label htmlFor="register-password">Password</label>

                {errors.password && touched.password && (
                  <span className="input-error">{errors.password}</span>
                )}
              </div>
              <div className="form-floating input-wrapper">
                <Field
                  className="form-control"
                  name="confirmPass"
                  placeholder="ConfirmPassword"
                  id="confirmPass"
                  type="password"
                />
                <label htmlFor="confirmPass">Confrim Password</label>

                {errors.confirmPass && touched.confirmPass && (
                  <span className="input-error">{errors.confirmPass}</span>
                )}
              </div>
              <span>
                Already have an account?
                <button
                  type="button"
                  onClick={() => setIsLogin((prev) => !prev)}
                >
                  Login
                </button>
              </span>
              <Button isBold hasBorder type="submit">
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};
export default LoginModal;
