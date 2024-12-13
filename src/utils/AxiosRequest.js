/**Handle Common Axios Request */
import axios from "axios";
import { ExceptionHandling } from "./ToastMessage";
import { LogOut } from "./LogOut";
const AxiosRequest = async (url, method, data, header, callBack, id) => {
  let headers = {
    "Content-Type": "multipart/form-data",
  };
  if (header) {
    headers["Authorization"] = header();
  }
  headers["Accept"] = "application/json";
  try {
    let response = await axios({
      method: method,
      url: url,
      data: data,
      headers: headers,
    });
    if (callBack) {
      callBack(response.data, id);
    }
    return response;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
      LogOut();
    } else {
      ExceptionHandling(id, error);
    }
  }
};

/**Get Request */
export const GetRequest = async (url, header, callback, toast) => {
  /**Common Get Request Handling */
  return await AxiosRequest(url, "GET", null, header, callback, toast);
};

/**Post Request */
export const PostRequest = async (url, data, header, callback, toast) => {
  /**Common Get Request Handling */
  return await AxiosRequest(url, "POST", data, header, callback, toast);
};

/**Patch Request */
export const PatchRequest = async (url, data, header, callback, toast) => {
  /**Common Patch Request Handling */
  return await AxiosRequest(url, "PATCH", data, header, callback, toast);
};

/**Delete Request */
export const DeleteRequest = async (url, header, callback, toast) => {
  /**Common Delete Request Handling */
  return await AxiosRequest(url, "DELETE", null, header, callback, toast);
};
