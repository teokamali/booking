import routes from "../routes";
import axios from "../webSiteAxios";

const postProperty = async (formData) => {
	const response = await axios.post(routes.postProperty, formData);
	return response;
};

export default postProperty;
