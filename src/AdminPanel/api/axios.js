import axios from "axios";
import { constans } from "../values";

export default axios.create({
  baseURL: "http://hostapp.ir/api/v1/",
  headers: { Authorization: `Bearer ${constans.TOKEN}` },
});
