import Cookies from "js-cookie";
import React, { createContext, useState } from "react";
import { constans } from "../values";
export const UserContext = createContext();
function UserContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    let defaultData = { gallery: [] };
    const cookie = Cookies.get(constans.INFO);
    if (cookie) {
      defaultData = {
        gallery: [],
        userInformation: JSON.parse(cookie),
      };
    }
    return defaultData;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
