import { useMutation, useQueryClient } from "react-query";
import { Toastify } from "components";
import api from "api";

const useReserveUnits = () => {
	return useMutation(api.post.reserveUnit, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			// window.location.reload();
			Toastify("success", "Reservation Request Successfuly Sent");
		},
	});
};
const useAcceptReservation = () => {
	const queryClient = useQueryClient();
	// const queryCache = useQueryClient();
	// queryCache.invalidateQueries();
	return useMutation(api.post.acceptReservation, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			Toastify("success", data.message);
			console.log("success");
			queryClient.refetchQueries(["getHotelInvoices"]);
			// refetchQueries(1"getHotelInvoices");
		},
	});
};
const useRejectReservation = () => {
	const queryClient = useQueryClient();

	return useMutation(api.post.rejectReservation, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			Toastify("success", data.message);
			// refetchQueries("getHotelInvoices");
			queryClient.refetchQueries(["getHotelInvoices"]);
		},
	});
};

export { useReserveUnits, useAcceptReservation, useRejectReservation };
