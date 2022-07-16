import { useQuery } from "react-query";
import api from "api";

const useGetHotelInvoices = ({ pageParam }) => {
	const { data, refetch, isFetching, isLoading } = useQuery("getHotelInvoices", () =>
		api.get.getHotelReservations(pageParam)
	);
	return { data, refetch, isFetching, isLoading };
};

const useGetUserReservations = () => {
	const { data, isLoading } = useQuery("getUserInvoices", api.get.getUserReservations);
	return { data, isLoading };
};
export { useGetHotelInvoices, useGetUserReservations };
