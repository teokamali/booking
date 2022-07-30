import { useQuery } from "react-query";
import api from "api";
const useGetUserTransactions = ({ pageParam, type }) => {
	const { data, refetch, isFetching, isLoading } = useQuery(["getUserTransactions", type], () =>
		api.get.getUserTransactions(pageParam, type)
	);
	return { data, refetch, isFetching, isLoading };
};
export { useGetUserTransactions };
