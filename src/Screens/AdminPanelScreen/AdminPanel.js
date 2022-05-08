import React from "react";
import { Provider } from "react-redux";
import store from "../../AdminPanel/store";
import { Outlet } from "react-router-dom";
import ProductsContextProvider from "../../AdminPanel/context/ProductsContextProvider";
import UserContextProvider from "../../AdminPanel/context/UserContextProvider";
import BlogContextProvider from "../../AdminPanel/context/BlogContextProvider";

const AdminPanel = (props) => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ProductsContextProvider>
          <BlogContextProvider>
            <Outlet {...props} />
          </BlogContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </Provider>
  );
};

export default AdminPanel;
