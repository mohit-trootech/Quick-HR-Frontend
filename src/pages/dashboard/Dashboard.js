/* eslint-disable react-hooks/exhaustive-deps */
/**Dashboard Page */
/**Dasboard Components */
import AvailableLeave from "../../components/dashboard/AvailableLeaves";
import TimeTracker from "../../components/dashboard/TimeTracker";
import Broadcast from "../../components/dashboard/Broadcast";
import Sidebar from "../../components/Sidebar";
import Preloader from "../../components/Preloader";
/**Dashboard Hooks */
import { useContext, useEffect } from "react";
/**Dashboard Contexts */
import { DashboardContext, PreloadContext } from "../../context/Contexts";

const Dashboard = () => {
  const {
    availableLeaves,
    getAvailableLeaves,
    broadcastMessages,
    getBroadCastMessages,
  } = useContext(DashboardContext);
  const { preload } = useContext(PreloadContext);
  useEffect(() => {
    availableLeaves || getAvailableLeaves();
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
            <div className="py-5 grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <AvailableLeave />
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
