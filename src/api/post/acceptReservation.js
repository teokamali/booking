import routes from "../routes";
import axios from "../webSiteAxios";

const acceptReservation = async (id) => {
	const response = await axios.post(`${routes.acceptReservation}/${id}/accept`);
	return response.data;
};

export default acceptReservation;
