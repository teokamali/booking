import React, { useState } from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetPropertyType } from "hooks/useProperty";
import { Modal, CustomDropDown1 } from "components";
import { useGetGallery } from "hooks/useUserGallery";
import { Loader } from "components";
import {
  CButton,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormTextarea,
} from "@coreui/react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import "./index.scss";

const AddProperty = () => {
  useGetGallery();
  const { data, isError, error, isLoading, isFetching } = useGetGallery(); //token
  const propertyTypes = useGetPropertyType();
  const [selectedImages, setSelectedImages] = useState([]);
  const onImageClickHandler = (item) => {
    setSelectedImages((prev) => [...prev, item]);
  };
  const removeImage = (item) => {
    setSelectedImages((prev) => prev.filter((image) => image.id !== item.id));
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="AddPropertyPage">
        <div className="AddPropertyPage__header">
          <h2>Add new Property</h2>
        </div>
        <div className="AddPropertyPage__body">
          {/* Add Image */}
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <label htmlFor="">Select your property images</label>
              <Modal
                id="galleryModal"
                buttonText="gallery"
                buttonClassnames="btn-main"
                modalTitle="Media Gallery"
                renderCloseButton={true}
              >
                <div className="container">
                  <div className="row">
                    {data ? (
                      data.data.length === 0 ? (
                        <h4>Your Gallery is Empty</h4>
                      ) : (
                        data.data.map((item) => (
                          <div
                            className="galleryImages col-12 col-md-6 col-lg-3"
                            key={item.id}
                          >
                            {selectedImages.includes(item) ? (
                              <div className="galleryImage-wrapper">
                                <div
                                  className="galleryImageOverlay "
                                  onClick={() => removeImage(item)}
                                >
                                  <i className="fas fa-check"></i>
                                </div>
                                <img
                                  className={`galleryImage selected`}
                                  src={item.medium_image_link}
                                  alt=""
                                />
                              </div>
                            ) : (
                              <img
                                className={`galleryImage`}
                                src={item.medium_image_link}
                                alt=""
                                onClick={() => onImageClickHandler(item)}
                              />
                            )}
                          </div>
                        ))
                      )
                    ) : null}
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          {/* Preview selected images */}
          <div className="container mt-3">
            <div className="row">
              {selectedImages.map((images, i) => (
                <div className="col-6 col-md-3 mb-3" key={i}>
                  <img
                    className="preview-image"
                    src={images.medium_image_link}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          {/* form */}
          <div className="container mt-3">
            <Formik
              // validationSchema={Validate}
              initialValues={{ name: "" }}
              // onSubmit={(e) => submitHandler(e)}
            >
              {(formik) => (
                <Form>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      name="name"
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="subtitle"
                      placeholder="Subtitle"
                      name="subtitle"
                    />
                    <label htmlFor="subtitle">Subtitle</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      type="text"
                      className="form-control"
                      id="description"
                      placeholder="Description"
                      name="description"
                      style={{ height: "100px" }}
                    />
                    <label htmlFor="description">Description</label>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddProperty;
