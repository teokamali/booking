import React from "react";
import { toast } from "react-toastify";
const Toastify = (type, text) => {
  if (type === "success") {
    toast.success(text);
  }
  if (type === "error") {
    toast.error(text);
  }
};
export default Toastify;
