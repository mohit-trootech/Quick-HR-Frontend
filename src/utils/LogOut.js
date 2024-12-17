/**Logout & Update Token Handling */
import { removeLocalStorage } from "./utils";
import { SuccessToast } from "./ToastMessage";
export const LogOut = async () => {
  /**Log Out */
  removeLocalStorage("access");
  removeLocalStorage("refresh");
  SuccessToast("Logged Out Successfully");
  window.location.href = "/login";
};
