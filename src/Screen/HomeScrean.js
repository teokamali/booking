import React, { useContext } from "react";
//components
import Hero from "../components/Hero/Hero";
import { Desktop, Mobile, Tablet } from "../layout/BreakPoints";
//other
import backgroundImage from "../assets/image/dubai.webp";

import "./HomeScreen.scss";
// context
import { ThemeContext } from "../context/ThemeContextProvider";
import { useTranslation } from "react-i18next";
import FullNavBar from "../components/FullNavBar/FullNavBar";
import HambergurMenu from "../components/HambergurMenu/HambergurMenu";
import RedButton from "../components/Buttons/RedButton/RedButton";
import WhiteButton from "../components/Buttons/WhiteButton/WhiteButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import HouseCard from "../components/Cards/HouseCard/HouseCard";

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

        <div className="hero__content ">
          <div className="hero__content__wrapper">
            <h3 className="hero__content__title">
              Recharge energies in our uniq hotels
            </h3>
            <p className="hero__content__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              vel magni impedit quia accusamus dolore quas eaque, ea nulla
              libero fuga! Quo quis nisi autem!
            </p>
          </div>
          <div className="hero__content__Footer">
            <RedButton text="Explore Rooms" link="/" />
            <WhiteButton text="About us" link="/" />
          </div>
        </div>
      </Hero>
      {/* First Section */}
      <div className="section first__section">
        <div className="first__section__heading">
          <h3>Explore our Hotels</h3>
          <WhiteButton text="Browse All" link="/" className="with-box-shadow" />
        </div>
        <div className="slider-swiper mt-5">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
            navigation={true}
            centeredSlides={true}
            modules={[Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <HouseCard />
            </SwiperSlide>
            <SwiperSlide>
              <HouseCard />
            </SwiperSlide>
            <SwiperSlide>
              <HouseCard />
            </SwiperSlide>
            <SwiperSlide>
              <HouseCard />
            </SwiperSlide>
            <SwiperSlide>
              <HouseCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default HomeScrean;
