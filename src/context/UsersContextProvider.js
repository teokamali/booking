import { useAuth } from "hooks/useAuth";
import React, { createContext, useState } from "react";
import Cookies from "js-cookie";
import { constans } from "values";
export const UserContext = createContext({});
function VilaContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const { isUserLoggedIn } = useAuth();
  if (isUserLoggedIn) {
    const userBaseInfo = Cookies.get(constans.INFO);
    // console.log(userBaseInfo);
  }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export default VilaContextProvider;
