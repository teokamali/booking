import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserDashboard from "./UserDashboard";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "./context";

const Dashboard = () => {
  return (
    <MaterialUIControllerProvider>
      <UserDashboard />
    </MaterialUIControllerProvider>
  );
};

export default Dashboard;
