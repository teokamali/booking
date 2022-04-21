import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Logo from "../assets/image/logo.png";
import { languages } from "../utils/Languages";
import jsCookie from "js-cookie";

import "./Layout.scss";
import TopNavBanner from "../components/TopNavBanner/TopNavBanner";
import topBanner from "../assets/image/topnavbanner.jpg";

function Layout({ children }) {
  const currentlanguageCode = jsCookie.get("i18next") || "en";
  const currentLanguage = languages.find(
    (lang) => lang.code === currentlanguageCode
  );

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);
  return (
    <div className={`main-layout`}>
      {/* <TopNavBanner image={topBanner} alt="topbanner" /> */}
      {/* <Header logo={Logo} isSticky={false} /> */}
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
