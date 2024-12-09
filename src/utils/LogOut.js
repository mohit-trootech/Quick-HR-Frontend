/**Logout & Update Token Handling */
import { toast } from "react-toastify";
import { removeLocalStorage } from "./utils";
import { LoggedOut } from "../utils/handleResponses";
export const LogOut = async () => {
  /**Log Out */
  let id = toast.loading("Unauthroized, Logging out");
  removeLocalStorage("access");
  removeLocalStorage("refresh");
  LoggedOut("Logged Out Successfully", id);
  setTimeout(() => {
    window.location.href = "/login";
  }, 3000);
};
