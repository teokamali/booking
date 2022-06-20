import routes from "../routes";
import axios from "../webSiteAxios";

const updateProperty = async (data) => {
	const response = await axios.patch(
		routes.updateProperty + `/${data.propertyId}`,
		data.formData
	);
	return response;
};

export default updateProperty;
