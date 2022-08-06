import routes from "../routes";
import axios from "../webSiteAxios";

const reserveUnit = async (data) => {
	const { id, formData } = data;

	const response = await axios.post(`${routes.ReserveUnit}/${id}/reserve`, formData);
	return response;
};

export default reserveUnit;
