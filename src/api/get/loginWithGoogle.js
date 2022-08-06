import React from "react";
import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const loginWithGoogle = async () => {
	const response = await webSiteAxios.get(routes.loginWithGoogle);
	return response;
};

export default loginWithGoogle;
