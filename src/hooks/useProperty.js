import { useMutation, useQuery } from "react-query";
import api from "api";
const useGetPropertyType = () => {
	const { data, isLoading } = useQuery("getPropertyTypes", api.getPropertyTypes);
	return { data, isLoading };
};
const useGetProperties = () => {
	const { data } = useQuery("getProperties", api.getAllProperties);
	return data;
};
const useGetCountries = () => {
	const { data, isLoading } = useQuery("getCountries", api.getCountries);
	return { data, isLoading };
};
const useGetCities = ({ id, options = {} }) => {
	return useQuery(["get-cities", id], api.getCities, {
		onError: (error, variables, context) => {
			// An error happened!
			// recconecting
			console.log(error);
		},
		select: (data, variables, context) => {
			// Boom baby!
			return data.data.map((item) => ({ label: item.name, value: item.id }));
		},
		...options,
	});
};
export { useGetPropertyType, useGetProperties, useGetCountries, useGetCities };
