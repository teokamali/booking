import routes from "../routes";
import axios from "../webSiteAxios";

const getMostReservedProperties = async () => {
	const response = await axios.get(routes.getMostReservedProperties);
	return response.data;
};

export default getMostReservedProperties;
