import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import { languages } from "../utils/Languages";
import jsCookie from "js-cookie";

import "./Layout.scss";

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
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
