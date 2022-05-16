import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};
const ProtectedOwnerRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/administrator/login" replace />;
};

export default ProtectedOwnerRoutes;
