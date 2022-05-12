import Layout from "../layout/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomeScreen } from "../Screens";
import Dashboard from "../UserDashboard";
import Page404 from "../AdminPanel/views/pages/page404/Page404";
import RequireAuth from "Routes/RequierAuth";
import { userTypes } from "values";
export default function WebsiteRoutes() {
  const location = useLocation().pathname;
  const Passenger = userTypes.find((user) => user.value === 1);

  return (
    <>
      {location.includes("dashboard") ? (
        <Routes>
          <Route path="dashboard/*" element={<Dashboard />} />
          {/* <Route element={<RequireAuth allowedRoles={[Passenger]} />}>
          </Route> */}
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
