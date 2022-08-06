import routes from "../routes";
import axios from "../webSiteAxios";

const getLastProperties = async () => {
	const response = await axios.get(routes.getLastProperties);
	return response.data;
};

export default getLastProperties;
