import routes from "../routes";
import axios from "../webSiteAxios";

const getUsersList = async (pageParam, type) => {
	const response = await axios.get(
		routes.getUsersList + `?page=${pageParam}&per_page=10${type ? `&type=${type}` : ""}`
	);
	return response.data;
};

export default getUsersList;
