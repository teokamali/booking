import routes from "../routes";
import axios from "../webSiteAxios";

const updateUnit = async (formData) => {
	const { unitId, values } = formData;
	const response = await axios.patch(routes.updateUnit + `/${unitId}`, values);
	return response;
};

export default updateUnit;
