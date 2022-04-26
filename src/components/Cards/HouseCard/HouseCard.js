import React from "react";
import image from "../../../assets/image/ramsar.jpg";
import RedButton from "../../Buttons/RedButton/RedButton";
import "./HouseCard.scss";
function HouseCard() {
  return (
    <div className="house__card">
      <div className="house__card__header">
        <img src={image} alt="House" />
      </div>
      <div className="house__card__body">
        <h3>Name</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <div className="house__card__body__features">
          <a href="/" className="house__card__body__features__button">
            <i className="fa-light fa-bed-front"></i>
            <span>2</span>
            Bedrooms
          </a>
          <a href="/" className="house__card__body__features__button">
            <i className="fa-thin fa-users"></i>
            <span>4</span>
            Guests
          </a>
        </div>
      </div>
      <div className="house__card__footer">
        <RedButton text="Book  Now" link="/" />
      </div>
    </div>
  );
}

export default HouseCard;
