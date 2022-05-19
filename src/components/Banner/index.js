import React from "react";
import "./index.scss";
const Banner = ({ image, description, titile }) => {
  return (
    <div className="Banner">
      <div className="Banner__overlay"></div>
      <img className="Banner__image" src={image} alt="" />
      <div className="Banner__description">
        <span>{titile}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
