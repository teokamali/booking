import { constans } from "../values";
import Cookies from "js-cookie";
import routes from "./routes";
import axios from "./webSiteAxios";

const webSiteRegister = async (registerData) => {
  const {
    first_name,
    last_name,
    email,
    lang,
    currency,
    user_type_id,
    password,
    password_confirmation,
  } = registerData;
  try {
    const resLogin = await axios.post(routes.webSiteRegisterWithEmailRoute, {
      first_name,
      last_name,
      email,
      lang,
      currency,
      user_type_id,
      password,
      password_confirmation,
    });
    Cookies.set(constans.TOKEN, resLogin.data.access_token);
    console.log({ resLogin });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export default webSiteRegister;
