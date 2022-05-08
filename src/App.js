import React from "react";
import { Route, Routes } from "react-router-dom";

// context
import ThemeContextProvider from "./context/ThemeContextProvider";
import VilaContextProvider from "./context/VilaContextProvider";
import UserContextProvider from "./context/UsersContextProvider";
// Routes
import WebsiteRoutes from "./Routes/WebsiteRoutes";
import PanelRoutes from "./Routes/PanelRoutes";

import { useTranslation } from "react-i18next";
import Login from "./AdminPanel/views/pages/login/Login";
import Register from "./AdminPanel/views/pages/register/Register";
import RequireAuth from "./AdminPanel/components/RequierAuth";
import { AuthProvider } from "./AdminPanel/context/AuthProvider";
import login from "./AdminPanel/api/login";

function App() {
  const { t } = useTranslation();
  document.title = t("app_title");
  login();
  const ROLES = {
    User: 2001,
    Editor: 1984,
    Admin: 5150,
  };
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <VilaContextProvider>
          <AuthProvider>
            <Routes>
              <Route path="/*" element={<WebsiteRoutes />} />
              <Route
                path="/administrator/login"
                name="Login Page"
                element={<Login />}
              />
              <Route
                path="/administrator/register"
                name="Register Page"
                element={<Register />}
              />
              {/* Protected Routes */}
              <Route path="/administrator/*" element={<PanelRoutes />} />
              {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="/administrator/*" element={<PanelRoutes />} />
              </Route> */}
            </Routes>
          </AuthProvider>
        </VilaContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
