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
    response && setAvailableLeave(response.data);
  };
  /**BroadCast Messages */
  const [broadCastMessages, setBroadCastMessages] = useState(null);
  const getBroadCastMessages = async () => {
    const response = await GetRequest(
      BaseUrlPath + "/api/broadcasts/",
      getBearerToken
    );
    response && setBroadCastMessages(response.data);
  };
  /**Project Select */
  const [projects, setProjects] = useState(null);
  const getProjects = async (url) => {
    const response = await GetRequest(
      BaseUrlPath + "/api/projects/project/" + url,
      getBearerToken
    );
    response && setProjects(response.data);
  };
  /**Task Select */
  const [tasks, setTasks] = useState(null);
  const getTasks = async (url) => {
    const response = await GetRequest(
      BaseUrlPath + "/api/projects/project/" + url,
      getBearerToken
    );
    response && setTasks(response.data);
  };
  const data = {
    availableLeave,
    getAvailableLeaves,
    broadCastMessages,
    getBroadCastMessages,
    projects,
    getProjects,
    tasks,
    getTasks,
  };

  return (
    <DashboardContext.Provider value={data}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
