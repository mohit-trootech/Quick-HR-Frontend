/**Authenticated User Provider */

import React, { useState } from "react";
import { getBearerToken, isUserInOrganization } from "../utils/utils";
import { AuthContext } from "../context/Contexts";
import { BaseUrlPath, IGNORE_URL_PATHS } from "../utils/contants";
import { GetRequest } from "../utils/AxiosRequest";
const AuthProvider = ({ children }) => {
  /**Authenticated User Provider Context */
  const [auth, setAuth] = useState(null);
  const getAuthenticatedUser = async () => {
    if (!IGNORE_URL_PATHS.includes(window.location.pathname)) {
      const response = await GetRequest(
        BaseUrlPath + "/accounts/logged-in-user/",
        getBearerToken,
        null,
        null
      );
      response && isUserInOrganization(response.data);
      response && setAuth(response.data);
    }
  };
  const data = {
    auth,
    getAuthenticatedUser,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
