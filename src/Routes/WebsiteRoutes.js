import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "../AdminPanel/views/pages/page404/Page404";
import { RecoverPassword } from "../components";
import Layout from "../layout/Layout";

import { HomeScreen } from "../Screens";
export default function WebsiteRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="recover-password" element={<RecoverPassword />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}
