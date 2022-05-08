import React, { useState } from "react";
import { DateObject } from "react-multi-date-picker";

import {
  Button,
  CustomDropDown1,
  CustomDatePicker,
  CustomRadioButton2,
} from "../../components";

import persian from "react-date-object/calendars/persian";
import { useTranslation } from "react-i18next";

import "./index.scss";

const VilaFinder = () => {
  const { t } = useTranslation();
  const vilatypes = [
    {
      id: "1",
      type: t("vila"),
      htmlId: "vila",
      value: "vila",
    },
    {
      id: "2",
      type: t("apartment"),
      htmlId: "apartment",
      value: "apartment",
    },
    {
      id: "3",
      type: t("soiit"),
      htmlId: "soiit",
      value: "soiit",
    },
    {
      id: "4",
      type: t("hotel"),
      htmlId: "hotel",
      value: "hotel",
    },
  ];
  const cities = [
    { value: "ramsar", label: t("ramsar") },
    { value: "mahmood-abad", label: t("mahmood_abad") },
    { value: "tonekabon", label: t("tonekabon") },
    { value: "chaboksar", label: t("chaboksar") },
  ];
  const peopleNum = [
    {
      id: "1",
      type: t("to_4_people"),
      htmlId: "4-people",
      value: "4",
    },
    {
      id: "2",
      type: t("4_to_8_people"),
      htmlId: "4-8people",
      value: "4-8",
    },
    {
      id: "3",
      type: t("up_to_8"),
      htmlId: "up-to-8",
      value: "up-to-8",
    },
  ];
  const [customDropDownValue, setCustomDropDownValue] = useState("");
  const [vilatype, setVilaType] = useState("");
  const [date, setDate] = useState([
    new Date(),
    new DateObject({ calendar: persian }).add(1, "days"),
  ]);
  const [peopleNumValue, setPeopleNumValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ customDropDownValue, vilatype, peopleNumValue, date });
  };

  const onDropDownValueChange = (val) => {
    setCustomDropDownValue(val);
  };
  const onVilaTypeChange = (type) => {
    setVilaType(type);
  };
  const peopleNumValueChange = (num) => {
    setPeopleNumValue(num);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler} className="vilaFinder">
        <div className="vilaFinder__wrapper ">
          {/* Location */}
          <CustomDropDown1
            data={cities}
            type="single"
            name="cities"
            label={t("city_select")}
            defaultValue={cities[0]}
            value={customDropDownValue}
            onValueChange={onDropDownValueChange}
          />
          {/* date */}
          <div className="date-wrapper">
            <div className="date-input">
              <h5>{t("datepicker_title")}</h5>
              <CustomDatePicker
                value={date}
                onValueChange={setDate}
                bookedDays={[]}
              />
            </div>
          </div>
          {/* house type */}
          <CustomRadioButton2
            data={vilatypes}
            groupname="houseType"
            label={t("house_type")}
            value={vilatype}
            onValueChange={onVilaTypeChange}
            backgroundColor="#f25487"
            borderColor="#f7d9d9"
            boxShadow="0 0 0 0.25rem rgba(255, 0, 0, 0.281)"
            ActiveColor="#fff"
          />

          {/* People */}
          <CustomRadioButton2
            data={peopleNum}
            groupname="people"
            label={t("people_number")}
            value={peopleNumValue}
            onValueChange={peopleNumValueChange}
            backgroundColor="#f25487"
            borderColor="#f7d9d9"
            boxShadow="0 0 0 0.25rem rgba(255, 0, 0, 0.281)"
            ActiveColor="#fff"
          />
          <Button
            type="customBtn"
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon="fa-solid fa-magnifying-glass search-icon"
            text={t("search")}
            hoverColor="#fff"
            csColor="#fff"
            csBgColor="#f25487"
            csBorderColor="#f7d9d9"
          />
        </div>
      </form>
    </>
  );
};

export default VilaFinder;
