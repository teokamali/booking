import React, { useState } from "react";
import {
  DynamicImage,
  FullNavBar,
  HambergurMenu,
  LoginModal,
  Accordion,
} from "../../components";
import { useAuth } from "../../hooks/useAuth";
import { Desktop, Mobile, Tablet } from "../../layout/BreakPoints";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.scss";
import HostInfoCard from "../../components/Cards/HostInfoCard";

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

const SingleHotel = () => {
  const { isUserLoggedIn } = useAuth();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="SinglePage">
      {/* navBar */}
      <div className="SinglePage__Nav">
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
      <div className="SinglePage__Gallery">
        <DynamicImage gallery={gallery} />
      </div>
      {/* Tabs */}
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <i className="fas fa-user"></i>
            Profile
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <i className="fas fa-warehouse-full"></i>
            Facilities
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <i className="fas fa-door-closed"></i>
            Room
          </button>
          <a href="#house-rules" className="tabs">
            <i className="fas fa-memo"></i>
            House Rules
          </a>
          <a href="#faq" className="tabs">
            <i className="fas fa-messages-question"></i>
            FAQ
          </a>
        </div>
        <div className="tag-tabs">
          <a href="#">
            <i className="fas fa-route"></i>
            Direction
          </a>
          <a href="#">
            <i className="fas fa-inbox-full"></i>
            Send Email
          </a>
          <a href="#">
            <i className="fas fa-comments"></i>
            Reviews
          </a>
          <a href="#">
            <i className="fas fa-bookmark"></i>
            Bookmark
          </a>
          <a href="#">
            <i className="fas fa-share"></i>
            Share
          </a>
        </div>
        <div className="content-tabs">
          {/* description */}
          <div
            className={
              toggleState === 1
                ? "container content single-hotel-description active-content"
                : "container content single-hotel-description"
            }
          >
            <h2>Description</h2>
            <p>
              You're eligible for a Genius discount at Appartement Lyon Centre
              Confluence 100 m2 Parking Terrasses! To save at this property, all
              you have to do is sign in.
            </p>
            <p>
              Located in Lyon, 2.3 km from Musée Miniature et Cinéma,
              Appartement Lyon Centre Confluence 100 m2 Parking Terrasses
              provides accommodations with a shared lounge, free WiFi and a
              shared kitchen. Private parking is available on site.
            </p>
            <p>
              The apartment comes with 2 bedrooms, 1 bathroom, bed linen,
              towels, a flat-screen TV, a dining area, a fully equipped kitchen,
              and a balcony with city views.
            </p>
          </div>
          {/* Facilities */}
          <div
            className={
              toggleState === 2
                ? "container content single-hotel-facalities active-content"
                : "container content single-hotel-facalities"
            }
          >
            <h2>Amenities</h2>
            <div className="row">
              {amenities.map((item, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-3 amenities__wrapper"
                >
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Room and details */}
          <div
            className={
              toggleState === 3
                ? "container content single-hotel-room  active-content"
                : "container content single-hotel-room"
            }
          >
            <h2>Room and details</h2>
            <div className="row">
              {roomDetails.map((item, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-3 room-details__wrapper"
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
      <div className="container">
        <HostInfoCard />
      </div>
      {/* house rules */}
      <div id="house-rules" className="container ">
        <h4>House Rules</h4>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nam.
        Hic odio unde sequi aut harum eius nesciunt, reiciendis tempore aliquid
        recusandae vero nihil error sit iste accusantium. Aspernatur magnam
        assumenda dolore, reiciendis hic illo, facilis, nemo architecto incidunt
        placeat officiis. Magni doloribus totam dolorum quisquam laborum dolorem
        a dignissimos?
      </div>
      {/* House FAQ */}
      <div id="faq" className="container">
        <h4>faq</h4>
        <Accordion items={faqs} />
      </div>
    </div>
  );
};

export default SingleHotel;
