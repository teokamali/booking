import routes from "../routes";
import axios from "../webSiteAxios";

const updateUnit = async (id, formData) => {
	const response = await axios.patch(routes.updateUnit + `/${id}`, formData);
	return response;
};

export default updateUnit;
