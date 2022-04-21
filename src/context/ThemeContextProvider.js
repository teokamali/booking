import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  // find prefered theme
  const isLightPreferd = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const preferTheme = isLightPreferd ? "light" : "dark";
  // theme State
  const [theme, setTheme] = useState(preferTheme);

  // theme Change hander
  const themeChangeHandler = (e) => {
    const selected = e.target.checked ? "light" : "dark";
    setTheme(selected);
    // console.log(e.target.checked);
  };
  const isDark = theme === "dark";
  return (
    <ThemeContext.Provider
      value={{ isDark, theme, setTheme, themeChangeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
