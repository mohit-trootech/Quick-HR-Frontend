/**Handle Responses */
import { updateLocalStorage } from "../utils/utils";
import { SuccessToast } from "../utils/ToastMessage";
/**Handle Accounts App Responses */
export const handleLogin = (response, id) => {
  /**Handle login Response */
  updateLocalStorage("access", response.access);
  updateLocalStorage("refresh", response.refresh);
  SuccessToast(id, "Login Successful", "/");
};

export const handleForgotPassword = (response, id) => {
  /**Handle Forgot Password Response */
  SuccessToast(id, response.message);
};

export const newLeaveCreated = (response, id) => {
  /**Handle New Leave Create Success Response */
  SuccessToast(id, "Leave Request Created Successfully..");
};

export const organizationRegisterSuccess = (response, id) => {
  /**Handle Organization Register Success Response */
  SuccessToast(id, "Organization Registered Successfully");
};

export const organizationLoginSuccess = (response, id) => {
  /**Handle Organization Login Success Response */
  updateLocalStorage("access", response.access);
  updateLocalStorage("refresh", response.refresh);
  SuccessToast(id, "Login Successful", "/");
};

export const updateCustomizationSuccess = (response, id) => {
  /**Handle Update Customization Success Response */
  SuccessToast(id, "Customization Updated Successfully");
};
