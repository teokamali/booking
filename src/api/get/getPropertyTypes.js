import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getPropertyTypes = async () => {
  const response = await webSiteAxios.get(routes.propertyTypes);
  return response;
};

export default getPropertyTypes;
