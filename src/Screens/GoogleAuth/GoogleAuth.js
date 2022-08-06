import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader2 } from "components";
import Cookies from "js-cookie";
import { constans } from "values";
import { useGetCurrentUser } from "hooks/useAuth";
import { Toastify } from "components";

const GoogleAuth = () => {
	const { mutate: googleAuthMutate } = useGetCurrentUser();
	const location = useLocation().search;
	const token = location.split("?token=")[1];
	Cookies.set(constans.TOKEN, token);
	googleAuthMutate();

	return <Loader2 />;
};

export default GoogleAuth;
