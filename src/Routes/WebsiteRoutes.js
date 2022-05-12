import Layout from "../layout/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomeScreen } from "../Screens";
import Dashboard from "../UserDashboard";
import Page404 from "../AdminPanel/views/pages/page404/Page404";
export default function WebsiteRoutes() {
  const location = useLocation().pathname;
  return (
    <>
      {location.includes("dashboard") ? (
        <Routes>
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}
