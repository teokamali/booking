import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/flutter-logo.png";
import DashboardDropDownWithIcon from "../DashboardDropDownWithIcon";
import { Button } from "../index";
import { UserContext } from "context/UsersContextProvider";
import "./index.scss";

function HambergurMenu({ Modal, isUserLoggedIn }) {
  const { user, setUser } = useContext(UserContext);
  console.log(user.userInformation.first_name);
  const navList = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/about-us", title: "About" },
    { id: 3, link: "/blog", title: "Blog" },
    { id: 4, link: "/contact-us", title: "Contact Us" },
  ];
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
          {isUserLoggedIn ? (
            <span className="text-dark">{user.userInformation.first_name}</span>
          ) : (
            ""
          )}

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
              {navList.map((nav) => (
                <li key={nav.id}>
                  <Link to={nav.link}>{nav.title}</Link>
                </li>
              ))}

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
