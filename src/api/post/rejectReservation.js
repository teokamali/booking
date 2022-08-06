import routes from "../routes";
import axios from "../webSiteAxios";

const rejectReservation = async (id) => {
	const response = await axios.post(`${routes.rejectReservation}/${id}/reject`);
	return response.data;
};

export default rejectReservation;
