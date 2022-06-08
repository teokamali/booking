import { useMutation, useQuery } from "react-query";
import { Toastify } from "components";
import api from "api";
const useGetUserUnits = () => {
	const { data, isLoading } = useQuery("getUserUnits", api.get.getUserUnits);
	return { data, isLoading };
};
export { useGetUserUnits };
