import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, Toastify } from "../../../components";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import {
  useGetGallery,
  usePostGallery,
  useDeleteGallery,
  useUpdateGallery,
} from "../../../hooks/useUserInfo";
import "./index.scss";
import { UserContext } from "../../../context/UsersContextProvider";
import { constans } from "values";
import { Field, Form, Formik } from "formik";

const Gallery = () => {
  const { user, setUser } = useContext(UserContext);
  const [fieldValue, setFieldValue] = useState({ image: "", title: "" });
  const { mutate: galleryMutate } = useGetGallery(); //token
  const { mutate: postGallery } = usePostGallery(); // picture , title
  const { mutate: deleteGalleryImage } = useDeleteGallery(); //id
  const { mutate: updateGallery } = useUpdateGallery(); //id , title
  const { gallery } = user;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    galleryMutate();
  }, []);

  useEffect(() => {
    if (gallery.length > 0) {
      setIsLoading(false);
    }
  }, [gallery]);

  const addImageHandler = (e) => {
    e.preventDefault();
    const imageSize = fieldValue.image.size / 1000;
    const selectedImage = fieldValue.image;
    // form validation
    if (selectedImage !== "" && fieldValue.title !== "") {
      if (imageSize < 5120) {
        if (
          selectedImage.type === "image/png" ||
          selectedImage.type === "image/jpeg" ||
          selectedImage.type === "image/bmp " ||
          selectedImage.type === "image/png "
        ) {
          postGallery({ image: fieldValue.image, title: fieldValue.title });
        } else {
          Toastify(
            "error",
            "image fomat not valid! valid formats : jpg , jpeg ,png ,bpm"
          );
        }
      } else {
        Toastify("error", "image size most be lest than 5mb");
      }
    } else {
      Toastify("error", "both fields are required");
    }
  };
  const deleteHandler = (id) => {
    deleteGalleryImage({ id });
  };
  const updateTitleHandler = (values) => {
    updateGallery({ id: values.id, title: values.title });
  };
  const AddImage = () => {
    return (
      <span className="AddImage">
        <i className="fa-regular fa-file-plus"></i>
        <span>Add</span>
      </span>
    );
  };
  const ImageGallery = ({ id, title, image, onDelete }) => {
    return (
      <div className="imageGallery">
        <img src={image} alt="" />
        <div className="actions">
          <Modal
            id={`EditModal${id}`}
            buttonClassnames="edit-title fa-regular fa-pen"
            modalTitle="Edit Image Title"
          >
            <Formik
              initialValues={{
                title: title,
                id: id,
              }}
            >
              {({ errors, touched, values }) => (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateTitleHandler(values);
                  }}
                >
                  <div className="form-floating input-wrapper">
                    <Field
                      className="form-control"
                      name="title"
                      placeholder="Title"
                      id="title"
                      autoComplete="off"
                      type="text"
                    />
                    <label htmlFor="email">update title</label>
                  </div>
                  <img src={image} alt="" />

                  <Button isBold hasBorder type="submit">
                    update
                  </Button>
                </Form>
              )}
            </Formik>
          </Modal>
          <button className="delete-btn" onClick={onDelete}>
            <i className="fa-regular fa-trash"></i>
          </button>
        </div>
      </div>
    );
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="gallery">
        <div className="gallery__header">
          <h2>List Of Gallery Images</h2>
          <Modal
            id="AddgalleryModal"
            modalTitle="Add New Image"
            buttonClassnames="login-modal-btn"
            buttonText={<AddImage />}
          >
            <form
              className="upload-image-form"
              onSubmit={(e) => {
                addImageHandler(e);
              }}
            >
              <p>Select your image:</p>
              <input
                id="file"
                name="file"
                type="file"
                values={fieldValue.image}
                onChange={(event) => {
                  setFieldValue({
                    ...fieldValue,
                    image: event.currentTarget.files[0],
                  });
                }}
              />
              <p>Image title:</p>
              <input
                type="text"
                name="title"
                placeholder="Example: Pool"
                value={fieldValue.title}
                onChange={(event) => {
                  setFieldValue({
                    ...fieldValue,
                    title: event.target.value,
                  });
                }}
              />
              <Button type="submit" hasBoxShadow hasBorder>
                Add Image
              </Button>
            </form>
          </Modal>
        </div>
        <div className="gallery__body ">
          <div className="row">
            {!isLoading ? (
              gallery[0] === "empty" ? (
                <h2>Gallery is Empty</h2>
              ) : (
                gallery.map((item) => (
                  <div
                    className="col-12 col-md-6 col-lg-3 item-card "
                    key={item.id}
                  >
                    <ImageGallery
                      id={item.id}
                      title={item.title}
                      image={`${constans.STORAGE}/${item.original_file_path}`}
                      onDelete={() => deleteHandler(item.id)}
                    />
                    <h2 className="item-title">{item.title}</h2>
                  </div>
                ))
              )
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Gallery;
