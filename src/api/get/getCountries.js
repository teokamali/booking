import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getCountries = async () => {
  const response = await webSiteAxios.get(routes.countries);
  return response;
};

export default getCountries;
