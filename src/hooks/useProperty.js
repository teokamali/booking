import { useMutation, useQuery } from "react-query";
import { Toastify } from "components";
import api from "api";
const useGetPropertyType = () => {
	const { data, isLoading } = useQuery("getPropertyTypes", api.get.getPropertyTypes);
	return { data, isLoading };
};
const useGetProperties = () => {
	const { data } = useQuery("getProperties", api.get.getAllProperties);
	return data;
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
const usePostProperty = () => {
	return useMutation(api.post.postProperty, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", "An error happened!");
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			window.location.reload();
		},
	});
};
export { useGetPropertyType, useGetProperties, useGetCountries, useGetCities, usePostProperty };
