// Material Dashboard 2 React layouts
import Dashboard from "UserDashboard/layouts/dashboard";
import Profile from "UserDashboard/layouts/profile";
import Gallery from "UserDashboard/layouts/Gallery";

// @mui icons
import Icon from "@mui/material/Icon";
import Property from "./layouts/Property";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/",
    link: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Gallery",
    key: "gallery",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "gallery",
    link: "gallery",
    component: <Gallery />,
  },
  {
    type: "collapse",
    name: "Property",
    key: "property",
    icon: <Icon fontSize="small">apartment</Icon>,
    route: "property",
    link: "property",
    component: <Property />,
  },

  {
    type: "collapse",
    name: "Setting",
    key: "Setting",
    icon: <Icon fontSize="small">settings</Icon>,
    route: "setting",
    link: "setting",

    component: <Profile />,
  },
];

export default routes;
