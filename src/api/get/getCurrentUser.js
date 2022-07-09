import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getCurrentUser = async () => {
	const response = await webSiteAxios.get(routes.getCurrentUser);
	return response.data;
};

export default getCurrentUser;
