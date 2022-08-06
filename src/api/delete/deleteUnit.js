import routes from "../routes";
import axios from "../webSiteAxios";

const deleteUnit = async ({ id }) => {
	const response = await axios.delete(`${routes.deleteUnit}/${id}`);
	return response.data;
};

export default deleteUnit;
