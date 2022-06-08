import routes from "../routes";
import axios from "../webSiteAxios";

const updateProperty = async (formData, id) => {
	const response = await axios.patch(routes.updateProperty + `/${id}`, formData);
	return response;
};

export default updateProperty;
