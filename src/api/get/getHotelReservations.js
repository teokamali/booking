import routes from "../routes";
import axios from "../webSiteAxios";

const getHotelReservations = async () => {
	const response = await axios.get(routes.getHotelReservations);
	return response.data;
};

export default getHotelReservations;
