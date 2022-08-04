const { default: api } = require("api");
const { useQuery } = require("react-query");

const useGetUsersList = ({ pageParam, type }) => {
	const { data, refetch, isFetching, isLoading } = useQuery(
		["getUserLists", pageParam, type],
		() => api.get.getUsersList(pageParam, type)
	);
	return { data, refetch, isFetching, isLoading };
};
export { useGetUsersList };
