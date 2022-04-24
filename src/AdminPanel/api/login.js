import axios from "axios";
import routes from "./routes";
import Cookies from "js-cookie";
import { constans } from "../values";
import instance from "./axiosInstance";
const login = async (username, password) => {
  try {
    // const resLogin = await instance.post(routes.login, {
    //   username,
    //   password,
    // });
    // Cookies.set(constans.TOKEN, resLogin.data.result.token);
    Cookies.set(constans.TOKEN, true);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export default login;
