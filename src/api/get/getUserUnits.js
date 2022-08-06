import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getUserUnits = async () => {
	const response = await webSiteAxios.get(routes.userUnits);
	return response.data;
};

export default getUserUnits;
