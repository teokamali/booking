import { UserContext } from "context/UsersContextProvider";
import { useAuth } from "hooks/useAuth";
import { useContext, useEffect, useMemo, useState } from "react";
import websiteRoutesList from "UserDashboard/routes";
import PanelProtectedRoutes from "./PanelProtectedRoutes";

// react-router components
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// @mui material components
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// Material Dashboard 2 React components

// Material Dashboard 2 React example components
import Configurator from "UserDashboard/examples/Configurator";
import Sidenav from "UserDashboard/examples/Sidenav";

// Material Dashboard 2 React themes
import theme from "UserDashboard/assets/theme";
import themeRTL from "UserDashboard/assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "UserDashboard/assets/theme-dark";
import themeDarkRTL from "UserDashboard/assets/theme-dark/theme-rtl";

// RTL plugins
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";

// Material Dashboard 2 React routes
import routes from "UserDashboard/routes";

// Material Dashboard 2 React contexts
import { setMiniSidenav, useMaterialUIController } from "UserDashboard/context";

// Images
import Cookies from "js-cookie";
import brandDark from "UserDashboard/assets/images/logo-ct-dark.png";
import brandWhite from "UserDashboard/assets/images/logo-ct.png";
import constans from "../AdminPanel/values/constans";
import { Loader } from "components";
import { Loader2 } from "components";

const PanelRoutes = () => {
	const [controller, dispatch] = useMaterialUIController();
	const {
		miniSidenav,
		direction,
		layout,
		openConfigurator,
		sidenavColor,
		transparentSidenav,
		whiteSidenav,
		darkMode,
	} = controller;
	const [onMouseEnter, setOnMouseEnter] = useState(false);
	const [rtlCache, setRtlCache] = useState(null);
	const { pathname } = useLocation();

	// Cache for the rtl
	useMemo(() => {
		const cacheRtl = createCache({
			key: "rtl",
			stylisPlugins: [rtlPlugin],
		});

		setRtlCache(cacheRtl);
	}, []);

	// Open sidenav when mouse enter on mini sidenav
	const handleOnMouseEnter = () => {
		if (miniSidenav && !onMouseEnter) {
			setMiniSidenav(dispatch, false);
			setOnMouseEnter(true);
		}
	};

	// Close sidenav when mouse leave mini sidenav
	const handleOnMouseLeave = () => {
		if (onMouseEnter) {
			setMiniSidenav(dispatch, true);
			setOnMouseEnter(false);
		}
	};

	useEffect(() => {
		document.body.setAttribute("dir", direction);
	}, [direction]);

	// Setting page scroll to 0 when changing the route
	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
	}, [pathname]);

	const { user } = useContext(UserContext);
	const { isUserLoggedIn, isLoading } = useAuth();
	if (isLoading) {
		return <Loader2 />;
	} else if (isUserLoggedIn) {
		return direction === "rtl" ? (
			<CacheProvider value={rtlCache}>
				<ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
					<CssBaseline />
					{layout === "dashboard" && (
						<>
							<Sidenav
								color={sidenavColor}
								brand={
									(transparentSidenav && !darkMode) || whiteSidenav
										? brandDark
										: brandWhite
								}
								brandName={`Hello ${user.userInformation.first_name}`}
								routes={routes}
								onMouseEnter={handleOnMouseEnter}
								onMouseLeave={handleOnMouseLeave}
							/>
							<Configurator />
							{/* {configsButton} */}
						</>
					)}
					{layout === "vr" && <Configurator />}
					<Routes>
						{websiteRoutesList.map((_route) => {
							const { route, key, component, accessibility } = _route;

							return (
								<Route
									key={key}
									path={route}
									element={
										<PanelProtectedRoutes
											accessbility={accessibility}
											Component={component}
										/>
									}
								/>
							);
						})}
					</Routes>
				</ThemeProvider>
			</CacheProvider>
		) : (
			<ThemeProvider theme={darkMode ? themeDark : theme}>
				<CssBaseline />
				{layout === "dashboard" && (
					<>
						<Sidenav
							color={sidenavColor}
							brand={
								(transparentSidenav && !darkMode) || whiteSidenav
									? brandDark
									: brandWhite
							}
							brandName={`Hello ${user.userInformation.first_name} `}
							routes={routes}
							onMouseEnter={handleOnMouseEnter}
							onMouseLeave={handleOnMouseLeave}
						/>
						<Configurator />
					</>
				)}
				{layout === "vr" && <Configurator />}
				<Routes>
					{websiteRoutesList.map((_route) => {
						const { route, key, component, accessibility } = _route;
						return (
							<Route
								key={key}
								path={route}
								element={
									<PanelProtectedRoutes
										accessbility={accessibility}
										Component={component}
									/>
								}
							/>
						);
					})}
				</Routes>
			</ThemeProvider>
		);
	} else {
		return <Navigate to='/' />;
	}
};

export default PanelRoutes;
