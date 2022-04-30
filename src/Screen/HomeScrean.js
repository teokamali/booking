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
import Banner from "../components/Banner/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import HouseCard from "../components/Cards/HouseCard/HouseCard";
import Button from "../components/Button/Button";

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
            <Button isLarge isBold>
              Explore Rooms
            </Button>
            <Button isLarge isPrimary isBold isWhite>
              About us
            </Button>
          </div>
        </div>
      </Hero>
      {/* First Section */}
      <div className="section first__section">
        <div className="first__section__heading">
          <h3>Explore our Hotels</h3>
          <Button isWhite hasBorder hasBoxShadow isPrimary>
            Book Now
          </Button>
        </div>
        <div className="slider-swiper">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
            navigation={true}
            centeredSlides={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                centeredSlides: false,
              },
              375: {
                slidesPerView: 1,
                spaceBetween: 31,
                centeredSlides: true,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 31,
                centeredSlides: true,
              },

              640: {
                slidesPerView: 2,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              1220: {
                slidesPerView: 4.5,
                centeredSlides: true,
                spaceBetween: 45,
              },
              1440: {
                slidesPerView: 4.5,
                centeredSlides: true,
              },
              2560: {
                slidesPerView: 5.5,
                centeredSlides: true,
              },
            }}
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
      {/* banner section */}
      <div className="section banner__section">
        <Banner />
      </div>
    </div>
    // </div>
  );
};

export default HomeScrean;
