import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { getUsers } from "../../services/api";
export const UsersContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    try {
      (async function productFetch() {
        const { data } = await axios.get(`${getUsers}`);
        setUser(data);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <UsersContext.Provider value={{ user }}>{children}</UsersContext.Provider>
  );
}

export default UserContextProvider;
