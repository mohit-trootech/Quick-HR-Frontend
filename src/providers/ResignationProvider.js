/**Resignation Provider */

import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import {
  ResignationContext,
  PreloadContext,
  PaginationContext,
} from "../context/Contexts";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import { GetRequest, PostRequest } from "../utils/AxiosRequest";
import { newResignationCreated } from "../utils/handleResponses";

const ResignationProvider = ({ children }) => {
  const [resignations, setResignations] = useState(null);
  const { updatePreloader } = useContext(PreloadContext);
  const { setPrevious, setNext, setCount } = useContext(PaginationContext);

  const getResignations = async (query_params) => {
    const response = await GetRequest(
      `${BaseUrlPath}/api/resignation/?${query_params || ""}`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setResignations(response.data.results);
    response && setPrevious(response.data.previous);
    response && setNext(response.data.next);
    response && setCount(response.data.count);
  };

  const createResignation = async (data) => {
    let id = toast.loading("Please Wait, Creating Resignation...");
    const response = await PostRequest(
      BaseUrlPath + "/api/resignations/",
      data,
      getBearerToken,
      newResignationCreated,
      id,
      updatePreloader
    );
    response && setResignations([response.data, ...resignations]);
  };

  const data = {
    resignations,
    getResignations,
    createResignation,
  };
  return (
    <ResignationContext.Provider value={data}>
      {children}
    </ResignationContext.Provider>
  );
};

export default ResignationProvider;
