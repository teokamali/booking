import { useMutation, useQuery } from "react-query";
import { Toastify } from "components";
import api from "api";
const useGetPropertyType = () => {
	const { data, isLoading } = useQuery("getPropertyTypes", api.get.getPropertyTypes);
	return { data, isLoading };
};
const useGetProperties = () => {
	const { data } = useQuery("getUserProperties", api.get.getUserProperties);
	return data;
};
const useGetAllProperties = () => {
	const { data, isLoading } = useQuery("getAllProperties", api.get.getAllProperties);
	return { data, isLoading };
};
const useGetBestProperties = () => {
	const { data, isLoading } = useQuery("getBestProperties", api.get.getBestProperties);
	return { data, isLoading };
};
const useGetPropertyById = (id) => {
	const { data, isLoading } = useQuery("getPropertyById", () => api.get.getPropertyById(id));
	return { data, isLoading };
};
const useGetCountries = () => {
	const { data, isLoading } = useQuery("getCountries", api.get.getCountries);
	return { data, isLoading };
};
const useGetCities = ({ id, options = {} }) => {
	return useQuery(["get-cities", id], api.get.getCities, {
		onError: (error, variables, context) => {
			// An error happened!
			// recconecting
		},
		select: (data, variables, context) => {
			// Boom baby!
			return data.data.map((item) => ({ label: item.name, value: item.id }));
		},
		...options,
	});
};
const useUpdateProperty = () => {
	return useMutation(api.patch.updateProperty, {
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
const usePostProperty = () => {
	return useMutation(api.post.postProperty, {
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
const useDeleteProperty = () => {
	return useMutation(api.deleteApi.deleteProperty, {
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

export {
	useGetPropertyType,
	useGetProperties,
	useGetCountries,
	useGetCities,
	usePostProperty,
	useGetPropertyById,
	useUpdateProperty,
	useGetAllProperties,
	useGetBestProperties,
	useDeleteProperty,
};
