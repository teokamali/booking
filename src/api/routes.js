import { config } from "../values";

// Authorization
const loginWithGoogle = config.BASE_URL + "auth/google";
const webSiteLoginWithEmailRoute = config.BASE_URL + "login/email";
const webSiteLogOut = config.BASE_URL + "logout";
const webSiteRegisterWithEmailRoute = config.BASE_URL + "register/email";
const getCurrentUser = config.BASE_URL + "user";
// dashboard
const propertyTypes = config.BASE_URL + "property_types";
const usergallery = config.BASE_URL + "gallery";
const countries = config.BASE_URL + "countries";
const cities = config.BASE_URL + "cities";
const updateProperty = config.BASE_URL + "property";
const userProperties = config.BASE_URL + "user/properties";
const postProperty = config.BASE_URL + "property";
const getPropertyById = config.BASE_URL + "property";
const userUnits = config.BASE_URL + "user/units";
const deleteProperty = config.BASE_URL + "property";
const deleteUnit = config.BASE_URL + "property/units";
const postUnit = config.BASE_URL + "property/units";
const getBedsTypes = config.BASE_URL + "property/bed_types";
const getUnitById = config.BASE_URL + "property/units";
const updateUnit = config.BASE_URL + "property/units";
const getHotelReservations = config.BASE_URL + "hotels/invoices";
const getUserReservations = config.BASE_URL + "user/invoices";
const acceptReservation = config.BASE_URL + "hotels/invoices";
const rejectReservation = config.BASE_URL + "hotels/invoices";
const postGeneralRules = config.BASE_URL + "property";
const getFacilityCategories = config.BASE_URL + "property/facilities";
const getFacilityCategoriesItem = config.BASE_URL + "property/facilities";
const getSurroundingCategories = config.BASE_URL + "property/surrounding_categories";
const postSurrounding = config.BASE_URL + "property/surroundings";
const postFacilities = config.BASE_URL + "property/facilities";
const postFaq = config.BASE_URL + "property";

// main website
const getBestProperties = config.BASE_URL + "best_properties";
const getAllProperties = config.BASE_URL + "property";
const searchUnits = config.BASE_URL + "search/hotels";
const ReserveUnit = config.BASE_URL + "hotels/unit";

const routes = {
	getCurrentUser,
	postFaq,
	postFacilities,
	postSurrounding,
	getSurroundingCategories,
	getFacilityCategoriesItem,
	getFacilityCategories,
	getUserReservations,
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
	ReserveUnit,
	getBestProperties,
	deleteProperty,
	deleteUnit,
	getBedsTypes,
	postUnit,
	getUnitById,
	getHotelReservations,
	updateUnit,
	acceptReservation,
	rejectReservation,
	postGeneralRules,
};

export default routes;
