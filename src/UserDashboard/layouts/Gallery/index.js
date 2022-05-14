import React from "react";
import { Button, Modal } from "../../../components";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import "./index.scss";
const Gallery = () => {
  const AddImage = () => {
    return (
      <Button isBold hasBoxShadow hasBorder>
        <i className="fa-regular fa-file-plus px-2"></i>
        <span>Add</span>
      </Button>
    );
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="gallery">
        <div className="gallery__header">
          <h2>Gallery</h2>
          <Modal
            id="AddgalleryModal"
            modalTitle="Add New Image"
            buttonClassnames="login-modal-btn"
            buttonText={<AddImage />}
          ></Modal>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Gallery;
