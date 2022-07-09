import React, { useContext, useEffect, useState } from "react";
//components
import { Desktop, Mobile, Tablet } from "../../layout/BreakPoints";
import {
	CallToAction,
	Button,
	FullNavBar,
	HambergurMenu,
	Hero,
	LoginModal,
	Loader2,
} from "../../components";

//other
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import backgroundImage from "../../assets/image/dubai.webp";
// context
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useTranslation } from "react-i18next";

import HouseCard from "../../components/Cards/HouseCard";
import BlogCard from "../../components/Cards/BlogCard";
import "./HomeScreen.scss";
import { useAuth } from "../../hooks/useAuth";
import { useGetBestProperties } from "../../hooks/useProperty";
import { Link } from "react-router-dom";

const HomeScrean = () => {
	const { t } = useTranslation();
	const { isUserLoggedIn } = useAuth();
	const { data: hotelsData, isLoading: isHotelsLoading } = useGetBestProperties();
	return (
		// <div className="theme" data-scheme={theme}>
		<>
			{hotelsData ? (
				<div className='home-page container-fluid m-0 p-0'>
					<Hero background={backgroundImage} overlayColor='rgba(0, 0, 0, 0.65)'>
						<Desktop>
							<FullNavBar Modal={LoginModal} isUserLoggedIn={isUserLoggedIn} />
						</Desktop>
						<Tablet>
							<HambergurMenu Modal={LoginModal} isUserLoggedIn={isUserLoggedIn} />
						</Tablet>
						<Mobile>
							<HambergurMenu Modal={LoginModal} isUserLoggedIn={isUserLoggedIn} />
						</Mobile>

						<div className='hero__content '>
							<div className='hero__content__wrapper'>
								<h3 className='hero__content__title'>
									Recharge energies in our uniq hotels
								</h3>
								<p className='hero__content__desc'>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Possimus vel magni impedit quia accusamus dolore quas eaque, ea
									nulla libero fuga! Quo quis nisi autem!
								</p>
							</div>
							<div className='hero__content__Footer'>
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
					<div className='section first__section'>
						<div className='section__heading'>
							<h3>Explore our Hotels</h3>
							<Link to='/hotels' className='btn-main'>
								See More
							</Link>
						</div>
						<div className='slider-swiper'>
							<Swiper
								slidesPerView={4}
								spaceBetween={10}
								loop={true}
								navigation={true}
								centeredSlides={false}
								breakpoints={{
									320: {
										slidesPerView: 1,
										centeredSlides: false,
									},
									375: {
										slidesPerView: 1,
										spaceBetween: 31,
										centeredSlides: false,
									},
									425: {
										slidesPerView: 1,
										spaceBetween: 31,
										centeredSlides: false,
									},

									640: {
										slidesPerView: 2,
										centeredSlides: false,
									},
									768: {
										slidesPerView: 2,
										centeredSlides: false,
									},
									1024: {
										slidesPerView: 3,
										centeredSlides: false,
									},
									1220: {
										slidesPerView: 4.5,
										centeredSlides: false,
										spaceBetween: 45,
									},
									1440: {
										slidesPerView: 4.5,
										centeredSlides: false,
									},
									2560: {
										slidesPerView: 5.5,
										centeredSlides: false,
									},
								}}
								modules={[Navigation]}
								// onSlideChange={() => console.log("slide change")}
								// onSwiper={(swiper) => console.log(swiper)}
							>
								{hotelsData.data.map((item, i) => (
									<SwiperSlide key={item.property_id}>
										<HouseCard
											id={item.property_id}
											name={item.property_name}
											image={item.cover_image.medium_image_link}
											description={item.property_subtitle}
											maxGuests={item.max_guests_count}
											maxBedrooms={item.max_unit_bedrooms}
											startPrice={item.min_unit_price}
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
					{/* banner section */}
					<div className='section banner__section'>
						<CallToAction />
					</div>
					{/* blog sectoin*/}
					<div className='section seconde-section'>
						<div className='section__heading'>
							<h3>Explore our Blogs</h3>
							<Button isWhite hasBorder hasBoxShadow isPrimary>
								Browse All
							</Button>
						</div>
						<div className='blog-section mb-5'>
							<Mobile>
								<BlogCard />
							</Mobile>
							<Tablet>
								<BlogCard />
							</Tablet>
							<Desktop>
								<BlogCard />
								<BlogCard />
								<BlogCard />
							</Desktop>
						</div>
					</div>
				</div>
			) : (
				<Loader2 />
			)}
		</>
		// </div>
	);
};

export default HomeScrean;
