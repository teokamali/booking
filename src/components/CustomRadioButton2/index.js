import React from "react";
import styled from "styled-components";
import "./index.scss";
const CustomRadioButton2 = ({
  data,
  groupname,
  label,
  borderColor,
  backgroundColor,
  boxShadow,
  ActiveColor,
  hoverBackground,
  hoverColor,
  value,
  onValueChange,
}) => {
  const onChangeHandler = (value) => {
    onValueChange(value);
  };
  const LabelEl = styled.label`
    &.radioButtons__name {
      border-color: ${(props) => props.borderColor};
    }
    .btn-check:checked + &.radioButtons__name {
      background-color: ${(props) => props.backgroundColor};
      color: ${(props) => props.ActiveColor};
      box-shadow: ${(props) => props.boxShadow};
    }
    &.radioButtons__name:hover {
      color: ${(props) => props.hoverColor};
      background-color: ${(props) => props.hoverBackground};
    }
  `;

  return (
    <div className="radioButtons">
      <label htmlFor="" className="radioButtons__label">
        {label}
      </label>
      <div
        className="btn-group radioButtons__inputs"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        {data.length < 5
          ? data.map((item) => (
              <React.Fragment key={item.id}>
                <input
                  type="radio"
                  className="btn-check radiButtons__input"
                  name={groupname}
                  id={item.htmlId}
                  autoComplete="off"
                  value={item.value}
                  onChange={(e) => {
                    const { value } = e.target;
                    onChangeHandler(value);
                  }}
                />
                <LabelEl
                  className="btn radioButtons__name"
                  htmlFor={item.htmlId}
                  borderColor={borderColor}
                  backgroundColor={backgroundColor}
                  ActiveColor={ActiveColor}
                  boxShadow={boxShadow}
                  hoverColor={hoverColor}
                  hoverBackground={hoverBackground}
                >
                  {item.type}
                </LabelEl>
              </React.Fragment>
            ))
          : console.log("بیشتراز 4 آیتم ورودی داده شد")}
      </div>
    </div>
  );
};

export default React.memo(CustomRadioButton2);
