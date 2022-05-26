import { config } from "../values";
const webSiteLoginWithEmailRoute = config.BASE_URL + "login/email";
const webSiteLogOut = config.BASE_URL + "logout";
const webSiteRegisterWithEmailRoute = config.BASE_URL + "register/email";
const usergallery = config.BASE_URL + "gallery";
const propertyTypes = config.BASE_URL + "property_types";

const routes = {
  webSiteLoginWithEmailRoute,
  webSiteRegisterWithEmailRoute,
  usergallery,
  webSiteLogOut,
  propertyTypes,
};

export default routes;
