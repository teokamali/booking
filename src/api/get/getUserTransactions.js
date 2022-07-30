import routes from "../routes";
import axios from "../webSiteAxios";

const getUserTransactions = async (pageParam, type) => {
	console.log({ type });
	const response = await axios.get(
		routes.getUserTransactions + `?page=${pageParam}&per_page=10${type ? `&type=${type}` : ""}`
	);
	return response.data;
};

export default getUserTransactions;
