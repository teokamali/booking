import { useContext } from "react";
import api from "../api";
import { useMutation } from "react-query";
import { UserContext } from "../context/UsersContextProvider";
import { Toastify } from "../components";
const useGetGallery = () => {
  const { user, setUser } = useContext(UserContext);
  return useMutation(api.getUserGallery, {
    onError: (error, variables, context) => {
      // An error happened!
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      // console.log(data.data);
      setUser({ ...user, gallery: data.data });
    },
  });
};
const usePostGallery = () => {
  return useMutation(api.postUserGallery, {
    onError: (error, variables, context) => {
      // An error happened!
      console.log(error);
      Toastify("error", "something went wrong");
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      Toastify("success", "Image Added successfully");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    },
  });
};
const useDeleteGallery = () => {
  const { user, setUser } = useContext(UserContext);
  return useMutation(api.deleteUserGalleryImage, {
    onError: (error, variables, context) => {
      // An error happened!
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      Toastify("success", "Image Removed successfully");
      window.location.reload();
    },
  });
};
export { useGetGallery, usePostGallery, useDeleteGallery };
