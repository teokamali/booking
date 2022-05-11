import routes from "./routes";
import axios from "./webSiteAxios";

const webSiteLogin = async (email, password) => {
  const response = await axios.post(routes.webSiteLoginWithEmailRoute, {
    email,
    password,
  });

  return response;
};

export default webSiteLogin;
