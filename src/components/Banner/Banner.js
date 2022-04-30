import React from "react";
import Button from "../Button/Button";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__header">
        <span>
          Relax in one of our luxury hotels
          <br />
          We make happy moments for you
        </span>
      </div>
      <div className="banner__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ulabore et dolore magna aliqua Egestas purus
          viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus
          aenean vel elit scelerisqueLorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore
          magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus
          vitae congue mauris rhoncus aenean vel elit scelerisque
        </p>
      </div>
      <div className="banner__footer">
        <Button isLarge hasBorder isWhite>
          Explore rooms
        </Button>
        <Button hasBorder>Explore rooms</Button>
      </div>
    </div>
  );
}

export default Banner;
