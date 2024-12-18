/**Project Provider */
/**React Hooks */
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
/**Contexts */
import {
  ProjectsContext,
  PreloadContext,
  PaginationContext,
  AuthContext,
} from "../context/Contexts";
/**Utils Functions & Constants */
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import {
  createTaskSuccess,
  createTimeSheetEntrySuccess,
} from "../utils/handleResponses";
import { GetRequest, PostRequest } from "../utils/AxiosRequest";

const ProjectProvider = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const [projects, setProjects] = useState(null);
  const [tasks, setTasks] = useState(null);
  const { updatePreloader } = useContext(PreloadContext);
  const { setPrevious, setNext, setCount } = useContext(PaginationContext);

  const getProjects = async (query_params) => {
    /**Get Projects API Call */
    if (auth) {
      const response = await GetRequest(
        `${BaseUrlPath}/api/projects/project/?user=${auth.id}${query_params}`,
        getBearerToken,
        null,
        null,
        updatePreloader
      );
      response && setProjects(response.data.results);
      response && setPrevious(response.data.previous);
      response && setNext(response.data.next);
      response && setCount(response.data.count);
    }
  };
  const getTasks = async (query_params) => {
    /**Get Tasks API Call */
    const response = await GetRequest(
      `${BaseUrlPath}/api/projects/task/?${query_params}`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setTasks(response.data.results);
    response && setPrevious(response.data.previous);
    response && setNext(response.data.next);
    response && setCount(response.data.count);
  };

  const createTask = async (data) => {
    /**Create Task API Call */
    let id = toast.loading("Please Wait, Creating Task...");
    const response = await PostRequest(
      BaseUrlPath + "/api/projects/task/",
      data,
      getBearerToken,
      createTaskSuccess,
      id,
      updatePreloader
    );
    response && setTasks([...tasks, response.data]);
  };

  const createTimeSheetEntry = async (data) => {
    /**Create Time Sheet Entry API Call */
    let id = toast.loading("Please Wait, Creating TimeSheet Entry...");
    const response = await PostRequest(
      BaseUrlPath + "/api/projects/timesheet/",
      data,
      getBearerToken,
      createTimeSheetEntrySuccess,
      id,
      updatePreloader
    );
    response && console.log(response);
  };

  const userTaskProgress = () => {
    /**Get User Task Progress API Call */
    if (auth) {
      const response = GetRequest(
        `${BaseUrlPath}/api/projects/timesheet/${auth.id}/`,
        getBearerToken,
        null,
        null,
        updatePreloader
      );
      response && console.log(response);
    }
  };
  const data = {
    projects,
    getProjects,
    tasks,
    getTasks,
    createTask,
    createTimeSheetEntry,
    userTaskProgress,
  };
  return (
    <ProjectsContext.Provider value={data}>{children}</ProjectsContext.Provider>
  );
};

export default ProjectProvider;
