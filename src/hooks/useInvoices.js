import { useQuery } from "react-query";
import api from "api";

const useGetHotelInvoices = () => {
	const { data, isLoading } = useQuery("getHotelInvoices", api.get.getHotelReservations);
	return { data, isLoading };
};

const useGetUserReservations = () => {
	const { data, isLoading } = useQuery("getUserInvoices", api.get.getUserReservations);
	return { data, isLoading };
};
export { useGetHotelInvoices, useGetUserReservations };
