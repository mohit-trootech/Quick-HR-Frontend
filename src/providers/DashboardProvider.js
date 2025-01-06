/**Dashboard Provider */
import React, { useState, useContext } from "react";
/**Contexts */
import {
  DashboardContext,
  PreloadContext,
  PaginationContext,
} from "../context/Contexts";
/**Utils Functions & Constants */
import { GetRequest, PostRequest } from "../utils/AxiosRequest";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import { createBroadCastMessageSuccess } from "../utils/handleResponses";
import { toast } from "react-toastify";
const DashboardProvider = ({ children }) => {
  /**Dashboard States */
  const { updatePreloader } = useContext(PreloadContext);
  const { setPrevious, setNext, setCount } = useContext(PaginationContext);
  const [broadCastMessages, setBroadCastMessages] = useState(null);

  /**BroadCast Messages */
  const getBroadCastMessages = async (query_params) => {
    const response = await GetRequest(
      `${BaseUrlPath}/api/broadcasts/${query_params || ""}`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setBroadCastMessages(response.data.results);
    response && setPrevious(response.data.previous);
    response && setNext(response.data.next);
    response && setCount(response.data.count);
  };
  const createBroadCastMessage = async (data) => {
    let id = toast.loading("Creating Broadcast Message...");
    const response = await PostRequest(
      BaseUrlPath + "/api/broadcasts/",
      data,
      getBearerToken,
      createBroadCastMessageSuccess,
      id,
      null
    );
    if (broadCastMessages) {
      response && setBroadCastMessages([response.data, ...broadCastMessages]);
    } else {
      response && setBroadCastMessages([response.data]);
    }
  };
  const data = {
    broadCastMessages,
    getBroadCastMessages,
    createBroadCastMessage,
  };

  return (
    <DashboardContext.Provider value={data}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
