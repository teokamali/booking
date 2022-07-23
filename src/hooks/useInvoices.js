import { useMutation, useQuery, useQueryClient } from "react-query";
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

const useUpdateReservationStatus = () => {
	const queryClient = useQueryClient();
	return useMutation(api.patch.updateReservationStatus, {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			// window.location.reload();
			queryClient.refetchQueries(["getHotelInvoices"]);
		},
	});
};

export { useGetHotelInvoices, useGetUserReservations, useUpdateReservationStatus };
