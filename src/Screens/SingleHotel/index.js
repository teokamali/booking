import React, { useEffect, useState } from "react";
import {
	DynamicImage,
	FullNavBar,
	HambergurMenu,
	LoginModal,
	Accordion,
	Button,
	TimeLine,
} from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useAuth } from "../../hooks/useAuth";
import { Desktop, Mobile, Tablet } from "../../layout/BreakPoints";
import HostInfoCard from "../../components/Cards/HostInfoCard";
import ReviewCard from "../../components/Cards/ReviewCard";
import avatar1 from "assets/image/avatars/1.jpg";
import avatar2 from "assets/image/avatars/2.jpg";
import avatar3 from "assets/image/avatars/3.jpg";
import "./index.scss";
import { icons } from "../../values";
import StarRating from "react-svg-star-rating";
import { useLocation } from "react-router";
import { useGetPropertyById } from "../../hooks/useProperty";

const gallery = [
	"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
	"https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
	"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const faqs = [
	{
		id: 1,
		htmlId: "Accordion1",
		headingId: "head1",
		label: "Test",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore consequuntur laboriosam.",
	},
	{
		id: 2,
		htmlId: "Accordion2",
		headingId: "head2",
		label: "Test",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore consequuntur laboriosam.",
	},
	{
		id: 3,
		htmlId: "Accordion3",
		headingId: "head3",
		label: "Test",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore consequuntur laboriosam.",
	},
];
const amenities = [
	{ icon: "fas fa-car", title: "Parking" },
	{ icon: "fas fa-chair", title: "Living Area" },
	{ icon: "fas fa-tree-palm", title: "Outdoor And View" },
	{ icon: "fas fa-signal", title: "Internet" },
	{ icon: "fas fa-tv", title: "Media And Technology" },
	{ icon: "fas fa-car", title: "Parking" },
	{ icon: "fas fa-chair", title: "Living Area" },
	{ icon: "fas fa-tree-palm", title: "Outdoor And View" },
	{ icon: "fas fa-signal", title: "Internet" },
	{ icon: "fas fa-tv", title: "Media And Technology" },
];
const roomDetails = [
	{ icon: "fas fa-car", title: "Parking", quantity: 3 },
	{ icon: "fas fa-chair", title: "Living Area", quantity: 5 },
	{ icon: "fas fa-tree-palm", title: "Outdoor And View", quantity: 5 },
	{ icon: "fas fa-tv", title: "Media And Technology", quantity: 6 },
	{ icon: "fas fa-signal", title: "Internet", quantity: 2 },
];
const areaInfo = [
	{
		category: "restourant",
		places: [
			{ name: "KFC", distance: 2 },
			{ name: "KFC", distance: 2 },
			{ name: "KFC", distance: 2 },
			{ name: "KFC", distance: 2 },
			{ name: "KFC", distance: 2 },
		],
	},
	{
		category: "gym",
		places: [
			{ name: "Pro", distance: 1.3 },
			{ name: "Pro", distance: 1.3 },
			{ name: "Pro", distance: 1.3 },
		],
	},
	{
		category: "hospital",
		places: [
			{
				name: "Ghaem",
				distance: 1,
			},
			{
				name: "Ghaem",
				distance: 1,
			},
			{
				name: "Ghaem",
				distance: 1,
			},
		],
	},
	{
		category: "park",
		places: [
			{
				name: "Sia Bagh",
				distance: 0.5,
			},
			{
				name: "Sia Bagh",
				distance: 0.5,
			},
			{
				name: "Sia Bagh",
				distance: 0.5,
			},
			{
				name: "Sia Bagh",
				distance: 0.5,
			},
		],
	},
];
const categoryRating = [
	{
		id: 1,
		title: "Staff",
		rating: 4.4,
	},
	{
		id: 2,
		title: "Facilities",
		rating: 4.4,
	},
	{
		id: 3,
		title: "Cleanliness",
		rating: 4.4,
	},
	{
		id: 5,
		title: "Comfort",
		rating: 3.3,
	},
	{
		id: 6,
		title: "Value For Money",
		rating: 5,
	},
	{
		id: 7,
		title: "Location",
		rating: 2.6,
	},
	{
		id: 8,
		title: "Free WiFi",
		rating: 2.8,
	},
];
const SingleHotel = () => {
	const { isUserLoggedIn } = useAuth();
	// const [toggleState, setToggleState] = useState(1);
	// const toggleTab = (index) => {
	// 	setToggleState(index);
	// };
	const PropertyId = useLocation().pathname.split("/")[2];
	const { data } = useGetPropertyById(PropertyId);
	console.log(data?.data);

	return (
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
				<DynamicImage gallery={data ? data.data.images : gallery} />
			</div>
			<div className='SinglePage__baseInformation SinglePage__section'>
				<h2 className='hotel-title'>{data ? data.data.name : ""}</h2>
				<p className='hotel-address'>{data ? data.data.address.full : ""} </p>
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
					<a href='#'>
						<i className='fas fa-route'></i>
						Direction
					</a>
					<a href='#'>
						<i className='fas fa-inbox-full'></i>
						Send Email
					</a>
					<a href='#'>
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
				<div className='content-tabs'>
					{/* description */}
					<div className={"container content single-hotel-description active-content"}>
						<h2>Description</h2>
						<div dangerouslySetInnerHTML={{ __html: data?.data.description }}></div>
					</div>
					{/* Facilities */}
					<div
						className={"container content single-hotel-facalities active-content"}
						id='facilities'
					>
						<h2>Facilities</h2>
						<div className='row'>
							{amenities.map((item, index) => (
								<div
									key={index}
									className='col-12 col-md-6 col-lg-3 amenities__wrapper'
								>
									<i className={item.icon}></i>
									<span>{item.title}</span>
								</div>
							))}
						</div>
					</div>
					{/* Room and details */}
					<div className={"container content single-hotel-room active-content"} id='room'>
						<h2>Room and details</h2>
						<div className='row'>
							{roomDetails.map((item, index) => (
								<div
									key={index}
									className='col-12 col-md-6 col-lg-3 room-details__wrapper'
								>
									<div>
										<i className={item.icon}></i>
										<span>X{item.quantity}</span>
									</div>
									<span>{item.title}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			{/* host info */}
			<div className='container SinglePage__section' id='profile'>
				<HostInfoCard />
			</div>
			{/* reviews */}
			<div className='container SinglePage__section'>
				<div className='section__header'>
					<span>Commnets</span>
				</div>
				<div className='review-wrapper'>
					<Desktop>
						<ReviewCard
							image={avatar1}
							name='Ali Houshangi'
							country='United States'
							countryCode='us'
							review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nam.'
						/>
						<ReviewCard
							image={avatar2}
							name='Mamad'
							country='United States'
							countryCode='us'
							review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nam.'
						/>
						<ReviewCard
							image={avatar3}
							name='mehrad'
							country='United States'
							countryCode='us'
							review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nam.'
						/>
					</Desktop>
					<Tablet>
						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							navigation={true}
							modules={[Navigation]}
						>
							<SwiperSlide>
								<ReviewCard
									image={avatar1}
									name='Ali Houshangi'
									country='United States'
									countryCode='us'
									review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nam.'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<ReviewCard
									image={avatar2}
									name='Mamad'
									country='United States'
									countryCode='us'
									review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nam.'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<ReviewCard
									image={avatar3}
									name='mehrad'
									country='United States'
									countryCode='us'
									review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nam.'
								/>
							</SwiperSlide>
						</Swiper>
					</Tablet>
					<Mobile>
						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							navigation={true}
							modules={[Navigation]}
						>
							<SwiperSlide>
								<ReviewCard
									image={avatar1}
									name='Ali Houshangi'
									country='United States'
									countryCode='us'
									review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nam.'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<ReviewCard
									image={avatar2}
									name='Mamad'
									country='United States'
									countryCode='us'
									review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nam.'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<ReviewCard
									image={avatar3}
									name='mehrad'
									country='United States'
									countryCode='us'
									review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nam.'
								/>
							</SwiperSlide>
						</Swiper>
					</Mobile>
				</div>
				<Button className='mt-3' hasBorder hasBoxShadow>
					Read all comments
				</Button>
			</div>
			{/* Area info */}
			<div className='container SinglePage__section AreaInfo'>
				<div className='section__header'>
					<span>Area Info</span>
				</div>
				<div className='AreaInfo'>
					<div className='row'>
						{areaInfo.map((item, index) => {
							const icon = icons.find((icon) => item.category === icon.name);
							return (
								<div className='col-12 col-md-6 col-lg-3' key={index}>
									<span className='area-Info-category'>
										<i className={`${icon.iconClass}`}></i>
										{item.category}
									</span>
									<div className='places-wrapper'>
										{item.places.map((place, index) => (
											<div className='places' key={index}>
												<span className='p-1'>{place.name}</span>
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
							<StarRating unit='float' isReadOnly initialRating={4.4} />
						</div>
						<span className='total-rating'>4.4</span>
					</div>
				</div>
				<div>
					<h5>Categories:</h5>
					<div className='row'>
						{categoryRating.map((item, i) => (
							<div className='col-12 col-md-6 col-lg-4' key={i}>
								<div className='category__rating'>
									<span>{item.title}: </span>
									<div className='category__rating__wrapper'>
										<StarRating
											unit='float'
											isReadOnly
											initialRating={item.rating}
										/>
										<span className='total-rating'>{item.rating}</span>
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
							Cancellation and prepayment policies vary according to apartment type.
							Please enter the dates of your stay and check what conditions apply to
							your preferred room.
						</p>
					</div>
					<div className='house__rules'>
						<span>
							<i className='fas fa-square-info'></i> Refundable damage deposit
						</span>
						<p>
							A damage deposit of EUR 300 is required. The property charges this 7
							days before arrival. This will be collected by credit card. You should
							be reimbursed within 14 days of check-out. Your deposit will be refunded
							in full by credit card, subject to an inspection of the property.
						</p>
					</div>
					<div className='house__rules'>
						<span>
							<i className='fas fa-family'></i> Children & Beds
						</span>
						<p>
							Child policies Children of all ages are welcome. To see correct prices
							and occupancy info, add the number and ages of children in your group to
							your search. Crib and extra bed policies No cribs or extra beds are
							available.
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
				<Accordion items={faqs} />
			</div>
		</div>
	);
};

export default SingleHotel;
