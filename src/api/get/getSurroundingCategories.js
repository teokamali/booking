import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getSurroundingCategories = async () => {
	const response = await webSiteAxios.get(routes.getSurroundingCategories);
	return response.data;
};

export default getSurroundingCategories;
