import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilEnvelopeOpen, cilMenu } from "@coreui/icons";

import { AppBreadcrumb } from "./index";
import { AppHeaderDropdown } from "./header/index";
import { logo } from "../../assets/image/brand/logo";
import i18next from "i18next";
import jsCookie from "js-cookie";
import { useTranslation } from "react-i18next";
import { languages } from "../../utils/Languages";

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const { t } = useTranslation();
  const currentlanguageCode = jsCookie.get("i18next") || "en";
  const currentLanguage = languages.find(
    (lang) => lang.code === currentlanguageCode
  );
  useEffect(() => {
    document.querySelector("html").dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/administrator/dashboard" component={NavLink}>
              داشبورد
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/administrator/products" component={NavLink}>
              محصولات
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/administrator/settings" component={NavLink}>
              تنظیمات
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <div className="dropdown2">
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
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
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
          </CNavItem>
          <CNavItem>
            <CNavLink to="/" component={NavLink}>
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
