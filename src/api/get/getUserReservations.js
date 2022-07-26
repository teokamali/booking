import routes from "../routes";
import axios from "../webSiteAxios";

const getUserReservations = async (pageParam) => {
	const response = await axios.get(routes.getUserReservations + `?page=${pageParam}&per_page=10`);
	return response.data;
};

export default getUserReservations;
