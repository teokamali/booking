import { Navigate, Outlet } from "react-router-dom";
import jsCookie from "js-cookie";
import { constans } from "../values";
export const useAuth = () => {
  const token = jsCookie.get(constans.TOKEN);
  if (!token) return false;
  return true;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/administrator/login" replace />;
};

export default ProtectedRoutes;
