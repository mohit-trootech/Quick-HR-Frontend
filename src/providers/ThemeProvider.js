/**Theme Provider */
import React, { useState } from "react";
import { getLocalStorage, updateLocalStorage } from "../utils/utils";
import { ThemeContext } from "../context/Contexts";
const ThemeProvider = ({ children }) => {
  /**Theme Provider Context */
  const [theme, setTheme] = useState(getLocalStorage("theme") || "light");
  const updateTheme = (event) => {
    setTheme(event.target.value);
    updateLocalStorage("theme", event.target.value);
  };
  const data = { updateTheme, theme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
