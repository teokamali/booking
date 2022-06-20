import routes from "../routes";
import axios from "../webSiteAxios";

const deleteProperty = async ({ id }) => {
	const response = await axios.delete(`${routes.deleteProperty}/${id}`);
	return response.data;
};

export default deleteProperty;
