import { useMutation, useQuery, useQueryClient } from "react-query";
import { Toastify } from "components";
import api from "api";
import { Navigate, useNavigate } from "react-router";
const useGetPropertyType = () => {
	const { data, isLoading } = useQuery("getPropertyTypes", api.get.getPropertyTypes);
	return { data, isLoading };
};
const useGetProperties = () => {
	const { data, isLoading } = useQuery("getOwnerProperties", api.get.getOwnerProperties);
	return { data, isLoading };
};
const useGetAllProperties = () => {
	const { data, isLoading } = useQuery("getAllProperties", api.get.getAllProperties);
	return { data, isLoading };
};

// slider

const useGetBestProperties = () => {
	const { data, isLoading } = useQuery("getBestProperties", api.get.getBestProperties);
	return { data, isLoading };
};

const useGetCheapestHotels = () => {
	const { data, isLoading } = useQuery("getCheapestHotels", api.get.getCheapestHotels);
	return { data, isLoading };
};
const useGetMostReservedProperties = () => {
	const { data, isLoading } = useQuery(
		"getMostReservedProperties",
		api.get.getMostReservedProperties
	);
	return { data, isLoading };
};
const useGetLastProperties = () => {
	const { data, isLoading } = useQuery("getLastProperties", api.get.getLastProperties);
	return { data, isLoading };
};

const useGetPropertyById = (id) => {
	const { data, isLoading, isError } = useQuery("getPropertyById", () =>
		api.get.getPropertyById(id)
	);
	return { data, isLoading, isError };
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
			console.log({ data });
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
	const navigate = useNavigate();
	return useMutation(api.post.postProperty, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			navigate("/dashboard/property");
		},
	});
};
const usePostGeneralRules = () => {
	return useMutation(api.post.postGeneralRules, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			// window.location.reload();
			Toastify("success", data.message);
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
const useGetFacilityCategories = () => {
	const { data, isLoading } = useQuery("getFacilityCategories", api.get.getFacilityCategories);
	return { data, isLoading };
};
const useGetFacilityCategoriesItem = ({ id, options = {} }) => {
	return useQuery(["get-categortyItems", id], api.get.getFacilityCategoriesItem, {
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
const usePostSurrounding = () => {
	return useMutation(api.post.postSurrounding, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			// window.location.reload();
			Toastify("success", data.message);
		},
	});
};
const useGetSurroundingCategories = () => {
	const { data, isLoading } = useQuery(
		"getSurroundingCategories",
		api.get.getSurroundingCategories
	);
	return { data, isLoading };
};

const usePostFacilities = () => {
	return useMutation(api.post.postFacilities, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			// window.location.reload();
			Toastify("success", data.message);
		},
	});
};
const usePostFaq = () => {
	const queryClient = useQueryClient();

	return useMutation(api.post.postFaq, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			// window.location.reload();
			Toastify("success", data.message);
			queryClient.refetchQueries(["getOwnerProperties"]);
		},
	});
};

export {
	usePostFaq,
	usePostFacilities,
	usePostSurrounding,
	useGetSurroundingCategories,
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
	usePostGeneralRules,
	useGetFacilityCategories,
	useGetFacilityCategoriesItem,
	useGetCheapestHotels,
	useGetMostReservedProperties,
	useGetLastProperties,
};
