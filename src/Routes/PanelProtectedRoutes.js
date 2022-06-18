import useRole from "hooks/useRole";
import React from "react";
import { Navigate } from "react-router-dom";
// import { useAuth } from "../panel/hooks/useAuth";
const PanelProtectedRoutes = ({ Component, accessbility }) => {
	const { canAccess } = useRole(accessbility);
	return canAccess ? Component : <Navigate to={"/403"} />;
};

export default PanelProtectedRoutes;
