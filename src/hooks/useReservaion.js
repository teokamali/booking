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

export { useReserveUnits };
