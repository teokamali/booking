import routes from "../routes";
import axios from "../webSiteAxios";

const getUserTransactions = async (pageParam) => {
	const response = await axios.get(routes.getUserTransactions + `?page=${pageParam}&per_page=10`);
	return response.data;
};

export default getUserTransactions;
