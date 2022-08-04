import { config } from "../values";

// Authorization
const loginWithGoogle = config.BASE_URL + "auth/google";
const webSiteLoginWithEmailRoute = config.BASE_URL + "login/email";
const webSiteLogOut = config.BASE_URL + "logout";
const webSiteRegisterWithEmailRoute = config.BASE_URL + "register/email";
const getCurrentUser = config.BASE_URL + "user";

// dashboard
const propertyTypes = config.BASE_URL + "types/properties";
const usergallery = config.BASE_URL + "gallery";
const countries = config.BASE_URL + "places/countries";
const cities = config.BASE_URL + "places/countries";
const updateProperty = config.BASE_URL + "property";
const ownerProperties = config.BASE_URL + "owner/properties";
const postProperty = config.BASE_URL + "property";
const getPropertyById = config.BASE_URL + "property";
const userUnits = config.BASE_URL + "owner/units";
const deleteProperty = config.BASE_URL + "property";
const deleteUnit = config.BASE_URL + "property/units";
const postUnit = config.BASE_URL + "property/units";
const getBedsTypes = config.BASE_URL + "types/beds";
const getUnitById = config.BASE_URL + "property/units";
const updateUnit = config.BASE_URL + "property/units";
const getHotelReservations = config.BASE_URL + "owner/report/invoices";
const getUserReservations = config.BASE_URL + "passenger/invoices";
const getUserTransactions = config.BASE_URL + "passenger/transactions";
const postGeneralRules = config.BASE_URL + "property";
const getFacilityCategories = config.BASE_URL + "property/facilities";
const getFacilityCategoriesItem = config.BASE_URL + "property/facilities";
const getSurroundingCategories = config.BASE_URL + "property/surrounding_categories";
const postSurrounding = config.BASE_URL + "property/surroundings";
const postFacilities = config.BASE_URL + "property/facilities";
const postFaq = config.BASE_URL + "property";
const ReserveUnit = config.BASE_URL + "reservation/hotels/unit";
const updateReservationStatus = config.BASE_URL + "reservation/invoices";
const owenerTransactions = config.BASE_URL + "owner/report/transactions";
// main website
const getBestProperties = config.BASE_URL + "slider/best_hotels?count=10";
const getCheapestHotels = config.BASE_URL + "slider/cheap_hotels?count=10";
const getMostReservedProperties = config.BASE_URL + "slider/most_reserved_hotels?count=10";
const getLastProperties = config.BASE_URL + "slider/last_hotels?count=10";
const getAllProperties = config.BASE_URL + "property";
const searchUnits = config.BASE_URL + "search/hotels";

// ADMIN
const getPropertiesOccupation = config.BASE_URL + "admin/report/properties/occupation";
const getUsersList = config.BASE_URL + "admin/users/list";

const routes = {
	getUsersList,
	owenerTransactions,
	getUserTransactions,
	getCheapestHotels,
	getMostReservedProperties,
	getLastProperties,
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
	ownerProperties,
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
	postGeneralRules,
	updateReservationStatus,
	getPropertiesOccupation,
};

export default routes;
