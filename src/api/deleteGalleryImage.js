import routes from "./routes";
import axios from "./webSiteAxios";

const deleteUserGalleryImage = async ({ id }) => {
  const response = await axios.delete(`${routes.usergallery}/${id}`);
  return response.data;
};

export default deleteUserGalleryImage;
