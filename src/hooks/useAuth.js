import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import api from "../api";
import { Toastify } from "../components";
import { constans } from "../values";

const useAuth = () => {
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (Cookies.get(constans.TOKEN)) {
      return setIsUserLoggedIn(true);
    } else {
      return setIsUserLoggedIn(false);
    }
  }, []);

  return { isUserLoggedIn };
};
const useLogin = () => {
  const navigate = useNavigate();
  return useMutation(api.webSiteLogin, {
    onError: (error, variables, context) => {
      // An error happened!
      Toastify("error", "email or password is incorrect");
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      Cookies.set(constans.TOKEN, data.data.access_token);
      Toastify("success", "Logged in successfully");
      setTimeout(() => {
        // navigate("/dashboard");
        window.location.reload();
        document.querySelector(".modal-backdrop").remove("");
      }, 1000);
    },
  });
};
const useRegister = () => {
  const navigate = useNavigate();
  return useMutation(api.webSiteRegister, {
    onError: (error, variables, context) => {
      // An error happened!
      Toastify("error", "An error happened!");
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      console.log(data);
      Cookies.set(constans.TOKEN, data.access_token);
      Toastify("success", "Registeration successfull!");
      setTimeout(() => {
        navigate("/dashboard");
        document.querySelector(".modal-backdrop").remove("");
      }, 3000);
    },
  });
};

export { useAuth, useLogin, useRegister };
