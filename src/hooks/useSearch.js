import { useMutation } from "react-query";
import { Toastify } from "components";
import api from "api";

const useSearchedUnits = () => {
	return useMutation(api.get.getSearchedUnit, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", "An error happened!");
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			// window.location.reload();
			return data;
		},
	});
};

export { useSearchedUnits };
