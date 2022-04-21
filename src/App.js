import React from "react";
import { Route, Routes } from "react-router-dom";

// context
import ThemeContextProvider from "./context/ThemeContextProvider";
import VilaContextProvider from "./context/VilaContextProvider";
import UserContextProvider from "./context/UsersContextProvider";
// Routes
import WebsiteRoutes from "./Routes/WebsiteRoutes";
import PanelRoutes from "./Routes/PanelRoutes";

import "core-js";
import "./assets/fontawesome/pro/css/all.min.css";
import "bootstrap/dist/css/bootstrap-grid.rtl.min.css";
import "bootstrap/dist/css/bootstrap-utilities.rtl.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icons.min.css";
import "./assets/fonts/font-style.css";
import "./styles/global.css";
import "./styles/light.css";
import "./styles/dark.css";
import "./AdminPanel/scss/style.scss";

import { useTranslation } from "react-i18next";
import ProtectedRoutes from "./AdminPanel/components/ProtectedRoute";
import Login from "./AdminPanel/views/pages/login/Login";
import Register from "./components/Register/Register";

function App() {
  const { t } = useTranslation();
  document.title = t("app_title");

  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <VilaContextProvider>
          <Routes>
            <Route path="/*" element={<WebsiteRoutes />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/administrator/*" element={<PanelRoutes />} />
            </Route>
            <Route
              path="/administrator/login"
              name="Login Page"
              element={<Login />}
            />
          </Routes>
        </VilaContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
