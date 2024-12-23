/* eslint-disable react-hooks/exhaustive-deps */
/**Dashboard Page */
/**Dasboard Components */
import AvailableLeaves from "../../cards/dashboard/AvailableLeaves";
import TimeTracker from "../../components/dashboard/TimeTracker";
import Broadcast from "../../cards/dashboard/Broadcast";
import Sidebar from "../../components/Sidebar";
import Preloader from "../../components/Preloader";
/**Dashboard Hooks */
import { useContext, useEffect } from "react";
/**Dashboard Contexts */
import { DashboardContext, PreloadContext } from "../../context/Contexts";
import SidenavDrawer from "../../components/SidenavDrawer";
import { BiHomeAlt } from "react-icons/bi";

const Dashboard = () => {
  const { broadcastMessages, getBroadCastMessages } =
    useContext(DashboardContext);
  const { preload } = useContext(PreloadContext);
  useEffect(() => {
    broadcastMessages || getBroadCastMessages();
  }, []);

  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-9 lg:col-span-7 mx-3">
            {/* Breadcrumb */}
            <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold hidden lg:block">
                Leaves Management
              </span>
              <div className="breadcrumbs text-sm flex flex-row items-center justify-start gap-2">
                <SidenavDrawer />
                <ul>
                  <li>
                    <BiHomeAlt /> Dashboard
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-5 md:grid md:grid-cols-3 gap-4 flex flex-col">
              <div className="flex flex-col gap-2">
                <AvailableLeaves />
                <Broadcast />
              </div>
              <TimeTracker />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
