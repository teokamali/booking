import React, { useContext, useEffect, useState } from "react";
import {
  AddButtonWithIcon,
  Button,
  Loader,
  Modal,
  Toastify,
} from "../../../components";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import {
  useGetGallery,
  usePostGallery,
  useDeleteGallery,
  useUpdateGallery,
} from "../../../hooks/useUserGallery";
import "./index.scss";
import { UserContext } from "../../../context/UsersContextProvider";
import { Field, Form, Formik } from "formik";

const Gallery = () => {
  const { user, setUser } = useContext(UserContext);
  const [fieldValue, setFieldValue] = useState({ image: "", title: "" });
  const { mutate: galleryMutate } = useGetGallery(); //token
  const { mutate: postGallery, isLoading: isAddLoading } = usePostGallery(); // picture , title
  const { mutate: deleteGalleryImage } = useDeleteGallery(); //id
  const { mutate: updateGallery, isLoading: isUpdateLoading } =
    useUpdateGallery(); //id , title
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
              {({ errors, touched, values, isSubmitting }) => (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateTitleHandler(values);
                  }}
                >
                  <div className="form-floating input-wrapper mb-3">
                    <Field
                      className="form-control"
                      name="title"
                      placeholder="Title"
                      id="title"
                      autoComplete="off"
                      type="text"
                    />
                    <label htmlFor="title">Update Title</label>
                  </div>
                  <img className="mb-3 img-preview" src={image} alt="preview" />
                  <Button
                    isBold
                    hasBorder
                    disabled={isUpdateLoading}
                    isLoading={isUpdateLoading}
                    type="submit"
                  >
                    Update
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
            buttonText={<AddButtonWithIcon />}
          >
            <form
              className="upload-image-form"
              onSubmit={(e) => {
                addImageHandler(e);
              }}
            >
              <div className="mb-3">
                <label htmlFor="file" className="form-label">
                  Select your image:
                </label>
                <input
                  className="form-control"
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
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="floatingInput"
                  placeholder="Image Title"
                  type="text"
                  name="title"
                  value={fieldValue.title}
                  onChange={(event) => {
                    setFieldValue({
                      ...fieldValue,
                      title: event.target.value,
                    });
                  }}
                />
                <label htmlFor="floatingInput">Image Title</label>
              </div>
              <Button
                type="submit"
                hasBoxShadow
                hasBorder
                disabled={isAddLoading}
                isLoading={isAddLoading}
                onClick={(e) => {
                  addImageHandler(e);
                }}
              >
                Add Image
              </Button>
            </form>
          </Modal>
        </div>
        <div className="gallery__body">
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
                      image={`${item.original_image_link}`}
                      onDelete={() => deleteHandler(item.id)}
                    />
                    <h2 className="item-title">{item.title}</h2>
                  </div>
                ))
              )
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Gallery;
