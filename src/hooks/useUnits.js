import { useMutation, useQuery, useQueryClient } from "react-query";
import { Toastify } from "components";
import { useNavigate } from "react-router-dom";
import api from "api";

const useGetUserUnits = () => {
	const { data, isLoading } = useQuery("getUserUnits", api.get.getUserUnits);
	return { data, isLoading };
};

const useDeleteUnit = () => {
	const queryClient = useQueryClient();
	return useMutation(api.deleteApi.deleteUnit, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			Toastify("success", "Property Removed successfully");
			// window.location.reload();
			queryClient.refetchQueries(["getUserUnits"]);
		},
	});
};
const useGetBedTypes = () => {
	const { data, isLoading } = useQuery("getBedstypes", api.get.getBedsTypes, {
		select: (data) =>
			data.data.map((item) => ({
				value: item.id,
				label: item.name,
			})),
	});
	return { data, isLoading };
};

const usePostUnit = () => {
	const navigate = useNavigate();
	return useMutation(api.post.postUnit, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			navigate("/dashboard/units");
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
