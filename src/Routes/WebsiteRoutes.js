import Layout from "../layout/Layout";
import { Route, Routes } from "react-router-dom";
import { HomeScreen, AboutUs, Blog, ContactUs } from "../Screens";
import Page404 from "../AdminPanel/views/pages/page404/Page404";
export default function WebsiteRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact-us" element={<ContactUs />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}
