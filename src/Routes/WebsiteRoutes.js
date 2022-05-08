import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "../AdminPanel/views/pages/page404/Page404";
import { Login, RecoverPassword, Register } from "../components";
import Layout from "../layout/Layout";

import { HomeScreen } from "../Screens";
export default function WebsiteRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recover-password" element={<RecoverPassword />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}
