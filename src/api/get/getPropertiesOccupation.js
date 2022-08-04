import routes from "../routes";
import axios from "../webSiteAxios";

const getPropertiesOccupation = async (pageParam) => {
	const response = await axios.get(
		routes.getPropertiesOccupation + `?page=${pageParam}&per_page=10`
	);
	return response.data;
};

export default getPropertiesOccupation;
