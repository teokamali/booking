import routes from "../routes";
import axios from "../webSiteAxios";

const updateGallery = async ({ id, title }) => {
  const response = await axios.patch(`${routes.usergallery}/${id}`, {
    title,
  });
  return response.data;
};

export default updateGallery;
