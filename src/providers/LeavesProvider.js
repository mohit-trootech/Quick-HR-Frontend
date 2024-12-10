/**Leaves Provider */

import React, { useState } from "react";
import { LeavesContext } from "../context/Contexts";
import { GetRequest, PostRequest } from "../utils/AxiosRequest";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import { toast } from "react-toastify";
import { newLeaveCreated } from "../utils/handleResponses";
const LeavesProvider = ({ children }) => {
  /**Leaves Provider Context */
  const [leaves, setLeaves] = useState(null);
  const [availableLeave, setAvailableLeave] = useState(null);
  /**Get Available Leaves */
  const getAvailableLeave = async (url) => {
    const response = await GetRequest(
      BaseUrlPath + "/api/leaves/available/" + url,
      getBearerToken
    );
    setAvailableLeave(response.data);
  };
  /**Get Leave Details */
  const getLeaves = async (url) => {
    const response = await GetRequest(
      BaseUrlPath + "/api/leaves/list/" + url,
      getBearerToken
    );
    setLeaves(response.data.results);
  };
  /**Create New Leave */
  const createLeave = async (data) => {
    let id = toast.loading("Please Wait, Creating Leave...");
    const response = await PostRequest(
      BaseUrlPath + "/api/leaves/list/",
      data,
      getBearerToken,
      newLeaveCreated,
      id
    );
    if (response && response.status === 201) {
      setLeaves([response.data, ...leaves]);
    }
  };

  const data = {
    leaves,
    getLeaves,
    getAvailableLeave,
    availableLeave,
    createLeave,
  };
  return (
    <LeavesContext.Provider value={data}>{children}</LeavesContext.Provider>
  );
};

export default LeavesProvider;
