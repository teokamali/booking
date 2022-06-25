import routes from "../routes";
import axios from "../webSiteAxios";

const postUnit = async (formData) => {
	const response = await axios.post(routes.postUnit, formData);
	return response;
};

export default postUnit;
