/**Organization Provider */

import React, { useState } from "react";
import { OrganizationContext } from "../context/Contexts";
import { GetRequest, PostRequest } from "../utils/AxiosRequest";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import { isOrganizationHead } from "../utils/utils";
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
    setUserData(response.data);
    isOrganizationHead(response.data);
  };
  /**Retreive User Organization */
  const getOrganizations = async (query_params) => {
    const response = await GetRequest(
      BaseUrlPath + "/api/organizations/" + query_params,
      getBearerToken
    );
    response.data && setOrganizations(response.data.results[0]);
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
    // setOrganizations([response.data]);
  };

  const data = {
    getUserData,
    userData,
    getOrganizations,
    organizations,
    postOrganization,
  };
  return (
    <OrganizationContext.Provider value={data}>
      {children}
    </OrganizationContext.Provider>
  );
};
export default OrganizationProvider;
