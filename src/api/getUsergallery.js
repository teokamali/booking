import routes from "./routes";
import axios from "./webSiteAxios";

const getUserGallery = async () => {
  const response = await axios.get(routes.usergallery);
  return response.data;
};

export default getUserGallery;
