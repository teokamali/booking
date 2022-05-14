import React from "react";
import { Route, Routes } from "react-router-dom";

// context
import ThemeContextProvider from "./context/ThemeContextProvider";
import VilaContextProvider from "./context/VilaContextProvider";
import UserContextProvider from "./context/UsersContextProvider";

import { useTranslation } from "react-i18next";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ToastContainer } from "react-toastify";
import { routes } from "./routes";

const queryClient = new QueryClient();

function App() {
  const { t } = useTranslation();
  document.title = t("app_title");

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <UserContextProvider>
          <VilaContextProvider>
            <Routes>
              {routes.map((route, i) => {
                const { path, name, element } = route;
                return (
                  <Route key={i} path={path} name={name} element={element} />
                );
              })}
            </Routes>
          </VilaContextProvider>
        </UserContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
