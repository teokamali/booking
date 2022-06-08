import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getUserProperties = async () => {
	const response = await webSiteAxios.get(routes.userProperties);
	return response;
};

export default getUserProperties;
