import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getFacilityCategories = async () => {
	const response = await webSiteAxios.get(routes.getFacilityCategories);
	return response;
};

export default getFacilityCategories;
