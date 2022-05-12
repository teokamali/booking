import React, { useState } from "react";
import logo from "../../assets/image/flutter-logo.png";
import "./index.scss";
import Button from "../Button";
import DashboardDropDownWithIcon from "../DashboardDropDownWithIcon";

function FullNavBar({ Modal, isUserLoggedIn }) {
  return (
    <>
      <header className="full-navbar">
        <div className="row">
          <div className="first-row col-6">
            <div className="full-nav-logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="seconde-row col-6">
            <nav>
              <ul>
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
              </ul>
            </nav>
            {isUserLoggedIn ? <DashboardDropDownWithIcon /> : <Modal />}
            <div className="favorites">
              <span className="counter">0</span>
              <i className="fa-regular fa-heart heart-icon"></i>
            </div>
            <Button isBold>Book Now</Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default FullNavBar;
