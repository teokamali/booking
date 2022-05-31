import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getCities = async (context) => {
	const [_key, id] = context.queryKey;
	const response = await webSiteAxios.get(`${routes.cities}/${id}`);
	return response.data;
};

export default getCities;
