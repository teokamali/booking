import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";
import i18next from "i18next";
import jsCookie from "js-cookie";
import { useTranslation } from "react-i18next";
import { languages } from "../../utils/Languages";
import { Link } from "react-router-dom";

const Header = ({ logo, isSticky, isHide }) => {
  const HeaderEl = styled.header`
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #fff;
    margin: 50px 0 0 0;
    &.sticky {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
    }
    &.hideNavbar {
      display: none;
      visibility: hidden;
    }
  `;
  const Logo = styled.img`
    width: 100px;
    height: 50px;
  `;
  const { t } = useTranslation();
  const currentlanguageCode = jsCookie.get("i18next") || "en";
  const currentLanguage = languages.find(
    (lang) => lang.code === currentlanguageCode
  );

  return (
    <HeaderEl
      className={`navbar ${isSticky ? "sticky" : ""} ${
        isHide ? "hideNavbar" : ""
      }`}
    >
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span
            className={`flag-icon flag-icon-${currentLanguage.country_code}`}
          ></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {languages.map((lang) => (
            <li key={lang.country_code}>
              <button
                className="dropdown-item"
                onClick={() => i18next.changeLanguage(lang.code)}
                disabled={lang.code === currentLanguage.code}
              >
                <span
                  className={`flag-icon flag-icon-${lang.country_code}`}
                ></span>
                {lang.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Logo src={logo} alt="logo" className="logo" />
      <Link to="login">
        <CustomButton
          type="customBtn"
          icon="fa fa-user"
          text={t("login_register")}
          csBgColor="transparent"
          csColor="#333"
          csBorderColor="#333"
          csOnFocusBoxShadow="unset"
        />
      </Link>
    </HeaderEl>
  );
};

export default Header;
