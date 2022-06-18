import React from "react";
import { Route, Routes } from "react-router-dom";

// context
import ThemeContextProvider from "./context/ThemeContextProvider";
import UserContextProvider from "./context/UsersContextProvider";

import { useTranslation } from "react-i18next";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MaterialUIControllerProvider } from "UserDashboard/context";

import { ToastContainer } from "react-toastify";
import { routes } from "./routes";
import Navigation from "./Routes/";
const queryClient = new QueryClient();

function App() {
	const { t } = useTranslation();
	// document.title = t("app_title");

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeContextProvider>
				<UserContextProvider>
					<MaterialUIControllerProvider>
						<Navigation />
					</MaterialUIControllerProvider>

					{/* <Routes>
						{routes.map((route, i) => {
							const { path, name, element } = route;
							return <Route key={i} path={path} name={name} element={element} />;
						})}
					</Routes> */}
				</UserContextProvider>
				<ToastContainer
					position='top-right'
					autoClose={1000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</ThemeContextProvider>
		</QueryClientProvider>
	);
}

export default App;
