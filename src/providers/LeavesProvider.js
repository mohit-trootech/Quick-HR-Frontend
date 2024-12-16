/**Leaves Provider */
/**React Hooks */
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
/**Contexts */
import {
  LeavesContext,
  PreloadContext,
  PaginationContext,
} from "../context/Contexts";
/**Utils Functions & Constants */
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import { newLeaveCreated } from "../utils/handleResponses";
import { GetRequest, PostRequest } from "../utils/AxiosRequest";

const LeavesProvider = ({ children }) => {
  /**Leaves Provider Context */
  const [leaves, setLeaves] = useState(null);
  const [availableLeave, setAvailableLeave] = useState(null);
  const { setPrevious, setNext, setCount } = useContext(PaginationContext);
  const { updatePreloader } = useContext(PreloadContext);
  /**Get Available Leaves */
  const getAvailableLeave = async (url) => {
    const response = await GetRequest(
      BaseUrlPath + "/api/leaves/available/" + url,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setAvailableLeave(response.data);
  };
  /**Get Leave Details */
  const getLeaves = async (url) => {
    const response = await GetRequest(
      BaseUrlPath + "/api/leaves/list/" + url,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setLeaves(response.data.results);
    response && setPrevious(response.data.previous);
    response && setNext(response.data.next);
    response && setCount(response.data.count);
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
    response && setLeaves([response.data, ...leaves]);
  };

  const data = {
    leaves,
    availableLeave,
    getLeaves,
    createLeave,
    getAvailableLeave,
  };
  return (
    <LeavesContext.Provider value={data}>{children}</LeavesContext.Provider>
  );
};

export default LeavesProvider;
