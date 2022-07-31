import routes from "../routes";
import axios from "../webSiteAxios";

const getOwnerTransactions = async (pageParam, type) => {
	const response = await axios.get(
		routes.owenerTransactions + `?page=${pageParam}&per_page=10${type ? `&type=${type}` : ""}`
	);
	return response.data;
};

export default getOwnerTransactions;
