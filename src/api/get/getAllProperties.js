import routes from "../routes";
import axios from "../webSiteAxios";

const getAllProperties = async (pageParam, perPage) => {
	const response = await axios.get(
		routes.getAllProperties + `?page=${pageParam}${perPage ? "&per_page=" + perPage : ""}`
	);
	return response.data;
};

export default getAllProperties;
