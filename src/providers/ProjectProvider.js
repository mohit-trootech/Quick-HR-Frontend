/**Project Provider */
/**React Hooks */
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
/**Contexts */
import {
  ProjectsContext,
  PreloadContext,
  PaginationContext,
} from "../context/Contexts";
/**Utils Functions & Constants */
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import {
  createTaskSuccess,
  createActivitySuccess,
  createProjectSuccess,
} from "../utils/handleResponses";
import { GetRequest, PatchRequest, PostRequest } from "../utils/AxiosRequest";

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [activity, setActivity] = useState(null);
  const [activities, setActivities] = useState(null);
  const [duration, setDuration] = useState(0);
  const { updatePreloader } = useContext(PreloadContext);
  const { setPrevious, setNext, setCount } = useContext(PaginationContext);

  const getProjects = async (query_params) => {
    /**Get Projects API Call */
    const response = await GetRequest(
      `${BaseUrlPath}/api/projects/project/list_users_assigned_projects/${
        query_params || ""
      }`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setProjects(response.data.results);
    response && setPrevious(response.data.previous);
    response && setNext(response.data.next);
    response && setCount(response.data.count);
  };
  const createProject = async (data) => {
    /**Create Project API Call */
    let id = toast.loading("Please Wait, Creating Project...");
    const response = await PostRequest(
      BaseUrlPath + "/api/projects/project/",
      data,
      getBearerToken,
      createProjectSuccess,
      id,
      updatePreloader
    );
    response && console.log(response.data);
    response && setProjects([response.data, ...projects]);
  };
  const getTasks = async (query_params) => {
    /**Get Tasks API Call */
    const response = await GetRequest(
      `${BaseUrlPath}/api/projects/task/?${query_params || ""}`,
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
    (response && tasks && setTasks([...tasks, response.data])) ||
      (response && setTasks([response.data]));
  };

  const getActivities = async (query_params) => {
    /**Get Activities API Call */
    const response = await GetRequest(
      `${BaseUrlPath}/api/projects/activity/?${query_params || ""}`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setActivities(response.data.results);
    response && setPrevious(response.data.previous);
    response && setNext(response.data.next);
    response && setCount(response.data.count);
  };
  const getLastUserActivity = async () => {
    /**Get Last User Activity API Call */
    const response = await GetRequest(
      `${BaseUrlPath}/api/projects/activity/last_user_activity/`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && response.data && setActivity(response.data);
    response && setDuration(response.data.duration);
  };
  const createActivity = async (data) => {
    /**Create Activity API Call */
    let id = toast.loading("Please Wait, Creating Activity...");
    const response = await PostRequest(
      BaseUrlPath + "/api/projects/activity/",
      data,
      getBearerToken,
      createActivitySuccess,
      id,
      updatePreloader
    );
    response && setActivity(response.data);
    response && setDuration(response.data.duration);
  };

  const updateActivity = async (url, activity_type) => {
    /**Update Activity API Call */
    const response = await PatchRequest(
      `${BaseUrlPath}/api/projects/activity/${url}`,
      { activity_type, duration },
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    if (activity_type === "stop") {
      response && setActivity(null);
    } else {
      response && setActivity(response.data);
      response && setDuration(response.data.duration);
    }
  };
  const data = {
    tasks,
    projects,
    activity,
    getTasks,
    createTask,
    getProjects,
    createActivity,
    updateActivity,
    getLastUserActivity,
    duration,
    setDuration,
    activities,
    getActivities,
    createProject,
  };
  return (
    <ProjectsContext.Provider value={data}>{children}</ProjectsContext.Provider>
  );
};

export default ProjectProvider;
