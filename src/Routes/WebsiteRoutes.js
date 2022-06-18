import { Routes, Route } from "react-router-dom";
import { HomeScreen, AboutUs, Blog, ContactUs, SingleHotel } from "Screens/";
import Layout from "layout/Layout";
function WebsiteRoutes() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='about-us' element={<AboutUs />} />
				<Route path='blog' element={<Blog />} />
				<Route path='contact-us' element={<ContactUs />} />
				<Route path='hotel/:id' element={<SingleHotel />} />
				{/* <Route path='*' element={<Page404 />} /> */}
			</Routes>
		</Layout>
	);
}

export default WebsiteRoutes;
