import routes from "./routes";
import webSiteAxios from "./webSiteAxios";

const getUserGallery = async () => {
  const response = await webSiteAxios.get(routes.usergallery);
  return response.data;
};

export default getUserGallery;
