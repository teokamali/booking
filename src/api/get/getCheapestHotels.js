import routes from "../routes";
import axios from "../webSiteAxios";

const getCheapestHotels = async () => {
	const response = await axios.get(routes.getCheapestHotels);
	return response.data;
};

export default getCheapestHotels;
