import React, { useEffect } from "react";
import {
  AddButtonWithIcon,
  Button,
  Loader,
  Table,
  Modal,
  CustomRadioButton2,
} from "../../../components";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";

import "./index.scss";
import { userTypes } from "../../../values";
import { Field, Form, Formik } from "formik";
import { useGetPropertyType } from "hooks/useProperty";
const Property = () => {
  const propertyTypes = useGetPropertyType();
  if (propertyTypes) {
    console.log(propertyTypes.data.data);
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="PropertyPage">
        <div className="PropertyPage__header">
          <h2>Property</h2>
          <Modal
            id="AddpropertyModal"
            modalTitle="Add property"
            isCentered
            buttonText={<AddButtonWithIcon />}
          ></Modal>
        </div>
        <div className="container">
          <Table />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Property;
