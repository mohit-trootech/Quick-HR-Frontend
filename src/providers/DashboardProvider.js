/**Dashboard Provider */
import React, { useState } from "react";
import { DashboardContext } from "../context/Contexts";
import { GetRequest } from "../utils/AxiosRequest";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
const DashboardProvider = ({ children }) => {
  /**Dashboard Provider Context */
  const [availableLeave, setAvailableLeave] = useState(null);
  /**Available Leaves GET Request */
  const getAvailableLeaves = async () => {
    const response = await GetRequest(
      BaseUrlPath + "/api/leaves/available/",
      getBearerToken
    );
    setAvailableLeave(response.data);
  };
  /**BroadCast Messages */
  const [broadCastMessages, setBroadCastMessages] = useState(null);
  const getBroadCastMessages = async () => {
    const response = await GetRequest(
      BaseUrlPath + "/api/broadcasts/",
      getBearerToken
    );
    setBroadCastMessages(response.data);
  };

  const data = {
    availableLeave,
    getAvailableLeaves,
    broadCastMessages,
    getBroadCastMessages,
  };

  return (
    <DashboardContext.Provider value={data}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
