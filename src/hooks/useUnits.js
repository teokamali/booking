import { useMutation, useQuery } from "react-query";
import { Toastify } from "components";
import api from "api";
const useGetUserUnits = () => {
	const { data, isLoading } = useQuery("getUserUnits", api.get.getUserUnits);
	return { data, isLoading };
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
	const { data, isLoading } = useQuery("getBedstypes", api.get.getBedsTypes, {
		select: (data) =>
			data.data.map((item) => ({
				label: item.name,
				value: item.id,
			})),
	});
	return { data, isLoading };
};

const usePostUnit = () => {
	return useMutation(api.post.postUnit, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			window.location.reload();
		},
	});
};
const useGetUnitById = (id) => {
	const { data, isLoading } = useQuery("getUnitById", () => api.get.getUnitById(id));
	return { data, isLoading };
};
const useUpdateUnit = () => {
	return useMutation(api.patch.updateUnit, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			window.location.reload();
		},
	});
};
export {
	useGetUserUnits,
	useDeleteUnit,
	useGetBedTypes,
	usePostUnit,
	useGetUnitById,
	useUpdateUnit,
};
