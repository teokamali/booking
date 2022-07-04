// Material Dashboard 2 React layouts
import Dashboard from "UserDashboard/layouts/dashboard";
import Profile from "UserDashboard/layouts/profile";
import Gallery from "UserDashboard/layouts/Gallery";
import Property from "./layouts/Property";
import AddProperty from "./layouts/AddProperty";
import EditProperty from "./layouts/EditProperty";
import AddUnit from "./layouts/AddUnit";
import Units from "./layouts/Units";
import EditUnit from "./layouts/EditUnit";
import Reserves from "./layouts/Reserves";
import { constans } from "values";
import GeneralRules from "./layouts/GeneralRules";
import Facilities from "./layouts/Facilities";
import PassangerReserves from "./layouts/PassangerReserves";
// @mui icons
import Icon from "@mui/material/Icon";
const { PASSENGER, MIDDLE_MAN, OWNER } = constans;

const routes = [
	{
		type: "collapse",
		name: "Dashboard",
		key: "dashboard",
		icon: <Icon fontSize='small'>dashboard</Icon>,
		route: "/",
		link: "/dashboard",
		component: <Dashboard />,
		accessibility: [PASSENGER, MIDDLE_MAN, OWNER],
	},
	{
		type: "collapse",
		name: "Gallery",
		key: "gallery",
		icon: <Icon fontSize='small'>photo library</Icon>,
		route: "gallery",
		link: "gallery",
		component: <Gallery />,
		accessibility: [MIDDLE_MAN, OWNER],
	},
	{
		type: "collapse",
		name: "Properties",
		key: "property",
		icon: <Icon fontSize='small'>apartment</Icon>,
		route: "property",
		link: "property",
		component: <Property />,
		accessibility: [OWNER],
	},
	{
		type: "",
		name: "Add Property",
		key: "property/add",
		icon: <Icon fontSize='small'>add</Icon>,
		route: "property/add",
		link: "property/add",
		component: <AddProperty />,
		accessibility: [OWNER],
	},
	{
		type: "",
		name: "Edit Property",
		key: "property/Edit",
		icon: <Icon fontSize='small'>pen</Icon>,
		route: "property/edit/:id",
		link: "property/edit/:id",
		component: <EditProperty />,
		accessibility: [OWNER],
	},
	{
		type: "collapse",
		name: "Units",
		key: "units",
		icon: <Icon fontSize='small'>bed</Icon>,
		route: "units",
		link: "units",
		component: <Units />,
		accessibility: [OWNER],
	},
	{
		type: "collapse",
		name: "General Rules",
		key: "general-rules",
		icon: <Icon fontSize='small'>gavel</Icon>,
		route: "general-rules",
		link: "general-rules",
		component: <GeneralRules />,
		accessibility: [OWNER],
	},
	{
		type: "collapse",
		name: "Facilities",
		key: "facilities",
		icon: <Icon fontSize='small'>warehouse</Icon>,
		route: "facilities",
		link: "facilities",
		component: <Facilities />,
		accessibility: [OWNER],
	},
	{
		type: "",
		name: "Add Units",
		key: "add-unit",
		icon: <Icon fontSize='small'>bed</Icon>,
		route: "units/add-unit",
		link: "units/add-unit",
		component: <AddUnit />,
		accessibility: [OWNER],
	},
	{
		type: "",
		name: "Edit Unit",
		key: "units/Edit",
		icon: <Icon fontSize='small'>pen</Icon>,
		route: "units/edit/:id",
		link: "units/edit/:id",
		component: <EditUnit />,
		accessibility: [OWNER],
	},
	{
		type: "collapse",
		name: "Reservations",
		key: "reserves",
		icon: <Icon fontSize='small'>book_online</Icon>,
		route: "reserves",
		link: "reserves",
		component: <Reserves />,
		accessibility: [OWNER],
	},
	{
		type: "collapse",
		name: "Reservations",
		key: "passanger-reserves",
		icon: <Icon fontSize='small'>book_online</Icon>,
		route: "passanger-reserves",
		link: "passanger-reserves",
		component: <PassangerReserves />,
		accessibility: [PASSENGER],
	},
	{
		type: "collapse",
		name: "Setting",
		key: "Setting",
		icon: <Icon fontSize='small'>settings</Icon>,
		route: "setting",
		link: "setting",
		component: <Profile />,
		accessibility: [PASSENGER, OWNER],
	},
];

export default routes;
