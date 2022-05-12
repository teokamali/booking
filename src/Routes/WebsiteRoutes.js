import Layout from "../layout/Layout";
import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../Screens";
import Page404 from "../AdminPanel/views/pages/page404/Page404";
export default function WebsiteRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}
