import React from "react";
import "./HambergurMenu.scss";
import logo from "../../assets/image/flutter-logo.png";
import CustomButton from "../CustomButton/CustomButton";
function HambergurMenu() {
  return (
    <header className="hambergur-menu">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <input
        type="checkbox"
        className="menu-btn"
        id="menu-btn"
        autoComplete="off"
      />

      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>

      <ul className="menu">
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="/"> About</a>
        </li>
        <li>
          <a href="/"> Blog</a>
        </li>
        <li>
          <a href="/"> About Us</a>
        </li>
        <li>
          <CustomButton
            btnWidth="90%"
            type="customBtn"
            text="Book Now"
            csColor="#fff"
            csBgColor="#FF3F3F"
          />
        </li>
      </ul>
    </header>
  );
}

export default HambergurMenu;
