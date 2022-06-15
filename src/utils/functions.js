import Cookies from "js-cookie";
import { constans } from "values";
import { useNavigate } from "react-router";
export const toEnDigit = function (str) {
	const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
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
export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
export function convertTime(time) {
	switch (time) {
		case "00:00":
			return { value: 0, time: time };
		case "00:30":
			return { value: 0.5, time: time };
		case "01:00":
			return { value: 1, time: time };
		case "01:30":
			return { value: 1.5, time: time };
		case "02:00":
			return { value: 2, time: time };
		case "02:30":
			return { value: 2.5, time: time };
		case "03:00":
			return { value: 3, time: time };
		case "03:30":
			return { value: 3.5, time: time };
		case "04:00":
			return { value: 4, time: time };
		case "04:30":
			return { value: 4.5, time: time };
		case "05:00":
			return { value: 5, time: time };
		case "05:30":
			return { value: 5.5, time: time };
		case "06:00":
			return { value: 6, time: time };
		case "06:30":
			return { value: 6.5, time: time };
		case "07:00":
			return { value: 7, time: time };
		case "07:30":
			return { value: 7.5, time: time };
		case "08:00":
			return { value: 8, time: time };
		case "08:30":
			return { value: 8.5, time: time };
		case "09:00":
			return { value: 9, time: time };
		case "10:00":
			return { value: 10, time: time };
		case "10:30":
			return { value: 10.5, time: time };
		case "11:00":
			return { value: 11, time: time };
		case "11:30":
			return { value: 11.5, time: time };
		case "12:00":
			return { value: 12, time: time };
		case "12:30":
			return { value: 12.5, time: time };
		case "13:00":
			return { value: 13, time: time };
		case "13:30":
			return { value: 13.5, time: time };
		case "14:00":
			return { value: 14, time: time };
		case "14:30":
			return { value: 14.5, time: time };
		case "15:00":
			return { value: 15, time: time };
		case "15:30":
			return { value: 15.5, time: time };
		case "16:00":
			return { value: 16, time: time };
		case "16:30":
			return { value: 16.5, time: time };
		case "17:00":
			return { value: 17, time: time };
		case "17:30":
			return { value: 17.5, time: time };
		case "18:00":
			return { value: 18, time: time };
		case "18:30":
			return { value: 18.5, time: time };
		case "19:00":
			return { value: 19, time: time };
		case "19:30":
			return { value: 19.5, time: time };
		case "20:00":
			return { value: 20, time: time };
		case "20:30":
			return { value: 20.5, time: time };
		case "21:00":
			return { value: 21, time: time };
		case "21:30":
			return { value: 21.5, time: time };
		case "22:00":
			return { value: 22, time: time };
		case "22:30":
			return { value: 22.5, time: time };
		case "23:00":
			return { value: 23, time: time };
		case "23:30":
			return { value: 0, time: time };

		default:
			break;
	}
}
