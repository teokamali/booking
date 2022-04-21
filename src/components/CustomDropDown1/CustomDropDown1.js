import React from "react";

import Select from "react-select";
import "./customDropDown1.scss";
const CustomDropDown1 = ({
  data,
  type,
  name,
  label,
  defaultValue,
  value,
  onValueChange,
}) => {
  let className;
  if (type === "single") {
    className = "basic-single city__select__input ";
  } else if (type === "multi") {
    className = "basic-multi-select city__select__input";
  } else {
    console.log("Invalid type");
  }

  const onChangeHandler = (e) => {
    onValueChange(e);
  };
  const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });
  const csStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "#f25487"
          : isFocused
          ? "#f7d9d9"
          : undefined,
        color: isDisabled
          ? "#333"
          : isSelected
          ? "#333"
            ? "white"
            : "black"
          : "#333",
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? "#f25487"
              : ""
            : undefined,
        },
      };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };

  return (
    <div className="city__select">
      <label htmlFor="" className="city__select__label">
        {label}
      </label>
      <Select
        defaultValue={defaultValue}
        isMulti={type === "multi" && true}
        name={name}
        options={data}
        className={className}
        classNamePrefix="select"
        value={value ? value : defaultValue}
        onChange={onChangeHandler}
        styles={csStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#f25487",
          },
        })}
      />
    </div>
  );
};

export default CustomDropDown1;
