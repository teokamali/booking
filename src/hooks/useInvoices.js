import { useQuery } from "react-query";
import api from "api";

const useGetHotelInvoices = () => {
	const { data, isLoading } = useQuery("getHotelInvoices", api.get.getHotelReservations);
	return { data, isLoading };
};
export { useGetHotelInvoices };
