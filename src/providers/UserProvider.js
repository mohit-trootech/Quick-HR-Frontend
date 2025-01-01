// UserProvider.js
import React, { useState, useContext } from "react";
import { UserContext, PreloadContext, AuthContext } from "../context/Contexts";
import {
  urlLogin,
  urlForgotPassword,
  urlForgotPasswordOtpSubmit,
} from "../utils/contants";
import { PostRequest, GetRequest, PatchRequest } from "../utils/AxiosRequest";
import { toast } from "react-toastify";
import {
  handleLogin,
  handleForgotPassword,
  organizationRegisterSuccess,
  organizationLoginSuccess,
} from "../utils/handleResponses";
import { BaseUrlPath } from "../utils/contants";
import { getBearerToken } from "../utils/utils";

const UserProvider = ({ children }) => {
  /**User App States */
  let id = null;
  const { updatePreloader } = useContext(PreloadContext);
  const { auth } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [projectManagers, setProjectManagers] = useState(null);
  const [usersList, setUsersList] = useState(null);
  const [user, setUser] = useState(null);
  /**User App Functions */
  const loginRequest = async (data) => {
    id = toast.loading("Please Wait, Logging in...");
    await PostRequest(urlLogin, data, null, handleLogin, id);
  };
  const forgotPassword = async (data) => {
    id = toast.loading("Please wait, Verifying Email...");
    let response = await PostRequest(
      urlForgotPassword,
      data,
      null,
      handleForgotPassword,
      id
    );
    return response;
  };
  const forgotPasswordOtpSubmit = async (data) => {
    id = toast.loading("Please wait, Verifying OTP...");
    await PostRequest(
      urlForgotPasswordOtpSubmit,
      data,
      null,
      handleForgotPassword,
      id
    );
  };
  const organizationLoginRequest = async (data) => {
    id = toast.loading("Please Wait,Logging in...");
    await PostRequest(
      BaseUrlPath + "/accounts/organization-login/",
      data,
      null,
      organizationLoginSuccess,
      id
    );
  };
  const organizationRegisterRequest = async (data) => {
    id = toast.loading("Please Wait, Registering in...");
    await PostRequest(
      BaseUrlPath + "/accounts/organization-register/",
      data,
      null,
      organizationRegisterSuccess,
      id
    );
  };
  const [userData, setUserData] = useState(null);
  /**Get User Data */
  const getUserData = async () => {
    const response = await GetRequest(
      BaseUrlPath + "/accounts/logged-in-user/",
      getBearerToken,
      null,
      null
    );
    response && setUserData(response.data);
  };
  /**Get Project Manager */
  const getProjectManagers = async (query_params) => {
    const response = await GetRequest(
      `${BaseUrlPath}/accounts/user-list/project_managers/${
        query_params || ""
      }`,
      getBearerToken,
      null,
      null
    );
    response && setProjectManagers(response.data);
  };
  /**Get User List */
  const getUsersList = async (query_params) => {
    const response = await GetRequest(
      `${BaseUrlPath}/accounts/user-list/${query_params || ""}`,
      getBearerToken
    );
    response && setUsersList(response.data.results);
  };
  /**Get User Profile Details */
  const getUserProfile = async () => {
    if (auth) {
      const response = await GetRequest(
        `${BaseUrlPath}/accounts/profile/${auth && auth.user.id}/`,
        getBearerToken,
        null,
        null,
        updatePreloader
      );
      response && setUser(response.data);
    }
  };
  /**Update User Profile */
  const updateUserProfile = async (data) => {
    let response = await PatchRequest(
      `${BaseUrlPath}/accounts/profile/${auth && auth.user.id}/`,
      data,
      getBearerToken,
      null,
      updatePreloader
    );
    response && setUser(response.data);
  };
  const data = {
    loginRequest,
    forgotPassword,
    forgotPasswordOtpSubmit,
    toggle,
    setToggle,
    organizationLoginRequest,
    organizationRegisterRequest,
    userData,
    getUserData,
    getProjectManagers,
    getUsersList,
    projectManagers,
    usersList,
    user,
    getUserProfile,
    updateUserProfile,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
