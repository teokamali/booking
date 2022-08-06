import axios from "axios";
import Cookies from "js-cookie";
import { constans } from "../values";

export default axios.create({
	baseURL: "http://hostap.ir/api/v1/",
	headers: {
		Authorization: `Bearer ${Cookies.get(constans.TOKEN)}`,
		"Content-Language": "en",
		Accept: "application/json",
	},
	crossDomain: true,
});
