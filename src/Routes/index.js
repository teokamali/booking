import { Route, Routes } from "react-router-dom";
import PanelRoutes from "./PanelRoutes";
import WebsiteRoutes from "./WebsiteRoutes";

function Navigation() {
	return (
		<Routes>
			{/* <Route path='/administrator/login' element={<Login />} /> */}
			{/* <Route path='/login' element={<Login />} /> */}
			<Route path='/dashboard/*' element={<PanelRoutes />} />
			<Route path='/*' element={<WebsiteRoutes />} />
		</Routes>
	);
}

export default Navigation;
