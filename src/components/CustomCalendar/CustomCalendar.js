/* eslint-disable array-callback-return */
/* eslint-disable no-extend-native */
import React from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import "./CustomCalendar.scss";
import { toEnDigit } from "../../utils/functions";
function CustomCalendar({ value, onValueChange, bookedDays }) {
  const normalDayPrice = 1500;
  const fridayPrice = 2000;
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

  return (
    <Calendar
      className="custom-calendar"
      value={value}
      minDate={new DateObject({ calendar: persian }).set(
        "day",
        `${date.format("D")}`
      )}
      onChange={onChangeHandler}
      weekDays={weekDays}
      calendar={persian}
      range
      locale={persian_fa}
      plugins={[weekends()]}
      mapDays={({ date }) => {
        let isWeekend = date.weekDay.index === 6;
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

        return {
          children: (
            <>
              <div className="custom-day-wrapper">
                <p className="custom-day">{date.format("D")}</p>
                <small className="custom-day-price">
                  {isWeekend
                    ? fridayPrice.toLocaleString()
                    : normalDayPrice.toLocaleString()}
                </small>
              </div>
            </>
          ),
        };
      }}
      hideYear
      disableYearPicker
    />
  );
}

export default CustomCalendar;
