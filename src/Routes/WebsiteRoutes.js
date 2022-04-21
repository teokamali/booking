import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "../AdminPanel/views/pages/page404/Page404";
import Layout from "../layout/Layout";
import HomeScrean from "../Screen/HomeScrean";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import RecoverPassword from "../components/RecoverPassword/RecoverPassword";
export default function WebsiteRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScrean />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recover-password" element={<RecoverPassword />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}
