import React, { useContext } from "react";
import styled from "styled-components";
// context
import { ThemeContext } from "../../context/ThemeContextProvider";
// styles

const ThemeTogglerEl = styled.label`
  position: relative;
  display: inline-block;
  width: 1.9rem;
  height: 1rem;
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  & span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ff4754;
    border-radius: 0.5rem;

    transition: background 0.2s;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      left: 0.1rem;
      top: 50%;
      transform: translateY(-50%);
      height: 0.8rem;
      width: 0.8rem;
      border-radius: 0.8rem;
      background: #040404;
      transition: transform 0.2s, width 0.2s, background 0.2s;
    }
  }

  input:checked + span {
    background: #f9f9f9;
  }

  input:not(:checked):active + span::before {
    width: 1.2rem;
  }

  input:checked:active + span::before {
    transform: translate(1rem, -50%);
    width: 1.2rem;
  }

  input:checked + span::before {
    transform: translate(0.9rem, -50%);
  }
`;

const ThemeToggler = () => {
  const { themeChangeHandler, theme } = useContext(ThemeContext);
  return (
    <ThemeTogglerEl className="switch">
      <input
        className="switch__input"
        type="checkbox"
        name="color"
        id="color"
        checked={theme === "light" && true}
        onChange={themeChangeHandler}
      />
      <span className="switch__slider"></span>
    </ThemeTogglerEl>
  );
};

export default ThemeToggler;
