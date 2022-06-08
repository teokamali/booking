import routes from "../routes";
import axios from "../webSiteAxios";

const getPropertyById = async (id) => {
	const response = await axios.get(`${routes.getPropertyById}/${id}`);
	return response.data;
};

export default getPropertyById;
