import routes from "../routes";
import axios from "../webSiteAxios";

const webSiteLogin = async () => {
  const response = await axios.post(routes.webSiteLogOut);

  return response;
};

export default webSiteLogin;
