import routes from "../routes";
import axios from "../webSiteAxios";

const postFacilities = async (data) => {
	const response = await axios.post(`${routes.postFacilities}`, data);
	return response.data;
};

export default postFacilities;
