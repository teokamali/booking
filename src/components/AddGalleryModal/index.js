import React, { useState } from "react";
import { Modal, AddButtonWithIcon, Button, Toastify } from "components";
import { usePostGallery } from "../../hooks/useUserGallery";

const AddGalleryModal = () => {
  const [fieldValue, setFieldValue] = useState({ image: "", title: "" });
  const { mutate: postGallery, isLoading: isAddLoading } = usePostGallery(); // picture , title

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
  return (
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
  );
};

export default AddGalleryModal;
