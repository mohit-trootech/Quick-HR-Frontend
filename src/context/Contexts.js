// ThemeContext.js
import { createContext } from "react";
import { getLocalStorage } from "../utils/utils";

export const ThemeContext = createContext(getLocalStorage("theme") || "light");

export const UserContext = createContext(getLocalStorage("access"));

export const DashboardContext = createContext(null);

export const LeavesContext = createContext(null);

export const ProjectsContext = createContext(null);

export const TasksContext = createContext(null);

export const ReviewContext = createContext(null);

export const OrganizationContext = createContext(null);

export const PreloadContext = createContext(true);
