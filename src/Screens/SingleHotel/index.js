import avatar1 from "assets/image/avatars/1.jpg";

import {
	Accordion,
	Button,
	DynamicImage,
	FullNavBar,
	HambergurMenu,
	LoginModal,
	TimeLine,
	Loader2,
} from "components";
import HostInfoCard from "components/Cards/HostInfoCard";
import ReviewCard from "components/Cards/ReviewCard";
import UnitCard from "components/Cards/UnitCard";
import { useAuth } from "hooks/useAuth";
import { useGetPropertyById } from "hooks/useProperty";
import { Desktop, Mobile, Tablet } from "layout/BreakPoints";
import React from "react";
import { useLocation } from "react-router";
import StarRating from "react-svg-star-rating";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { icons } from "values";
import "./index.scss";

const SingleHotel = () => {
	const { isUserLoggedIn } = useAuth();
	// const [toggleState, setToggleState] = useState(1);
	// const toggleTab = (index) => {
	// 	setToggleState(index);
	// };
	const PropertyId = useLocation().pathname.split("/")[2];
	const { data } = useGetPropertyById(PropertyId);
	console.log(data?.data.rating);
	const RoomReserveHandler = (id) => {
		console.log(id);
	};
	return (
		<>
			{data ? (
				<div className='SinglePage'>
					{/* navBar */}
					<div className='SinglePage__Nav'>
						<Desktop>
							<FullNavBar Modal={LoginModal} isUserLoggedIn={isUserLoggedIn} />
						</Desktop>
						<Tablet>
							<HambergurMenu Modal={LoginModal} isUserLoggedIn={isUserLoggedIn} />
						</Tablet>
						<Mobile>
							<HambergurMenu Modal={LoginModal} isUserLoggedIn={isUserLoggedIn} />
						</Mobile>
					</div>
					{/* gallery */}
					<div className='SinglePage__Gallery'>
						<DynamicImage gallery={data.data.images} />
					</div>
					<div className='SinglePage__baseInformation SinglePage__section'>
						<h2 className='hotel-title'>{data.data.name}</h2>
						<p className='hotel-address'>{data.data.address.full} </p>
					</div>
					{/* navigation */}
					<div className='container'>
						<div className='bloc-tabs'>
							<a href='#profile' className={"tabs"}>
								<i className='fas fa-user'></i>
								Profile
							</a>
							<a href='#facilities' className={"tabs"}>
								<i className='fas fa-warehouse-full'></i>
								Facilities
							</a>
							<a href='#room' className={"tabs"}>
								<i className='fas fa-door-closed'></i>
								Room
							</a>
							<a href='#house-rules' className='tabs'>
								<i className='fas fa-memo'></i>
								House Rules
							</a>
							<a href='#faq' className='tabs'>
								<i className='fas fa-messages-question'></i>
								FAQ
							</a>
						</div>
						<div className='tag-tabs'>
							<a
								href={`https://www.google.com/maps/search/${data.data.address.location.latitude},${data.data.address.location.longitude}`}
								target='_blank'
								rel='noreferrer'
							>
								<i className='fas fa-route'></i>
								Direction
							</a>
							<a href={`mailto:${data.data.user.email}`}>
								<i className='fas fa-inbox-full'></i>
								Send Email
							</a>
							<a href='#reviews'>
								<i className='fas fa-comments'></i>
								Reviews
							</a>
							<a href='#'>
								<i className='fas fa-bookmark'></i>
								Bookmark
							</a>
							<a href='#'>
								<i className='fas fa-share'></i>
								Share
							</a>
						</div>
						{/* description */}
						<div className={"container single-hotel-description active-content"}>
							<h2>Description</h2>
							<div dangerouslySetInnerHTML={{ __html: data.data.description }}></div>
						</div>
						{/* Facilities */}
						<div
							className={"container content single-hotel-facalities active-content"}
							id='facilities'
						>
							<h2>Facilities</h2>
							<div className='row'>
								{Object.entries(data.data.facilities).map((item, index) => {
									const icon = Object.entries(icons).find(
										(key) => item[0] === key[0]
									);
									return (
										<div
											key={index}
											className='col-12 col-md-6 col-lg-3 amenities__wrapper'
										>
											<i className={icon[1]}></i>
											<span>{item[0]}</span>
										</div>
									);
								})}
							</div>
						</div>
						{/* Room and details */}
						<div className={"container single-hotel-room active-content"} id='room'>
							<h2>Room and details</h2>
							<div className=''>
								{data?.data.units.map((unit) => (
									<UnitCard
										data={unit}
										key={unit.id}
										buttonOnClick={() => {
											RoomReserveHandler(unit.id);
										}}
									/>
								))}
							</div>
						</div>
					</div>
					{/* host info */}
					<div className='container SinglePage__section' id='profile'>
						<HostInfoCard data={data?.data} />
					</div>
					{/* reviews */}
					<div className='container SinglePage__section' id='reviews'>
						<div className='section__header'>
							<span>Commnets</span>
						</div>
						<div className='review-wrapper'>
							<Desktop>
								{data.data.reviews.slice(0, 3).map((review) => (
									<ReviewCard
										key={review.id}
										image={avatar1}
										name='Ali Houshangi'
										country='United States'
										countryFlag='us'
										review={review.text}
									/>
								))}
							</Desktop>
							<Tablet>
								<Swiper
									slidesPerView={1}
									spaceBetween={10}
									navigation={true}
									modules={[Navigation]}
								>
									{data.data.reviews.map((review) => (
										<SwiperSlide key={review.id}>
											<ReviewCard
												image={avatar1}
												name='Ali Houshangi'
												country='United States'
												countryFlag='us'
												review={review.text}
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</Tablet>
							<Mobile>
								<Swiper
									slidesPerView={1}
									spaceBetween={10}
									navigation={true}
									modules={[Navigation]}
								>
									{data.data.reviews.map((review) => (
										<SwiperSlide key={review.id}>
											<ReviewCard
												image={avatar1}
												name='Ali Houshangi'
												country='United States'
												countryFlag='us'
												review={review.text}
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</Mobile>
						</div>
						<Button className='mt-3' hasBorder hasBoxShadow>
							Read all comments
						</Button>
					</div>
					{/* surroundings info */}
					<div className='container SinglePage__section AreaInfo'>
						<div className='section__header'>
							<span>Area Info</span>
						</div>
						<div className='AreaInfo'>
							<div className='row'>
								{Object.entries(data.data.surroundings).map((item, index) => {
									const icon = Object.entries(icons).find(
										(key) => item[0] === key[0]
									);
									return (
										<div className='col-12 col-md-6 col-lg-3' key={index}>
											<span className='area-Info-category'>
												<i className={`${icon[1]}`}></i>
												{item[0]}
											</span>
											<div className='places-wrapper'>
												{item[1].map((place, i) => (
													<div className='places' key={i + 10}>
														<span className='p-1'>{place.item}</span>
														<p className='m-0'>{place.distance}KM</p>
													</div>
												))}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					{/* guest rating */}
					<div className='container SinglePage__section'>
						<div className='section__header__row'>
							<span>Guest reviews</span>
							<div className='section__header__row__rating'>
								<div className='section__header__row__rating__wrapper'>
									<span>Rate: </span>
									<StarRating
										unit='float'
										isReadOnly
										initialRating={data.data.ratings_average}
									/>
								</div>
								<span className='total-rating'>{data.data.ratings_average}</span>
							</div>
						</div>
						<div>
							<h5>Categories:</h5>
							<div className='row'>
								{data.data.rating.map((item, i) => (
									<div className='col-12 col-md-6 col-lg-4' key={i}>
										<div className='category__rating'>
											<span>{item.name}: </span>
											<div className='category__rating__wrapper'>
												<StarRating
													unit='float'
													isReadOnly
													initialRating={
														Math.round(item.average_rate * 10) / 10
													}
												/>
												<span className='total-rating'>
													{Math.round(item.average_rate * 10) / 10}
												</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					{/* house rules */}
					<div id='house-rules' className='container SinglePage__section '>
						<div className='section__header'>
							<span>House Rules</span>
						</div>
						<div className='house__rules__wrapper'>
							<div className='house__rules'>
								<span>
									<i className='fas fa-calendar-range'></i> Check-In
								</span>
								<TimeLine start={8} end={16} />
							</div>
							<div className='house__rules'>
								<span>
									<i className='fas fa-calendar-range'></i> Check-Out
								</span>
								<TimeLine start={7} end={15} />
							</div>
							<div className='house__rules'>
								<span>
									<i className='fas fa-square-info'></i> Cancellation/Prepayment
								</span>
								<p>
									Cancellation and prepayment policies vary according to apartment
									type. Please enter the dates of your stay and check what
									conditions apply to your preferred room.
								</p>
							</div>
							<div className='house__rules'>
								<span>
									<i className='fas fa-square-info'></i> Refundable damage deposit
								</span>
								<p>
									A damage deposit of EUR 300 is required. The property charges
									this 7 days before arrival. This will be collected by credit
									card. You should be reimbursed within 14 days of check-out. Your
									deposit will be refunded in full by credit card, subject to an
									inspection of the property.
								</p>
							</div>
							<div className='house__rules'>
								<span>
									<i className='fas fa-family'></i> Children & Beds
								</span>
								<p>
									Child policies Children of all ages are welcome. To see correct
									prices and occupancy info, add the number and ages of children
									in your group to your search. Crib and extra bed policies No
									cribs or extra beds are available.
								</p>
							</div>
							<div className='house__rules'>
								<span>
									<i className='fas fa-user'></i> No age restriction
								</span>
								<p>There's no age requirement for check-in</p>
							</div>
							<div className='house__rules'>
								<span>
									<i className='fas fa-ban-smoking'></i>Smoking
								</span>
								<p>Smoking is not allowed.</p>
							</div>
							<div className='house__rules'>
								<span>
									<i className='fas fa-paw'></i> Pets
								</span>
								<p>Pets is not allowed.</p>
							</div>
							<div className='house__rules'>
								<span>
									<i className='fas fa-party-horn'></i> Parties
								</span>
								<p>Parties/events are not allowed</p>
							</div>
						</div>
					</div>
					{/* House FAQ */}
					<div id='faq' className='container SinglePage__section'>
						<div className='section__header'>
							<span>Frequently Asked Questions (FAQ)</span>
						</div>
						<Accordion items={data.data.faqs} />
					</div>
				</div>
			) : (
				<Loader2 />
			)}
		</>
	);
};

export default SingleHotel;
