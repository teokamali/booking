import { useQuery } from "react-query";
import api from "api";
const useGetUserTransactions = ({ pageParam }) => {
	const { data, refetch, isFetching, isLoading } = useQuery("getUserTransactions", () =>
		api.get.getUserTransactions(pageParam)
	);
	return { data, refetch, isFetching, isLoading };
};
export { useGetUserTransactions };
