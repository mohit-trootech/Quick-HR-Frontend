// ThemeContext.js
import { createContext } from "react";
import { getLocalStorage } from "../utils/utils";

export const ThemeContext = createContext(getLocalStorage("theme") || "light");

export const UserContext = createContext(getLocalStorage("access"));

export const DashboardContext = createContext(null);
