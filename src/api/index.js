import webSiteLogin from "./webSiteLogin";
import webSiteLogOut from "./webSiteLogOut";
import webSiteRegister from "./webSiteRegister";
import getUserGallery from "./getUsergallery";
import postUserGallery from "./postUserGallery";
import deleteUserGalleryImage from "./deleteGalleryImage";
import updateGallery from "./updateGallery";
import getPropertyTypes from "./getPropertyTypes";
import getAllProperties from "./getAllProperties";
import getCountries from "./getCountries";
import getCities from "./getCities";
import postProperty from "./postProperty";

const api = {
	webSiteLogin,
	webSiteRegister,
	getUserGallery,
	postUserGallery,
	deleteUserGalleryImage,
	updateGallery,
	webSiteLogOut,
	getPropertyTypes,
	getAllProperties,
	getCountries,
	getCities,
	postProperty,
};
export default api;
