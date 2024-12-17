/**Dashboard Provider */
import React, { useState, useContext } from "react";
/**Contexts */
import {
  DashboardContext,
  PreloadContext,
  PaginationContext,
} from "../context/Contexts";
/**Utils Functions & Constants */
import { GetRequest } from "../utils/AxiosRequest";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
const DashboardProvider = ({ children }) => {
  /**Dashboard States */
  const { updatePreloader } = useContext(PreloadContext);
  const { setPrevious, setNext, setCount } = useContext(PaginationContext);
  const [availableLeave, setAvailableLeave] = useState(null);
  const [broadCastMessages, setBroadCastMessages] = useState(null);
  /**Available Leaves GET Request */
  const getAvailableLeaves = async () => {
    const response = await GetRequest(
      `${BaseUrlPath}/api/leaves/available-leave/`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setAvailableLeave(response.data);
  };
  /**BroadCast Messages */
  const getBroadCastMessages = async () => {
    const response = await GetRequest(
      BaseUrlPath + "/api/broadcasts/",
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setBroadCastMessages(response.data);
    response && setPrevious(response.data.previous);
    response && setNext(response.data.next);
    response && setCount(response.data.count);
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
