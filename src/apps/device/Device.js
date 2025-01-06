/* eslint-disable */
/* Device Js Component */
import { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  PaginationContext,
  PreloadContext,
  DeviceContext,
} from "../../context/Contexts";
import Preloader from "../../components/Preloader";
import Sidebar from "../../components/Sidebar";
import SidenavDrawer from "../../components/SidenavDrawer";
import { Link } from "react-router-dom";
import { BiHomeAlt, BiInfoCircle, BiMobileAlt } from "react-icons/bi";
import DeviceCard from "../../components/device/DeviceCard";
import CreateDevice from "../../modals/device/CreateDevice";
import EditDeviceForm from "../../components/device/EditDeviceForm";
const Device = () => {
  const { auth } = useContext(AuthContext);
  const { preload } = useContext(PreloadContext);
  const { previous, next, count } = useContext(PaginationContext);
  const { devices, getDevices, myDevices, getMyDevices } =
    useContext(DeviceContext);
  const [toggle, setToggle] = useState(false);
  const [currentDevice, setCurrentDevice] = useState(null);
  useEffect(() => {
    devices || getDevices();
    myDevices || getMyDevices();
  }, [auth]);
  const handleChange = (e) => {
    getDevices(`?search=${e.target.value}`);
  };
  return (
    <>
      {(preload && <Preloader />) || (
        <>
          <div className="grid grid-cols-9 gap-2">
            <div className="hidden lg:block lg:col-span-2">
              <Sidebar />
            </div>
            <div className="col-span-9 lg:col-span-7 mx-3">
              <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
                <span className="text-xl font-semibold hidden lg:block">
                  Devices
                </span>
                <div className="breadcrumbs text-sm flex flex-row items-center justify-start gap-2">
                  <SidenavDrawer />
                  <ul>
                    <li>
                      <Link to="/">
                        <BiHomeAlt /> Dashboard
                      </Link>
                    </li>
                    <li>
                      <BiMobileAlt />
                      Devices
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 justify-between items-center my-3">
                <input
                  type="text"
                  placeholder="Type here"
                  onChange={handleChange}
                  className="input input-sm input-bordered w-full max-w-xs"
                />
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() =>
                    document.getElementById("create_device_modal").showModal()
                  }
                >
                  Add Device
                </button>
                <CreateDevice />
              </div>
              <div className="flex flex-row justify-center join">
                <button
                  onClick={() => setToggle(true)}
                  className={
                    (toggle && "join-item btn btn-sm btn-accent") ||
                    "join-item btn btn-sm "
                  }
                >
                  My Devices
                </button>
                <button
                  onClick={() => setToggle(false)}
                  className={
                    (!toggle && "join-item btn btn-sm btn-accent") ||
                    "join-item btn btn-sm "
                  }
                >
                  Available Devices
                </button>
              </div>
              <div className="flex flex-wrap gap-3 items-start drawer my-5">
                {(toggle && myDevices && (
                  <>
                    {myDevices.map((device) => (
                      <DeviceCard
                        key={device.id}
                        device={device}
                        setCurrentDevice={setCurrentDevice}
                      />
                    ))}
                    <input
                      id="device_edit_drawer"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-side">
                      <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                      ></label>
                      <EditDeviceForm current={currentDevice} />
                    </div>
                  </>
                )) ||
                  (!toggle && devices && count && (
                    <>
                      {devices.map((device) => (
                        <DeviceCard
                          key={device.id}
                          device={device}
                          setCurrentDevice={setCurrentDevice}
                        />
                      ))}
                      <input
                        id="device_edit_drawer"
                        type="checkbox"
                        className="drawer-toggle"
                      />
                      <div className="drawer-side">
                        <label
                          htmlFor="my-drawer"
                          aria-label="close sidebar"
                          className="drawer-overlay"
                        ></label>
                        <EditDeviceForm current={currentDevice} />
                      </div>
                    </>
                  )) || (
                    <>
                      <div className="alert">
                        <BiInfoCircle />
                        <span>No Devices are Avilable</span>
                      </div>
                    </>
                  )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Device;
