import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getFacilityCategoriesItem = async (context) => {
	const [_key, id] = context.queryKey;
	const response = await webSiteAxios.get(`${routes.getFacilityCategoriesItem}/${id}/items`);
	return response.data;
};

export default getFacilityCategoriesItem;
