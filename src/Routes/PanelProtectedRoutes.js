import useRole from "hooks/useRole";
import React from "react";
import { Navigate } from "react-router-dom";
// import { useAuth } from "../panel/hooks/useAuth";
const PanelProtectedRoutes = ({ Component, accessbility }) => {
	const { canAccess, isInit } = useRole(accessbility);
	if (!isInit) return null;
	// return canAccess ? Component : <Navigate to={"/404"} />;

	return canAccess ? Component : console.log("Access denied");
};

export default PanelProtectedRoutes;
