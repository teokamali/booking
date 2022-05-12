import WebsiteRoutes from "Routes/WebsiteRoutes";
import PanelRoutes from "Routes/PanelRoutes";
import Login from "AdminPanel/views/pages/login/Login";
import Register from "AdminPanel/views/pages/register/Register";
import Dashboard from "UserDashboard";

export const routes = [
  {
    path: "/*",
    name: "WebsiteRoutes",
    element: <WebsiteRoutes />,
  },
  {
    path: "/administrator/login",
    name: "Login Page",
    element: <Login />,
  },
  {
    path: "/administrator/register",
    name: "Register Page",
    element: <Register />,
  },
  {
    path: "/login",
    name: "User Login Page",
    element: <Login />,
  },
  {
    path: "/register",
    name: "User Register Page",
    element: <Register />,
  },
  {
    path: "dashboard/*",
    name: "User Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/administrator/*",
    name: "User Dashboard",
    element: <PanelRoutes />,
  },
];
