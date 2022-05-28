// Material Dashboard 2 React layouts
import Dashboard from "UserDashboard/layouts/dashboard";
import Profile from "UserDashboard/layouts/profile";
import Gallery from "UserDashboard/layouts/Gallery";
import Property from "./layouts/Property";
import AddProperty from "./layouts/AddProperty";

// @mui icons
import Icon from "@mui/material/Icon";

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
    icon: <Icon fontSize="small">photo library</Icon>,
    route: "gallery",
    link: "gallery",
    component: <Gallery />,
  },
  {
    type: "collapse",
    name: "Properties",
    key: "property",
    icon: <Icon fontSize="small">apartment</Icon>,
    route: "property",
    link: "property",
    component: <Property />,
  },
  {
    type: "collapse",
    name: "Add Property",
    key: "property/add",
    icon: <Icon fontSize="small">add</Icon>,
    route: "property/add",
    link: "property/add",
    component: <AddProperty />,
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
