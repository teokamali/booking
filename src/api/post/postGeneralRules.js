import routes from "../routes";
import axios from "../webSiteAxios";

const postGeneralRules = async (data) => {
	const { propertyId, formInitial } = data;
	console.log(data);
	const response = await axios.post(
		`${routes.postGeneralRules}/${propertyId}/general_rules`,
		formInitial
	);
	return response.data;
};

export default postGeneralRules;
