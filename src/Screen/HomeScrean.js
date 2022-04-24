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
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <image
                  id="house"
                  width="36"
                  height="36"
                  xlinkHref="data:image/png;base64,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"
                />
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
