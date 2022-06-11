import { useMutation, useQuery } from "react-query";
import { Toastify } from "components";
import api from "api";
const useGetUserUnits = () => {
	const { data, isLoading } = useQuery("getUserUnits", api.get.getUserUnits);
	return { data, isLoading };
};
const useReserveUnits = () => {
	return useMutation(api.post.reserveUnit, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			// window.location.reload();
			return data;
		},
	});
};
export { useGetUserUnits, useReserveUnits };
