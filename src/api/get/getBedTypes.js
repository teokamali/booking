import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const getBedsTypes = async () => {
	const response = await webSiteAxios.get(routes.getBedsTypes);
	return response.data;
};

export default getBedsTypes;
