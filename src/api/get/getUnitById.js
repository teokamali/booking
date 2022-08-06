import routes from "../routes";
import axios from "../webSiteAxios";

const getUnitById = async (id) => {
	const response = await axios.get(`${routes.getUnitById}/${id}`);
	return response.data;
};

export default getUnitById;
