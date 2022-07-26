import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "api";

const useGetHotelInvoices = ({ pageParam, model_id, accept_status, payment_status }) => {
	const { data, refetch, isFetching, isLoading } = useQuery(
		["getHotelInvoices", model_id, accept_status, payment_status],
		() => api.get.getHotelReservations(pageParam, model_id, accept_status, payment_status)
	);
	return { data, refetch, isFetching, isLoading };
};

const useGetUserReservations = ({ pageParam }) => {
	const { data, refetch, isFetching, isLoading } = useQuery("getUserInvoices", () =>
		api.get.getUserReservations(pageParam)
	);
	return { data, refetch, isFetching, isLoading };
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
