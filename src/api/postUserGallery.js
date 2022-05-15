import routes from "./routes";
import axios from "./webSiteAxios";

const postUserGallery = async ({ image, title }) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", title);
  const response = await axios.post(routes.usergallery, formData);
  return response;
};

export default postUserGallery;
