import { constans } from "../values";
import Cookies from "js-cookie";
import routes from "./routes";
import axios from "./webSiteAxios";

const webSiteLogin = async (email, password) => {
  try {
    const resLogin = await axios.post(routes.webSiteLoginWithEmailRoute, {
      email: email,
      password: password,
    });
    Cookies.set(constans.TOKEN, resLogin.data.result.token);
    // console.log({ resLogin });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export default webSiteLogin;
