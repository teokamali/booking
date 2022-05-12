import React from "react";
import logo from "../../assets/image/flutter-logo.png";
import DashboardDropDownWithIcon from "../DashboardDropDownWithIcon";
import { Button } from "../index";

import "./index.scss";

function HambergurMenu({ Modal, isUserLoggedIn }) {
  return (
    <>
      <header className="hambergur-menu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hambergur-menu_icons">
          <div className="hambergur-favorites">
            <span className="counter">0</span>
            <i className="fa-regular fa-heart heart-icon"></i>
          </div>
          {isUserLoggedIn ? <DashboardDropDownWithIcon /> : <Modal />}
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
            <div className="menu-wrapper">
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
                <Button className="w-100">Book Now</Button>
              </li>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}

export default HambergurMenu;
