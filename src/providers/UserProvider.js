// UserProvider.js
import React, { useState } from "react";
import { UserContext } from "../context/Contexts";
import {
  urlLogin,
  urlForgotPassword,
  urlForgotPasswordOtpSubmit,
} from "../utils/contants";
import { PostRequest, GetRequest } from "../utils/AxiosRequest";
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
  const [toggle, setToggle] = useState(false);
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
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
