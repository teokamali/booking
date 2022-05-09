import React, { useState } from "react";
import logo from "../../assets/image/flutter-logo.png";
import Select from "react-select";
import api from "../../api/";
import * as Yup from "yup";
import { Toastify, Button, Modal } from "../index";

import { Field, Form, Formik } from "formik";
import { userTypes } from "../../values";
import "./index.scss";

const LoginValidate = Yup.object({
  email: Yup.string()
    .email("Email Format Is Invalid")
    .required("Email Is Required"),
  password: Yup.string().required("Password Is Requaired"),
});
const RegisterValidate = Yup.object({
  name: Yup.string()
    .max(15, "Name Most Be Less Then 15 Characters")
    .required("Name Is Required"),
  fname: Yup.string()
    .max(15, "Family Name  Most Be Less Then 15 Characters")
    .required("Family Name Is Required"),
  email: Yup.string().email("Email Invalid").required("Email Is Required"),
  password: Yup.string().required("Password Feild Is Requaired For Changes"),
  confirmPass: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords Are Not Match")
    .required("You Need To Confirm Your Password"),
});

function FullNavBar() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
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
  const loginSubmitHandler = (values) => {
    try {
      Toastify("success", "Login hander");
      api.webSiteLogin(values.email, values.password);
    } catch (error) {
      console.log(error);
    }
  };
  const registerSubmitHandler = (values) => {
    try {
      Toastify("success", "Register hander");

      api.webSiteRegister(registerForm);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <header className="full-navbar">
        <div className="row">
          <div className="first-row col-6">
            <div className="full-nav-logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="seconde-row col-6">
            <nav>
              <ul>
                <li>
                  <a href="/"> Home</a>
                </li>
                <li>
                  <a href="/"> About</a>
                </li>
                <li>
                  <a href="/"> Blog</a>
                </li>
                <li>
                  <a href="/"> About Us</a>
                </li>
              </ul>
            </nav>
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
                    <Form
                      onChange={() => {
                        setLoginForm({
                          email: values.email,
                          password: values.password,
                        });
                      }}
                    >
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
                      <Button isBold hasBorder type="submit">
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
                <Formik
                  validationSchema={RegisterValidate}
                  initialValues={{
                    name: "",
                    fname: "",
                    email: "",
                    password: "",
                    confirmPass: "",
                    role: 1,
                  }}
                  onSubmit={(values) => {
                    // same shape as initial values
                    registerSubmitHandler(values);
                  }}
                >
                  {({ errors, touched, values }) => (
                    <Form
                      onChange={() => {
                        setRegisterForm({
                          first_name: values.name,
                          last_name: values.fname,
                          email: values.email,
                          lang: "en",
                          currency: "USD",
                          user_type_id: values.role,
                          password: values.password,
                          password_confirmation: values.confirmPass,
                        });
                      }}
                    >
                      <Select
                        name="role"
                        options={userTypes}
                        defaultValue={userTypes[0]}
                        onChange={(e) => (values.role = e.value)}
                        className="input-wrapper"
                      />
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
                          <span className="input-error">
                            {errors.confirmPass}
                          </span>
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
            <div className="favorites">
              <span className="counter">0</span>
              <i className="fa-regular fa-heart heart-icon"></i>
            </div>
            <Button isBold>Book Now</Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default FullNavBar;
