import loginWithGoogle from "./loginWithGoogle";
import getUserGallery from "./getUsergallery";
import getPropertyTypes from "./getPropertyTypes";
import getUserProperties from "./getUserProperties";
import getCountries from "./getCountries";
import getCities from "./getCities";
import getUserUnits from "./getUserUnits";
import getPropertyById from "./getPropertyById";
import getAllProperties from "./getAllProperties";
import getSearchedUnit from "./getSearchedUnit";
import getBestProperties from "./getBestProperties";
import getBedsTypes from "./getBedTypes";
import getUnitById from "./getUnitById";
import getHotelReservations from "./getHotelReservations";
import getUserReservations from "./getUserReservations";
import getFacilityCategories from "./getFacilityCategories";
import getFacilityCategoriesItem from "./getFacilityCategoriesItem";
import getSurroundingCategories from "./getSurroundingCategories";
import getCurrentUser from "./getCurrentUser";
const get = {
	getCurrentUser,
	getSurroundingCategories,
	getUnitById,
	getUserGallery,
	getPropertyTypes,
	getUserProperties,
	getCountries,
	getCities,
	loginWithGoogle,
	getUserUnits,
	getPropertyById,
	getAllProperties,
	getSearchedUnit,
	getBestProperties,
	getBedsTypes,
	getHotelReservations,
	getUserReservations,
	getFacilityCategories,
	getFacilityCategoriesItem,
};
export default get;
