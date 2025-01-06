/**Device Provider */
import { DeviceContext } from "../context/Contexts";
import { useState, useContext } from "react";
import { PaginationContext, PreloadContext } from "../context/Contexts";
import { GetRequest, PostRequest, PatchRequest } from "../utils/AxiosRequest";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";

const DeviceProvider = ({ children }) => {
  const { setPrevious, setNext, setCount } = useContext(PaginationContext);
  const { updatePreloader } = useContext(PreloadContext);
  const [devices, setDevices] = useState(null);
  const [myDevices, setMyDevices] = useState(null);
  const getMyDevices = async (query_params) => {
    let response = await GetRequest(
      `${BaseUrlPath}/api/devices/my_devices/${query_params || ""}`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setMyDevices(response.data);
  };

  const getDevices = async (query_params) => {
    let response = await GetRequest(
      `${BaseUrlPath}/api/devices/${query_params || ""}`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setDevices(response.data.results);
    response && setPrevious(response.data.previous);
    response && setNext(response.data.next);
    response && setCount(response.data.count);
  };
  const createDevice = async (data) => {
    let response = await PostRequest(
      `${BaseUrlPath}/api/devices/`,
      data,
      getBearerToken,
      null,
      null
    );
    if (devices) {
      response && setDevices([response.data, ...devices]);
    } else {
      response && setDevices([response.data]);
    }
  };
  const updateDevice = async (id, data, query_params) => {
    let response = await PatchRequest(
      `${BaseUrlPath}/api/devices/${id}/${query_params || ""}`,
      data,
      getBearerToken,
      null,
      null
    );
    if (response) {
      setDevices(
        devices.map((device) => {
          return device.id === response.data.id ? response.data : device;
        })
      );
      if (response.data.acquired_by) {
        setMyDevices([response.data, ...myDevices]);
      } else {
        setMyDevices(
          myDevices.filter((device) => device.id !== response.data.id)
        );
      }
    }
  };
  const data = {
    devices,
    getDevices,
    createDevice,
    updateDevice,
    myDevices,
    getMyDevices,
  };
  return (
    <DeviceContext.Provider value={data}>{children}</DeviceContext.Provider>
  );
};
export default DeviceProvider;
