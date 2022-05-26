import { useMutation, useQuery } from "react-query";
import api from "api";
import { Toastify } from "../components";
const useGetPropertyType = () => {
  const { data } = useQuery("getPropertyTypes", api.getPropertyTypes);
  return data;
};
export { useGetPropertyType };
