import routes from "../routes";
import axios from "../webSiteAxios";

const getSearchedUnit = async (data) => {
	console.log(data);
	const response = await axios.get(`${routes.searchUnits}/${data.id}`, {
		params: data.params,
	});
	return response.data;
};

export default getSearchedUnit;
