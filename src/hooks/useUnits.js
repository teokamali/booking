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
			Toastify("success", "Reservation Request Successfuly Sent");
		},
	});
};
const useDeleteUnit = () => {
	return useMutation(api.deleteApi.deleteUnit, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			Toastify("success", "Property Removed successfully");
			window.location.reload();
		},
	});
};
const useGetBedTypes = () => {
	const { data, isLoading } = useQuery("getBedstypes", api.get.getBedsTypes);
	return { data, isLoading };
};

export { useGetUserUnits, useReserveUnits, useDeleteUnit, useGetBedTypes };
