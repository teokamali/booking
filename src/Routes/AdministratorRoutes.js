import { Route, Routes } from "react-router-dom";
import useRole from "hooks/useRole";
import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "AdminPanel/store";
import UserContextProvider from "context/UsersContextProvider";
import ProductsContextProvider from "AdminPanel/context/ProductsContextProvider";
import BlogContextProvider from "AdminPanel/context/BlogContextProvider";
import routes from "AdminPanel/routes";

function AdministratorRoutes() {
	const DefaultLayout = React.lazy(() => import("../AdminPanel/layout/DefaultLayout"));

	// Pages

	const Page404 = React.lazy(() => import("../AdminPanel/views/pages/page404/Page404"));
	const Page500 = React.lazy(() => import("../AdminPanel/views/pages/page500/Page500"));

	const loading = (
		<div className='pt-3 text-center'>
			<div className='sk-spinner sk-spinner-pulse'></div>
		</div>
	);
	return (
		<Suspense fallback={loading}>
			<Provider store={store}>
				<UserContextProvider>
					<ProductsContextProvider>
						<BlogContextProvider>
							<Routes>
								<Route path='/' element={<Navigate to='dashboard' />} />
								<Route path='404' name='Page 404' element={<Page404 />} />
								<Route path='500' name='Page 500' element={<Page500 />} />
								<Route path='/*' name='dashboard' element={<DefaultLayout />}>
									{routes.map((route, idx) => {
										return (
											route.element && (
												<Route
													key={idx}
													path={route.path}
													exact={route.exact}
													name={route.name}
													element={
														route.isProtected ? (
															<route.protectedChecker>
																<route.element />
															</route.protectedChecker>
														) : (
															<route.element />
														)
													}
												/>
											)
										);
									})}
								</Route>
							</Routes>
						</BlogContextProvider>
					</ProductsContextProvider>
				</UserContextProvider>
			</Provider>
		</Suspense>
	);
}

export default AdministratorRoutes;
