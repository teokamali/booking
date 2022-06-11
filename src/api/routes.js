import { config } from "../values";
const loginWithGoogle = config.BASE_URL + "auth/google";
const webSiteLoginWithEmailRoute = config.BASE_URL + "login/email";
const webSiteLogOut = config.BASE_URL + "logout";
const webSiteRegisterWithEmailRoute = config.BASE_URL + "register/email";
const usergallery = config.BASE_URL + "gallery";
const countries = config.BASE_URL + "countries";
const cities = config.BASE_URL + "cities";
const propertyTypes = config.BASE_URL + "property_types";
const userProperties = config.BASE_URL + "user/properties";
const postProperty = config.BASE_URL + "property";
const getPropertyById = config.BASE_URL + "property";
const userUnits = config.BASE_URL + "user/units";
const updateProperty = config.BASE_URL + "property";
const getAllProperties = config.BASE_URL + "property";
const searchUnits = config.BASE_URL + "search/hotels";

const routes = {
	webSiteLoginWithEmailRoute,
	webSiteRegisterWithEmailRoute,
	usergallery,
	webSiteLogOut,
	propertyTypes,
	userProperties,
	countries,
	cities,
	postProperty,
	loginWithGoogle,
	userUnits,
	getPropertyById,
	updateProperty,
	getAllProperties,
	searchUnits,
};

export default routes;
