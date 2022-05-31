import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getAllProperties = async () => {
  const response = await webSiteAxios.get(routes.properties);
  return response;
};

export default getAllProperties;
