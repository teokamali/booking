import routes from "./routes";
import Cookies from "js-cookie";
import { constans } from "../values";
import axios from "./axios";

const login = async (email, password) => {
	try {
		const resLogin = await axios.post("login/email", {
			email: email,
			password: password,
		});
		// Cookies.set(constans.TOKEN, resLogin.data.result.token);
		// console.log({ resLogin });
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};
export default login;
