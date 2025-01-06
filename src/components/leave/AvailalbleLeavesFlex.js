/**Available Leaves Flex */

import {
  MdEmergency,
  MdMoney,
  MdOutlinePending,
  MdSurfing,
} from "react-icons/md";

const AvailableLeavesFlex = ({ availableLeave }) => {
  return (
    <>
      <div className="flex p-3 justify-around w-full gap-x-3">
        <div className="card static border w-full hover:shadow-xl hover:border transition duration-300">
          <div className="card-body p-3 flex flex-row gap-x-3 items-center">
            <MdSurfing className="h-4 w-4" />
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500">Casual Leaves</span>
              <span>
                {(availableLeave && availableLeave.casual_leaves) || 0}
              </span>
            </div>
          </div>
        </div>
        <div className="card static border w-full hover:shadow-xl hover:border transition duration-300">
          <div className="card-body p-3 flex flex-row gap-x-3 items-center">
            <MdEmergency className="h-4 w-4" />
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500">Emergency Leaves</span>
              <span>
                {(availableLeave && availableLeave.emergency_leaves) || 0}
              </span>
            </div>
          </div>
        </div>
        <div className="card sticky border w-full hover:shadow-xl hover:border transition duration-300">
          <div className="card-body p-3 flex flex-row gap-x-3 items-center">
            <MdOutlinePending className="h-4 w-4" />
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500">Pending Leaves</span>
              <span>
                {(availableLeave && availableLeave.pending_leaves) || 0}
              </span>
            </div>
          </div>
        </div>
        <div className="card sticky border w-full hover:shadow-xl hover:border transition duration-300">
          <div className="card-body p-3 flex flex-row gap-x-3 items-center">
            <MdMoney className="h-4 w-4" />
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500">Encashment Leaves</span>
              <span>
                {(availableLeave && availableLeave.encashment_leaves) || 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AvailableLeavesFlex;
