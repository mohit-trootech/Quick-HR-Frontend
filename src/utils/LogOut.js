/**Logout & Update Token Handling */
import { toast } from "react-toastify";
import { removeLocalStorage } from "./utils";
import { SuccessToast } from "./ToastMessage";
export const LogOut = async () => {
  /**Log Out */
  let id = toast.loading("Unauthroized, Logging out");
  removeLocalStorage("access");
  removeLocalStorage("refresh");
  SuccessToast("Logged Out Successfully", id);
  setTimeout(() => {
    window.location.href = "/login";
  }, 4000);
};
