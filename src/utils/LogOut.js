/**Logout & Update Token Handling */
import { toast } from "react-toastify";
import { removeLocalStorage } from "./utils";
import { SuccessToast } from "./ToastMessage";
export const LogOut = async () => {
  /**Log Out */
  removeLocalStorage("access");
  removeLocalStorage("refresh");
  SuccessToast("Logged Out Successfully");
  setTimeout(() => {
    window.location.href = "/login";
  }, 4000);
};
