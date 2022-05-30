import routes from "./routes";
import axios from "./webSiteAxios";

const getCities = async (context) => {
	const [_key, id] = context.queryKey;
	const response = await axios.get(`${routes.cities}/${id}`);
	return response.data;
};

export default getCities;
