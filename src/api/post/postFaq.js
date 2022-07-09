import routes from "../routes";
import axios from "../webSiteAxios";

const postFaq = async ({ propertyId, formData }) => {
	console.log({ propertyId, formData });
	const response = await axios.post(`${routes.postFaq}/${propertyId}/faqs`, formData);
	return response.data;
};

export default postFaq;
