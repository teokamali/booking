import routes from "../routes";
import axios from "../webSiteAxios";

const getUserReservations = async () => {
	const response = await axios.get(routes.getUserReservations);
	return response.data;
};

export default getUserReservations;
