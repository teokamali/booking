import routes from "../routes";
import axios from "../webSiteAxios";

const getUserReservations = async (pageParam, accept_status, payment_status) => {
	const response = await axios.get(
		routes.getUserReservations +
			`?page=${pageParam}&per_page=10${
				accept_status ? "&accept_status=" + accept_status : ""
			}${payment_status ? "&payment_status=" + payment_status : ""}`
	);
	return response.data;
};

export default getUserReservations;
