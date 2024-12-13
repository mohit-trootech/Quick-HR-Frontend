/**Organization Provider */

import React, { useState } from "react";
import { OrganizationContext } from "../context/Contexts";
import { GetRequest, PostRequest, PatchRequest } from "../utils/AxiosRequest";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import { isOrganizationHead } from "../utils/utils";
import { toast } from "react-toastify";
import { updateCustomizationSuccess } from "../utils/handleResponses";
const OrganizationProvider = ({ children }) => {
  /**Logged In User Data */

  const [userData, setUserData] = useState(null);
  const [organizations, setOrganizations] = useState(null);
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
    const response = await GetRequest(
      `${BaseUrlPath}/api/orgnizations/${userData.username}/${query_params}`,
      getBearerToken
    );
    response && setOrganizations(response.data);
  };

  /**Create a New Organization */
  const postOrganization = async (data) => {
    let response = await PostRequest(
      BaseUrlPath + "/api/organizations/",
      data,
      getBearerToken,
      null,
      null
    );
    console.log(response);
    // response && setOrganizations([response.data]);
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

    response && console.log(response);
  };

  const data = {
    getUserData,
    userData,
    getOrganizations,
    organizations,
    postOrganization,
    updateCustomization,
  };
  return (
    <OrganizationContext.Provider value={data}>
      {children}
    </OrganizationContext.Provider>
  );
};
export default OrganizationProvider;
