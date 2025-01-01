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
  SuccessToast(id, response.message, "/login");
};

export const newLeaveCreated = (response, id) => {
  /**Handle New Leave Create Success Response */
  SuccessToast(id, "Leave Request Created Successfully..");
};
export const updateLeaveSuccess = (response, id) => {
  /**Handle Update Leave Success Response */
  SuccessToast(id, "Leave Updated Successfully..");
};
export const organizationRegisterSuccess = (response, id) => {
  /**Handle Organization Register Success Response */
  SuccessToast(
    id,
    "Organization Registered Successfully",
    "/organization/accounts/"
  );
};

export const organizationLoginSuccess = (response, id) => {
  /**Handle Organization Login Success Response */
  updateLocalStorage("access", response.access);
  updateLocalStorage("refresh", response.refresh);
  SuccessToast(id, "Login Successful", "/organization/");
};

export const updateCustomizationSuccess = (response, id) => {
  /**Handle Update Customization Success Response */
  SuccessToast(id, "Customization Updated Successfully");
};

export const createOrganizationSuccess = (response, id) => {
  /**Handle Create Organization Success Response */
  SuccessToast(id, "Organization Created Successfully");
};

export const postReviewSuccess = (response, id) => {
  /**Handle Post Review Success Response */
  SuccessToast(id, "Review Posted Successfully");
};
export const createOrganizationUserSuccess = (response, id) => {
  /**Handle Create Organization User Success Response */
  SuccessToast(id, "User Created Successfully");
};
export const updateOrganizationSuccess = (response, id) => {
  /**Handle Update Organization Success Response */
  SuccessToast(id, "Organization Updated Successfully");
};
export const createBroadCastMessageSuccess = (response, id) => {
  /**Handle Create Broadcast Message Success Response */
  SuccessToast(id, "Broadcast Message Created Successfully");
};
export const removeUserSuccess = (response, id) => {
  /**Handle Remove User Success Response */
  SuccessToast(id, "User Removed Successfully");
};
export const createTaskSuccess = (response, id) => {
  /**Handle Create Task Success Response */
  SuccessToast(id, "Task Created Successfully");
};

export const createActivitySuccess = (response, id) => {
  /**Handle Create Activity Success Response */
  SuccessToast(id, "Activity Created Successfully");
};

export const createProjectSuccess = (response, id) => {
  /**Handle Create Project Success Response */
  SuccessToast(id, "Project Created Successfully");
};

export const newResignationCreated = (response, id) => {
  /**Handle New Resignation Create Success Response */
  SuccessToast(id, "Resignation Request Created Successfully..");
};
