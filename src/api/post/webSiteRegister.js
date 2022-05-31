import { constans } from "../../values";
import Cookies from "js-cookie";
import routes from "../routes";
import axios from "../webSiteAxios";

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
  const response = await axios.post(routes.webSiteRegisterWithEmailRoute, {
    first_name,
    last_name,
    email,
    lang,
    currency,
    user_type_id,
    password,
    password_confirmation,
  });

  return response.data;
};
export default webSiteRegister;
