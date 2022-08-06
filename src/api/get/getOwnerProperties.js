import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getOwnerProperties = async () => {
	const response = await webSiteAxios.get(routes.ownerProperties);
	return response;
};

export default getOwnerProperties;
