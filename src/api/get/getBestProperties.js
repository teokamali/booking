import routes from "../routes";
import axios from "../webSiteAxios";

const getBestProperties = async () => {
	const response = await axios.get(routes.getBestProperties);
	return response.data;
};

export default getBestProperties;
