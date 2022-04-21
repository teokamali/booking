import React, { Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "../routes";

const AppContent = () => {
  return (
    <CContainer lg>
      <Outlet />
    </CContainer>
  );
};

export default React.memo(AppContent);
