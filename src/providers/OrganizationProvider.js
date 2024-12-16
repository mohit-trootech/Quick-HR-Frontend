/**Organization Provider */

import React, { useState, useContext } from "react";
import { OrganizationContext } from "../context/Contexts";
import {
  GetRequest,
  PostRequest,
  PatchRequest,
  DeleteRequest,
} from "../utils/AxiosRequest";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import { isOrganizationHead } from "../utils/utils";
import { toast } from "react-toastify";
import {
  updateCustomizationSuccess,
  createOrganizationSuccess,
  createOrganizationUserSuccess,
  removeUserSuccess,
} from "../utils/handleResponses";
import { PreloadContext } from "../context/Contexts";

const OrganizationProvider = ({ children }) => {
  /**Logged In User Data */
  const { updatePreloader } = useContext(PreloadContext);
  const [userData, setUserData] = useState(null);
  const [organizations, setOrganizations] = useState(null);
  const [customization, setCustomizations] = useState(null);
  const [users, setUsers] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  /**Get User Data */
  const getUserData = async () => {
    const response = await GetRequest(
      BaseUrlPath + "/accounts/logged-in-user/",
      getBearerToken,
      null,
      null
    );
    response && setUserData(response.data);
    response && isOrganizationHead(response.data);
  };
  /**Retreive User Organization */
  const getOrganizations = async (query_params) => {
    if (userData) {
      const response = await GetRequest(
        `${BaseUrlPath}/api/organizations/${userData.username}/${query_params}`,
        getBearerToken,
        null,
        null,
        updatePreloader
      );
      response && setOrganizations(response.data);
      response && setCustomizations(response.data.customization);
    }
  };
  /**Create a New Organization */
  const postOrganization = async (data) => {
    if (userData) {
      let id = toast.loading("Please Wait, Creating Organization...");
      let response = await PostRequest(
        `${BaseUrlPath}/api/organizations/${userData.username}/`,
        data,
        getBearerToken,
        createOrganizationSuccess,
        id,
        updatePreloader
      );
      response && setOrganizations(response.data);
    }
  };
  /**Organization Users */
  const getOrganizationUsers = async (query_params) => {
    const response = await GetRequest(
      `${BaseUrlPath}/api/organization-users/${query_params}`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && response.data.count && setUsers(response.data.results);
    response && response.data.count && setPrevious(response.data.previous);
    response && response.data.count && setNext(response.data.next);
  };

  const createOrganizationUser = async (data) => {
    let id = toast.loading("Please Wait, Creating Organization User...");
    let response = await PostRequest(
      `${BaseUrlPath}/api/organization-users/`,
      data,
      getBearerToken,
      createOrganizationUserSuccess,
      id,
      null
    );
    users
      ? response && setUsers([response.data, ...users])
      : setUsers([response.data]);
  };
  const removeUser = async (id) => {
    let toast_id = toast.loading("Please Wait, Removing Organization User...");
    let response = await DeleteRequest(
      `${BaseUrlPath}/accounts/profile/${id}/`,
      getBearerToken,
      removeUserSuccess,
      toast_id,
      null
    );
    response && setUsers(users.filter((user) => user.id !== id));
  };
  /**Customize Organization */
  const updateCustomization = async (data) => {
    let id = toast.loading("Please Wait, Updating Customization...");
    let response = await PatchRequest(
      `${BaseUrlPath}/api/customization/${organizations.customization.id}/`,
      data,
      getBearerToken,
      updateCustomizationSuccess,
      id
    );

    response && setCustomizations(response.data);
  };

  const data = {
    getUserData,
    userData,
    getOrganizations,
    organizations,
    postOrganization,
    customization,
    updateCustomization,
    getOrganizationUsers,
    createOrganizationUser,
    removeUser,
    users,
    previous,
    next,
  };
  return (
    <OrganizationContext.Provider value={data}>
      {children}
    </OrganizationContext.Provider>
  );
};
export default OrganizationProvider;
