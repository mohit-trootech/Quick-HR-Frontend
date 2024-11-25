// ThemeContext.js
import React from "react";
import { getLocalStorage } from "../utils/utils";

const ThemeContext = React.createContext(getLocalStorage("theme") || "light");

const Context = {
  ThemeContext,
};
export default Context;
