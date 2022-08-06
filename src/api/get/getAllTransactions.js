import routes from "../routes";
import axios from "../webSiteAxios";

const getAllTransactions = async (pageParam, type) => {
	const response = await axios.get(
		routes.getAllTransactions + `?page=${pageParam}&per_page=10${type ? `&type=${type}` : ""}`
	);
	return response.data;
};

export default getAllTransactions;
