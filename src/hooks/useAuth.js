import Cookies from "js-cookie";
import { useEffect, useState } from "react";
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
export default useAuth;
