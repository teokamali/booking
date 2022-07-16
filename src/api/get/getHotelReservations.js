import routes from "../routes";
import axios from "../webSiteAxios";

const getHotelReservations = async (pageParam) => {
	const response = await axios.get(routes.getHotelReservations + `?page=${pageParam}`);
	return response.data;
};

export default getHotelReservations;
