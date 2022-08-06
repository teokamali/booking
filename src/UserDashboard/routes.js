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
import Transactions from "./layouts/Transactions";
import { constans } from "values";
import GeneralRules from "./layouts/GeneralRules";
import Facilities from "./layouts/Facilities";
import Surrounding from "./layouts/Surrounding";
import Faq from "./layouts/Faq";
// @mui icons
import Icon from "@mui/material/Icon";
const { PASSENGER, MIDDLE_MAN, OWNER, ADMIN } = constans;

const routes = [
	{
		type: "collapse",
		name: "Dashboard",
		key: "dashboard",
		icon: <Icon fontSize='small'>dashboard</Icon>,
		route: "/",
		link: "/dashboard",
		component: <Dashboard />,
		accessibility: [PASSENGER, MIDDLE_MAN, OWNER, ADMIN],
	},
	{
		type: "title",
		title: "Property",
		key: "propertytext",
		accessibility: [MIDDLE_MAN, OWNER],
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
		type: "collapse",
		name: "Surrounding",
		key: "surrounding",
		icon: <Icon fontSize='small'>map</Icon>,
		route: "surrounding",
		link: "surrounding",
		component: <Surrounding />,
		accessibility: [OWNER],
	},
	{
		type: "collapse",
		name: "FAQ",
		key: "faq",
		icon: <Icon fontSize='small'>quiz</Icon>,
		route: "faq",
		link: "faq",
		component: <Faq />,
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
		type: "title",
		title: "Invoices",
		key: "invoices",
		accessibility: [MIDDLE_MAN, OWNER],
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
		name: "Transactions",
		key: "transactions",
		icon: <Icon fontSize='small'>swap_horiz</Icon>,
		route: "transactions",
		link: "transactions",
		component: <Transactions />,
		accessibility: [OWNER],
	},
	{
		type: "title",
		title: "Settings",
		key: "settingsText",
		accessibility: [PASSENGER, MIDDLE_MAN, OWNER],
	},
	{
		type: "collapse",
		name: "Profile",
		key: "Profile",
		icon: <Icon fontSize='small'>manage_accounts</Icon>,
		route: "profile",
		link: "profile",
		component: <Profile />,
		accessibility: [PASSENGER, OWNER, MIDDLE_MAN],
	},
];

export default routes;
