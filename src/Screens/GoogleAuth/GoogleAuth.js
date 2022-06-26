import React from "react";
import { useLocation } from "react-router-dom";
import { Loader2 } from "components";

const GoogleAuth = () => {
	const location = useLocation().pathname;
	console.log(location);

	return <Loader2 />;
};

export default GoogleAuth;
