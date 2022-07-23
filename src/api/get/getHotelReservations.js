import routes from "../routes";
import axios from "../webSiteAxios";

const getHotelReservations = async (pageParam, model_id, accept_status, payment_status) => {
	const response = await axios.get(
		routes.getHotelReservations +
			`?page=${pageParam}${model_id ? "&model_id=" + model_id : ""}${
				accept_status ? "&accept_status=" + accept_status : ""
			}${payment_status ? "&payment_status=" + payment_status : ""}`
	);
	return response.data;
};

export default getHotelReservations;
