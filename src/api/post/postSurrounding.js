import routes from "../routes";
import axios from "../webSiteAxios";

const postSurrounding = async (formData) => {
	const response = await axios.post(routes.postSurrounding, formData);
	return response.data;
};

export default postSurrounding;
