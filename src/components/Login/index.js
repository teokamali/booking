import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { countries } from "../../values";
import { useTranslation } from "react-i18next";
import { handleDirction } from "../../utils/functions";
import "./index.scss";

function Login() {
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [countryCode, setCountryCode] = useState({ flag: "us", code: "+1" });
  const { t } = useTranslation();

  return (
    <div className=" container form-layout-wrapper">
      {/* first form */}
      <div className="form-wrapper ">
        <div className={`first-form ${isEmailLogin ? "email-deactive" : ""}`}>
          <h2 className="text-center">{t("login_to_your_account")}</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                {t("email_address")}
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                {t("email_desc")}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                {t("password")}
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                className="form-check-input "
                id="exampleCheck1"
              />
              <label className="form-check-label ps-3" htmlFor="exampleCheck1">
                {t("checkbox_terms")}
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {t("login")}
            </button>
          </form>
          <div className="d-flex flex-column  justify-content-center text-center mb-3">
            <div>
              <div className="form-text">{t("dont_have_account")}</div>
              <Link to="/register">{t("register")}</Link>
            </div>
            <div>
              <div className="form-text">{t("have_troble_loging_in")}</div>
              <Link to="/recover-password">{t("recover_your_account")}</Link>
            </div>
          </div>
          <div className="more-options d-flex flex-column align-items-center">
            <p>{t("or_use_one_of_these_options")}</p>
            <div className="signin-options">
              <a href="google.com" className="signin-option">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
              </a>
              <a href="facebook.com" className="signin-option">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1"
                    x1="6.228"
                    x2="42.077"
                    y1="4.896"
                    y2="43.432"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#0d61a9"></stop>
                    <stop offset="1" stopColor="#16528c"></stop>
                  </linearGradient>
                  <path
                    fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)"
                    d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"
                  ></path>
                  <path
                    d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#fff"
                    d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"
                  ></path>
                </svg>
              </a>
              <button
                className=" signin-option"
                onClick={() => {
                  setIsPhoneLogin(!isPhoneLogin);
                  setIsEmailLogin(true);
                }}
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <circle
                    style={{ fill: "#FFEDB5" }}
                    cx="256"
                    cy="256"
                    r="256"
                  />
                  <path
                    style={{ fill: "#FFC61B" }}
                    d="M348.6,101.74L166.94,415.07l97.13,96.79c134.668-4.172,243.122-112.342,247.758-246.894
	L348.6,101.74z"
                  />
                  <path
                    style={{ fill: "#366695" }}
                    d="M208.401,117.048L208.401,117.048c-9.063,0-16.41-7.347-16.41-16.41V67.82
	c0-9.063,7.347-16.41,16.41-16.41l0,0c9.063,0,16.41,7.347,16.41,16.41v32.818C224.809,109.701,217.464,117.048,208.401,117.048z"
                  />
                  <path
                    style={{ fill: "#263A7A" }}
                    d="M184.865,422.357h145.529c14.189,0,25.691-11.502,25.691-25.691V119.865
	c0-14.189-11.502-25.691-25.691-25.691H184.865c-14.189,0-25.691,11.502-25.691,25.691v276.801
	C159.173,410.855,170.675,422.357,184.865,422.357z"
                  />
                  <path
                    style={{ fill: "#121149" }}
                    d="M330.392,94.174h-71.518v328.183h71.518c14.189,0,25.691-11.502,25.691-25.691V119.865
	C356.083,105.675,344.581,94.174,330.392,94.174z"
                  />
                  <rect
                    x="191.991"
                    y="127"
                    style={{ fill: "#4A7CA5" }}
                    width="131.275"
                    height="98.452"
                  />
                  <rect
                    x="258.879"
                    y="127"
                    style={{ fill: "#263A7A" }}
                    width="64.388"
                    height="98.452"
                  />
                  <circle
                    style={{ fill: "#4A7CA5" }}
                    cx="208.403"
                    cy="274.67"
                    r="16.41"
                  />
                  <circle
                    style={{ fill: "#273B7A" }}
                    cx="306.855"
                    cy="274.67"
                    r="16.41"
                  />
                  <circle
                    style={{ fill: "#4A7CA5" }}
                    cx="257.62"
                    cy="274.67"
                    r="16.41"
                  />
                  <path
                    style={{ fill: "#273B7A" }}
                    d="M274.037,274.675c0-8.642-6.685-15.708-15.163-16.346v32.692
	C267.352,290.382,274.037,283.317,274.037,274.675z"
                  />
                  <circle
                    style={{ fill: "#4A7CA5" }}
                    cx="208.403"
                    cy="373.122"
                    r="16.41"
                  />
                  <circle
                    style={{ fill: "#273B7A" }}
                    cx="306.855"
                    cy="373.122"
                    r="16.41"
                  />
                  <circle
                    style={{ fill: "#4A7CA5" }}
                    cx="257.62"
                    cy="373.122"
                    r="16.41"
                  />
                  <path
                    style={{ fill: "#273B7A" }}
                    d="M274.037,373.129c0-8.642-6.685-15.708-15.163-16.346v32.692
	C267.352,388.837,274.037,381.771,274.037,373.129z"
                  />
                  <circle
                    style={{ fill: "#4A7CA5" }}
                    cx="208.403"
                    cy="323.905"
                    r="16.41"
                  />
                  <circle
                    style={{ fill: "#273B7A" }}
                    cx="306.855"
                    cy="323.905"
                    r="16.41"
                  />
                  <circle
                    style={{ fill: "#4A7CA5" }}
                    cx="257.62"
                    cy="323.905"
                    r="16.41"
                  />
                  <path
                    style={{ fill: "#273B7A" }}
                    d="M274.037,323.901c0-8.642-6.685-15.708-15.163-16.346v32.692
	C267.352,339.609,274.037,332.545,274.037,323.901z"
                  />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* seconde form */}
      <div className="form-wrapper">
        <div
          className={`seconde-form  ${isPhoneLogin ? "phone-deactive" : ""}`}
        >
          <h2 className="text-center">{t("login_to_your_account")}</h2>
          <form>
            <div className="mb-3">
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={countries[0]}
                isRtl={handleDirction()}
                isSearchable={true}
                name="color"
                options={countries}
                onChange={(e) =>
                  setCountryCode({ flag: e.code.toLowerCase(), code: e.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">{t("phone_number")}</label>
              <div className="d-flex align-items-center phone-input-wrapper ">
                <span
                  className={`flag-icon flag-icon-${countryCode.flag}`}
                ></span>
                <p>{countryCode.code}</p>
                <input type="text" className="phone-input form-control" />
              </div>
            </div>
            <div className="verification-code">
              <label className="form-label">{t("verification_code")}</label>
              <input
                type="tel"
                className="form-control"
                maxLength="6"
                aria-describedby="basic-addon1"
              />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                {t("checkbox_terms")}
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              {t("login")}
            </button>
          </form>
          <div className="d-flex flex-column  justify-content-center text-center mb-3">
            <div>
              <div className="form-text">{t("dont_have_account")}</div>
              <Link to="/register">{t("register")}</Link>
            </div>
            <div>
              <div className="form-text">{t("have_troble_loging_in")}</div>
              <Link to="/recover-password">{t("recover_your_account")}</Link>
            </div>
          </div>
          <div className="more-options d-flex flex-column align-items-center">
            <p>{t("or_use_one_of_these_options")}</p>
            <div className="signin-options">
              <a href="google.com" className="signin-option">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
              </a>
              <a href="facebook.com" className="signin-option">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1"
                    x1="6.228"
                    x2="42.077"
                    y1="4.896"
                    y2="43.432"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#0d61a9"></stop>
                    <stop offset="1" stopColor="#16528c"></stop>
                  </linearGradient>
                  <path
                    fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)"
                    d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"
                  ></path>
                  <path
                    d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#fff"
                    d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"
                  ></path>
                </svg>
              </a>
              <button
                className=" signin-option"
                onClick={() => {
                  setIsEmailLogin(!isEmailLogin);
                  setIsPhoneLogin(true);
                }}
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <path
                    style={{ fill: "#E6F3FF" }}
                    d="M512,105.739v300.522c0,27.715-22.372,50.087-50.087,50.087H50.087
	C22.372,456.348,0,433.976,0,406.261V105.739c0-0.89,0-1.781,0.111-2.671c1.336-25.6,21.704-45.969,47.304-47.304
	c0.89-0.111,1.781-0.111,2.671-0.111h411.826c0.89,0,1.892,0,2.783,0.111c25.489,1.336,45.857,21.704,47.193,47.193
	C512,103.847,512,104.849,512,105.739z"
                  />
                  <path
                    style={{ fill: "#CFDBE6" }}
                    d="M464.696,55.763c-0.892-0.111-1.891-0.111-2.783-0.111H256v400.696h205.913
	c27.715,0,50.087-22.372,50.087-50.087V105.739c0-0.89,0-1.892-0.111-2.783C510.553,77.468,490.184,57.099,464.696,55.763z"
                  />
                  <path
                    style={{ fill: "#FF4B26" }}
                    d="M511.889,102.957c-1.336-25.489-21.704-45.857-47.193-47.193
	C382.89,137.569,336.951,183.509,256,264.459C225.291,233.732,77.61,85.958,47.416,55.763c-25.6,1.336-45.969,21.704-47.304,47.304
	C0,103.958,0,104.849,0,105.739v300.522c0,27.715,22.372,50.087,50.087,50.087h16.696V169.739l165.621,165.51
	c6.456,6.567,15.026,9.795,23.597,9.795c8.57,0,17.141-3.228,23.597-9.795l165.621-165.621v286.72h16.696
	c27.715,0,50.087-22.372,50.087-50.087V105.739C512,104.849,512,103.847,511.889,102.957z"
                  />
                  <path
                    style={{ fill: "#D93F21" }}
                    d="M279.596,335.249l165.621-165.621v286.72h16.696c27.715,0,50.087-22.372,50.087-50.087V105.739
	c0-0.89,0-1.892-0.111-2.783c-1.336-25.489-21.704-45.857-47.193-47.193C382.891,137.569,336.951,183.509,256,264.459v80.584
	C264.57,345.043,273.141,341.816,279.596,335.249z"
                  />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
