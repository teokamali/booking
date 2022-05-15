import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, Toastify } from "../../../components";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import {
  useGetGallery,
  usePostGallery,
  useDeleteGallery,
} from "../../../hooks/useUserInfo";
import "./index.scss";
import { UserContext } from "../../../context/UsersContextProvider";

const Gallery = () => {
  const { user, setUser } = useContext(UserContext);
  const { mutate: galleryMutate } = useGetGallery();
  const { mutate: postGallery } = usePostGallery();
  const { mutate: deleteGalleryImage } = useDeleteGallery();
  const [fieldValue, setFieldValue] = useState({ image: "", title: "" });
  const { gallery } = user;
  useEffect(() => {
    galleryMutate();
  }, []);

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
  const AddImage = () => {
    return (
      <span className="AddImage">
        <i className="fa-regular fa-file-plus"></i>
        <span>Add</span>
      </span>
    );
  };
  const ImageGallery = ({ image, onDelete, onEdite }) => {
    return (
      <div className="imageGallery">
        <img src={image} alt="" />
        <div className="actions">
          <Modal buttonClassnames="edit-title fa-regular fa-pen"></Modal>
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
                values={fieldValue.title}
                placeholder="Example: Pool"
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
        <div className="gallery__body">
          <div className="row">
            {gallery.length > 0 ? (
              gallery.map((item) => (
                <div className="col-12 col-md-6 col-lg-3" key={item.id}>
                  <h2>{item.title}</h2>
                  <ImageGallery
                    image="https://picsum.photos/seed/picsum/500/500"
                    onDelete={() => deleteHandler(item.id)}
                    // image={`https://www.hostap.ir/${item.original_file_path}`}
                  />
                </div>
              ))
            ) : (
              <h2>loading...</h2>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Gallery;
