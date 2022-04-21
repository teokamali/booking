import React, { useContext } from "react";
//components
import Hero from "../components/Hero/Hero";
import Heading from "../components/Heading/Heading";
import CustomButton from "../components/CustomButton/CustomButton";
import VilaFinder from "../components/VilaFinder";
//other
import backgroundImage from "../assets/image/dubai.webp";

import "./HomeScreen.scss";
// context
import { ThemeContext } from "../context/ThemeContextProvider";
import { useTranslation } from "react-i18next";
const HomeScrean = () => {
  const { theme } = useContext(ThemeContext);

  const { t } = useTranslation();
  return (
    // <div className="theme" data-scheme={theme}>
    <div className="home-page container-fluid m-0 p-0">
      <Hero background={backgroundImage} overlayColor="rgba(0, 0, 0, 0.65)">
        <div className="hero__header">
          <div className="row">
            <div className="first-row col-6">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 420.477 420.477"
              >
                <g>
                  <g>
                    <path
                      d="M350.462,418.058H70.019c-6.587,0-11.934-5.346-11.934-11.934V224.588H11.937
			c-4.827,0-9.177-2.906-11.027-7.369c-1.85-4.457-0.829-9.589,2.59-13.002L201.803,5.914c4.654-4.66,12.214-4.66,16.874,0
			L416.98,204.211c3.413,3.413,4.433,8.545,2.59,13.002c-1.85,4.463-6.2,7.369-11.027,7.369h-46.148v181.542
			C362.395,412.717,357.049,418.058,350.462,418.058z M81.953,394.19h256.575V212.654c0-6.587,5.346-11.934,11.934-11.934h29.273
			L210.24,31.225L40.745,200.72h29.273c6.587,0,11.934,5.346,11.934,11.934V394.19z"
                    />
                  </g>
                </g>
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
              <span>Dubai Booking</span>
            </div>
            <div className="seconde-row col-6">
              <nav>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Blog</li>
                  <li>About Us</li>
                </ul>
              </nav>
              <div className="favorites">
                <span className="counter">0</span>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 490.4 490.4"
                >
                  <g>
                    <g>
                      <path
                        d="M222.5,453.7c6.1,6.1,14.3,9.5,22.9,9.5c8.5,0,16.9-3.5,22.9-9.5L448,274c27.3-27.3,42.3-63.6,42.4-102.1
			c0-38.6-15-74.9-42.3-102.2S384.6,27.4,346,27.4c-37.9,0-73.6,14.5-100.7,40.9c-27.2-26.5-63-41.1-101-41.1
			c-38.5,0-74.7,15-102,42.2C15,96.7,0,133,0,171.6c0,38.5,15.1,74.8,42.4,102.1L222.5,453.7z M59.7,86.8
			c22.6-22.6,52.7-35.1,84.7-35.1s62.2,12.5,84.9,35.2l7.4,7.4c2.3,2.3,5.4,3.6,8.7,3.6l0,0c3.2,0,6.4-1.3,8.7-3.6l7.2-7.2
			c22.7-22.7,52.8-35.2,84.9-35.2c32,0,62.1,12.5,84.7,35.1c22.7,22.7,35.1,52.8,35.1,84.8s-12.5,62.1-35.2,84.8L251,436.4
			c-2.9,2.9-8.2,2.9-11.2,0l-180-180c-22.7-22.7-35.2-52.8-35.2-84.8C24.6,139.6,37.1,109.5,59.7,86.8z"
                      />
                    </g>
                  </g>
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
              </div>
              <a href="/" className="btn btn-danger btn-book-now">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="hero__content d-flex flex-column justify-content-center align-items-center w-100 h-100">
          <h3 className="hero__content__title">
            Recharge energies in our uniq hotels
          </h3>
          <div className="hero__content__wrapper">
            <a href="/" className="btn">
              About us
            </a>
            <a href="/" className=" btn">
              Explore Rooms
            </a>
          </div>
        </div>
      </Hero>
    </div>
    // </div>
  );
};

export default HomeScrean;
