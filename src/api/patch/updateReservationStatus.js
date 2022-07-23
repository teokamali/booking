import routes from "../routes";
import axios from "../webSiteAxios";

const updateReservationStatus = async ({ id, body }) => {
	const response = await axios.patch(
		routes.updateReservationStatus + `/${id}/update_status`,
		body
	);
	return response;
};

export default updateReservationStatus;
