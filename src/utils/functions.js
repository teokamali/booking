import Cookies from "js-cookie";
import { constans } from "values";
import { useNavigate } from "react-router";
export const toEnDigit = function (str) {
  const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  if (typeof str === "string") {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i);
    }
  }
  return str;
};

export const toFaDigit = function () {
  return this.replace(/\d+/g, function (digit) {
    var ret = "";
    for (var i = 0, len = digit.length; i < len; i++) {
      ret += String.fromCharCode(digit.charCodeAt(i) + 1728);
    }
    return ret;
  });
};
export const handleDirction = () => {
  if (document.body.dir === "rtl") {
    return true;
  }
  if (document.body.dir === "ltr") {
    return false;
  }
  return false;
};
