import React from "react";
import styled from "styled-components";
const Banner = ({ link, image, className }) => {
  const BannerEl = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    & a {
      text-decoration: none;
      & figure {
        margin: 0;
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 24px;
        padding-bottom: 23.571%;
        box-shadow: 0 0 10px 0 rgb(0 0 0 / 7%);
        & img {
          border-radius: 20px;

          & ::before {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            content: " ";
            position: absolute;
            pointer-events: none;
            border-radius: inherit;
            border: 1px solid #ddd;
          }
          object-fit: cover;
          border-radius: inherit;
          height: 100%;
          width: 100%;
          position: absolute;
          & ::after {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: " ";
            position: absolute;
            border-radius: inherit;
            background: hsla(0, 0%, 96.9%, 0.48) 50%;
          }
        }
      }
    }
  `;

  return (
    <BannerEl className={`container-fluid ${className}`}>
      <a href={link} target="_blank" rel="noreferrer">
        <figure>
          <img src={image} alt="banner" className="container-fluid" />
        </figure>
      </a>
    </BannerEl>
  );
};

export default Banner;
