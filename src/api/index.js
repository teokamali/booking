import webSiteLogin from "./webSiteLogin";
import webSiteLogOut from "./webSiteLogOut";
import webSiteRegister from "./webSiteRegister";
import getUserGallery from "./getUsergallery";
import postUserGallery from "./postUserGallery";
import deleteUserGalleryImage from "./deleteGalleryImage";
import updateGallery from "./updateGallery";
import getPropertyTypes from "./getPropertyTypes";
const api = {
  webSiteLogin,
  webSiteRegister,
  getUserGallery,
  postUserGallery,
  deleteUserGalleryImage,
  updateGallery,
  webSiteLogOut,
  getPropertyTypes,
};
export default api;
