import { useAuth } from "hooks/useAuth";
import React, { createContext, useState } from "react";
import Cookies from "js-cookie";
import { constans } from "values";
export const UserContext = createContext({});
function VilaContextProvider({ children }) {
  const [user, setUser] = useState({ gallery: [] });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default VilaContextProvider;
