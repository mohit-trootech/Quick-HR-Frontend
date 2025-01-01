/* eslint-disable react-hooks/exhaustive-deps */
/**Organization Provider */

import React, { useState, useContext, useEffect } from "react";
import {
  AuthContext,
  OrganizationContext,
  PaginationContext,
  PreloadContext,
} from "../context/Contexts";
import {
  GetRequest,
  PostRequest,
  PatchRequest,
  DeleteRequest,
} from "../utils/AxiosRequest";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import { toast } from "react-toastify";

import {
  updateCustomizationSuccess,
  createOrganizationSuccess,
  createOrganizationUserSuccess,
  removeUserSuccess,
  updateOrganizationSuccess,
} from "../utils/handleResponses";

const OrganizationProvider = ({ children }) => {
  /**Organization Provider States */
  const { auth, getAuthenticatedUser } = useContext(AuthContext);
  const { updatePreloader } = useContext(PreloadContext);
  const { setPrevious, setNext, setCount } = useContext(PaginationContext);
  const [organization, setOrganization] = useState(null);
  const [customization, setCustomizations] = useState(null);
  const [departments, setDepartments] = useState(null);
  const [users, setUsers] = useState(null);
  /**Fetch Authenticated User Data if Not Available */
  useEffect(() => {
    getAuthenticatedUser();
    return () => {};
  }, []);
  const getDepartments = async () => {
    /**Create Organization Departments */
    const response = await GetRequest(
      BaseUrlPath + "/api/departments/",
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setDepartments(response.data);
  };
  const createDepartment = async (data) => {
    /**Create Organization Departments */
    let response = await PostRequest(
      BaseUrlPath + "/api/departments/",
      data,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && departments
      ? setDepartments([response.data, ...departments])
      : setDepartments([response.data]);
  };
  /**Fetch Authenticated User Organization */
  const getOrganization = async (query_params) => {
    if (auth && auth.organization.id) {
      const response = await GetRequest(
        `${BaseUrlPath}/api/organizations/${auth.organization.id}/${
          query_params || ""
        }`,
        getBearerToken,
        null,
        null,
        updatePreloader
      );
      response && setOrganization(response.data);
      response && setCustomizations(response.data.customization);
    }
  };
  /**Create a New Organization */
  const postOrganization = async (data) => {
    if (auth) {
      let id = toast.loading("Please Wait, Creating Organization...");
      let response = await PostRequest(
        `${BaseUrlPath}/api/organizations/`,
        data,
        getBearerToken,
        createOrganizationSuccess,
        id,
        updatePreloader
      );
      response && setOrganization(response.data);
    }
  };
  /**Create a New Organization */
  const updateOrganization = async (data) => {
    if (auth) {
      let id = toast.loading("Please Wait, Updating Organization...");
      let response = await PatchRequest(
        `${BaseUrlPath}/api/organizations/${organization.id}/`,
        data,
        getBearerToken,
        updateOrganizationSuccess,
        id,
        updatePreloader
      );
      response && setOrganization(response.data);
    }
  };
  /**Organization Users */
  const getOrganizationUsers = async (query_params) => {
    const response = await GetRequest(
      `${BaseUrlPath}/api/organization-users/${query_params || ""}`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && response.data.count && setUsers(response.data.results);
    response && response.data.count && setPrevious(response.data.previous);
    response && response.data.count && setNext(response.data.next);
    response && response.data.count && setCount(response.data.count);
  };
  /**Create Organization User */
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
    if (response) {
      users
        ? response && setUsers([response.data, ...users])
        : setUsers([response.data]);
    }
  };
  /**Remove Organization User */
  const removeOrganizationUser = async (id) => {
    let toast_id = toast.loading("Please Wait, Removing Organization User...");
    let response = await DeleteRequest(
      `${BaseUrlPath}/accounts/profile/${id}/`,
      getBearerToken,
      removeUserSuccess,
      toast_id,
      null
    );
    response &&
      setUsers(users.filter((user) => user.id !== parseInt(id)) || []);
  };
  /**Customize Organization */
  const updateCustomization = async (data) => {
    let id = toast.loading("Please Wait, Updating Customization...");
    let response = await PatchRequest(
      `${BaseUrlPath}/api/customization/${organization.customization.id}/`,
      data,
      getBearerToken,
      updateCustomizationSuccess,
      id
    );
    response && setCustomizations(response.data);
  };

  const data = {
    customization,
    organization,
    users,
    getOrganization,
    postOrganization,
    updateCustomization,
    getOrganizationUsers,
    createOrganizationUser,
    updateOrganization,
    removeOrganizationUser,
    departments,
    getDepartments,
    createDepartment,
  };
  return (
    <OrganizationContext.Provider value={data}>
      {children}
    </OrganizationContext.Provider>
  );
};
export default OrganizationProvider;
