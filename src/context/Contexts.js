// ThemeContext.js
import { createContext } from "react";
import { getLocalStorage } from "../utils/utils";

export const ThemeContext = createContext(getLocalStorage("theme") || "light");

export const AuthContext = createContext();

export const PaginationContext = createContext();

export const PreloadContext = createContext(true);

export const OrganizationContext = createContext();

export const UserContext = createContext(getLocalStorage("access"));

export const DashboardContext = createContext();

export const LeavesContext = createContext();

export const ReviewContext = createContext();

export const ProjectsContext = createContext();

export const ResignationContext = createContext();
