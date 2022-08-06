import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import api from "../api";
import { Toastify } from "../components";
import { constans } from "../values";
import { UserContext } from "context/UsersContextProvider";

const useAuth = () => {
	let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (Cookies.get(constans.TOKEN) && Cookies.get(constans.INFO)) {
			setIsLoading(false);
			return setIsUserLoggedIn(true);
		} else {
			setIsLoading(false);
			return setIsUserLoggedIn(false);
		}
	}, []);

	return { isUserLoggedIn, isLoading };
};
const useLogin = () => {
	const { user, setUser } = useContext(UserContext);
	return useMutation(api.post.webSiteLogin, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			const user = data.data.user;
			const info = {
				id: user.id,
				email: user.email,
				google_id: user.google_id,
				facebook_id: user.facebook_id,
				first_name: user.first_name,
				last_name: user.last_name,
				avatar: user.avatar,
				lang_id: user.lang_id,
				currency_id: user.currency_id,
				country_id: user.country_id,
				email_verified_at: user.email_verified_at,
				created_at: user.created_at,
				updated_at: user.updated_at,
				can_see_admin_dashboard: user.can_see_admin_dashboard,
				types: user.types,
			};
			Cookies.set(constans.INFO, JSON.stringify(info), {
				expires: new Date().getFullYear(),
			});

			Cookies.set(constans.TOKEN, data.data.token.access_token, {
				expires: new Date().getFullYear(),
			});

			setUser({ ...user, userInformation: data.data.user });
			Toastify("success", "Logged in successfully");
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		},
	});
};
const useLoginWithGoogle = () => {
	// const { user, setUser } = useContext(UserContext);
	return useMutation(api.get.loginWithGoogle, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			function popup() {
				var features =
					"directories=no,menubar=no,status=no,titlebar=no,toolbar=no,width=500,height=500";
				window.open(data.data.url, "_self");
			}
			// window.open(data.data.url);
			popup();
		},
	});
};
const useGetCurrentUser = () => {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();
	return useMutation(api.get.getCurrentUser, {
		onError: (error, variables, context) => {
			// An error happened!
			window.location.reload();
			// Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			Cookies.set(constans.TOKEN, data.data);
			setUser({ ...user, userInformation: data.data });
			Cookies.set(constans.INFO, JSON.stringify(data.data));
			navigate("/");
		},
	});
};
const useRegister = () => {
	const { user, setUser } = useContext(UserContext);

	return useMutation(api.post.webSiteRegister, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			Cookies.set(constans.TOKEN, data.data.token.access_token);
			Toastify("success", "Registeration successfull!");
			setUser({ ...user, userInformation: data.data.user });
			Cookies.set(constans.INFO, JSON.stringify(data.data.user));
			setTimeout(() => {
				window.location.reload();
				document.querySelector(".modal-backdrop").remove("");
			}, 3000);
		},
	});
};
const useLogout = () => {
	return useMutation(api.post.webSiteLogOut, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			// Boom baby!
			Cookies.remove(constans.TOKEN);
			Cookies.remove(constans.INFO);
			window.location.href = "/";
		},
	});
};

export { useAuth, useLogin, useRegister, useLogout, useLoginWithGoogle, useGetCurrentUser };
