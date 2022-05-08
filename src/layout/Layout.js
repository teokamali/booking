import React, { useEffect } from "react";
import { languages } from "../utils/Languages";
import jsCookie from "js-cookie";

import "./Layout.scss";
import Footer from "../components/Footer";
import CopyRight from "../components/CopyRight";

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
      <CopyRight />
    </div>
  );
}

export default Layout;
