import routes from "../routes";
import axios from "../webSiteAxios";

const getAllProperties = async () => {
	const response = await axios.get(routes.getAllProperties);
	return response.data;
};

export default getAllProperties;
