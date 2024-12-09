/* eslint-disable react-hooks/exhaustive-deps */
/**Dashboard Page */
import AvailableLeave from "../../components/dashboard/AvailableLeaves";
import TimeTracker from "../../components/dashboard/TimeTracker";
import Broadcast from "../../components/dashboard/Broadcast";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../context/Contexts";
const Dashboard = () => {
  const { getAvailableLeaves, getBroadCastMessages } =
    useContext(DashboardContext);
  useEffect(() => {
    getAvailableLeaves();
    getBroadCastMessages();
  }, []);
  return (
    <>
      <div className="py-5 grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <AvailableLeave />
          <Broadcast />
        </div>
        <TimeTracker />
      </div>
    </>
  );
};

export default Dashboard;
