import React, { useContext } from "react";
//components
import Hero from "../components/Hero/Hero";
import Heading from "../components/Heading/Heading";
import CustomButton from "../components/CustomButton/CustomButton";
import VilaFinder from "../components/VilaFinder";
import { Desktop, Mobile, Tablet } from "../layout/BreakPoints";
//other
import backgroundImage from "../assets/image/dubai.webp";

import "./HomeScreen.scss";
// context
import { ThemeContext } from "../context/ThemeContextProvider";
import { useTranslation } from "react-i18next";
import FullNavBar from "../components/FullNavBar/FullNavBar";
import HambergurMenu from "../components/HambergurMenu/HambergurMenu";
const HomeScrean = () => {
  const { theme } = useContext(ThemeContext);

  const { t } = useTranslation();
  return (
    // <div className="theme" data-scheme={theme}>
    <div className="home-page container-fluid m-0 p-0">
      <Hero background={backgroundImage} overlayColor="rgba(0, 0, 0, 0.65)">
        <Desktop>
          <FullNavBar />
        </Desktop>
        <Tablet>
          <HambergurMenu />
        </Tablet>
        <Mobile>
          <HambergurMenu />
        </Mobile>

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
