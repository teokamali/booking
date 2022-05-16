import routes from "./routes";
import Cookies from "js-cookie";
import constants from "../values/constans";
import webSiteAxios from "./webSiteAxios";
const getUserGallery = async () => {
  const response = await webSiteAxios.get(routes.usergallery);
  return response;
};

export default getUserGallery;
