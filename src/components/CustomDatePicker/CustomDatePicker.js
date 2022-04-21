/* eslint-disable array-callback-return */
/* eslint-disable no-extend-native */
import React, { useEffect } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import { toEnDigit } from "../../utils/functions";
import { useTranslation } from "react-i18next";
import jsCookie from "js-cookie";
import { languages } from "../../utils/Languages";

import "react-multi-date-picker/styles/layouts/mobile.css";
import "./CustomDatePicker.scss";
function CustomDatePicker({ value, onValueChange, bookedDays }) {
  const weekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];
  String.prototype.toFaDigit = function () {
    return this.replace(/\d+/g, function (digit) {
      var ret = "";
      for (var i = 0, len = digit.length; i < len; i++) {
        ret += String.fromCharCode(digit.charCodeAt(i) + 1728);
      }
      return ret;
    });
  };

  const date = new DateObject({
    date: new Date(),
    calendar: persian,
    locale: persian_en,
  });
  let newBookedDays;
  newBookedDays = bookedDays.filter((day) => {
    if (day >= date.format("YYYY/MM/DD")) return day.toFaDigit();
  });
  const onChangeHandler = (e) => {
    let start = e[0];
    let end = e[1];
    if (start && end) {
      onValueChange([start, end]);
    }
  };
  function CustomRangeInput({ openCalendar, value }) {
    let from = value[0] || "";
    let to = value[1] || "";
    const { t } = useTranslation();
    value = `${
      from && to ? `${t("date_from")} ${from} ${t("date_to")} ${to} ` : from
    }`;
    return (
      <input
        className="custom-input"
        onFocus={openCalendar}
        value={value}
        readOnly
      />
    );
  }
  const currentlanguageCode = jsCookie.get("i18next") || "en";
  const currentLanguage = languages.find(
    (lang) => lang.code === currentlanguageCode
  );

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);
  if (currentLanguage.code === "fas") {
    return (
      <DatePicker
        className="custom-datepicker"
        render={<CustomRangeInput />}
        minDate={new DateObject({ calendar: persian }).set(
          "day",
          `${date.format("D")}`
        )}
        containerStyle={{
          width: "100%",
        }}
        value={value}
        onChange={onChangeHandler}
        weekDays={weekDays}
        calendar={persian}
        range
        locale={persian_fa}
        calendarPosition={"bottom"}
        plugins={[weekends()]}
        mapDays={({ date }) => {
          let isBooked = newBookedDays.includes(
            toEnDigit(date.format("YYYY/MM/DD"))
          );

          if (isBooked)
            return {
              disabled: true,
              style: { color: "#ccc" },
              onClick: () => alert("این تاریخ رزرو شده است"),
              children: (
                <div
                  data-toggle="tooltip"
                  data-placement="top"
                  title="این تاریخ رزرو شده است"
                >
                  <div className="custom-day-wrapper">
                    <p className="custom-day">{date.format("D")}</p>
                    <small className="custom-day">رزرو شده</small>
                  </div>
                </div>
              ),
            };
        }}
        hideYear
        disableYearPicker
      />
    );
  }
  if (currentLanguage.code === "en") {
    return (
      <DatePicker
        className="custom-datepicker"
        render={<CustomRangeInput />}
        minDate={new DateObject({ calendar: persian }).set(
          "day",
          `${date.format("D")}`
        )}
        containerStyle={{
          width: "100%",
        }}
        value={value}
        onChange={onChangeHandler}
        range
        calendarPosition={"bottom"}
        plugins={[weekends()]}
        mapDays={({ date }) => {
          let isBooked = newBookedDays.includes(
            toEnDigit(date.format("YYYY/MM/DD"))
          );

          if (isBooked)
            return {
              disabled: true,
              style: { color: "#ccc" },
              onClick: () => alert("this date is reserved"),
              children: (
                <div
                  data-toggle="tooltip"
                  data-placement="top"
                  title="this date is reserved"
                >
                  <div className="custom-day-wrapper">
                    <p className="custom-day">{date.format("D")}</p>
                    <small className="custom-day">Reserved</small>
                  </div>
                </div>
              ),
            };
        }}
        hideYear
        disableYearPicker
      />
    );
  }
}

export default CustomDatePicker;
