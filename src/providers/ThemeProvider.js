/**Theme Provider */
import React, { useState } from "react";
import { loadLocalstorage, SaveUpdateLocalstorage } from "../utils/BaseUtils";
import { ThemeContext } from "../contexts/Contexts";
const ThemeProvider = ({ children }) => {
  /**Theme Provider Context */
  const [theme, setTheme] = useState(loadLocalstorage("theme") || "light");
  const updateTheme = (event) => {
    setTheme(event.target.value);
    SaveUpdateLocalstorage("theme", event.target.value);
  };
  const data = { updateTheme, theme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
