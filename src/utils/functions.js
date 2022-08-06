import Cookies from "js-cookie";
import { constans } from "values";
import { useNavigate } from "react-router";
import { stringify } from "stylis";
import moment from "moment";
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
export function timeStringToFloat(time) {
	var hoursMinutes = time.split(/[.:]/);
	var hours = parseInt(hoursMinutes[0], 10);
	var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
	return hours + minutes / 60;
}
export const log = (text, color) => {
	console.log(
		`%c ${text}`,
		`color: ${color};font-family: IRANSansX; font-weight: bold; font-size: 1rem`
	);
};
export const getDaysInMonthArray = function (year, month) {
	const monthIndex = month - 1; // 0..11 instead of 1..12
	const date = new Date(year, monthIndex, 1);
	const currMonth = moment().format("MM");
	console.log(currMonth);
	const result = [];
	while (date.getMonth() == monthIndex) {
		const day = date.getDate();
		result.push(
			`${
				day < 10 ? currMonth + "-" + "0" + day.toString() : currMonth + "-" + day.toString()
			}`
		);
		date.setDate(date.getDate() + 1);
	}
	return result;
};
