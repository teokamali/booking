import React from "react";
import image from "../../../assets/image/house.jpg";
import "./BlogCard.scss";
function BlogCard() {
  return (
    <div className="blog-card-wrapper">
      <div className="blog-card ">
        <img src={image} className="blog-card-img" alt="Blog" />
        <div className="blog-card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
