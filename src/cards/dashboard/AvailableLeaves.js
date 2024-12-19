/**Available Leave Card */
import { useContext } from "react";
import { DashboardContext } from "../../context/Contexts";
import { GiWaveSurfer } from "react-icons/gi";
import { FaCashRegister } from "react-icons/fa";
import { MdEmergency } from "react-icons/md";
import { GiEmptyHourglass } from "react-icons/gi";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AvailableLeaves = () => {
  /**Available DaisyUI & Tailwind CSS Card */
  const { availableLeave } = useContext(DashboardContext);
  return (
    <>
      {availableLeave && (
        <div className="card static bg-base-100 shadow-md transition duration-250 hover:shadow-xl w-full">
          <div className="card-body">
            <div className="flex flex-row justify-start gap-x-2 items-center">
              <h2 className="card-title capitalize">Available Leaves</h2>
              <Link to="/leaves">
                <BsArrowDownLeftCircleFill className="hover:text-primary hover:rotate-180 transition duration-200" />
              </Link>
            </div>
            <div className="lg:grid lg:grid-cols-2 flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="stat-figure">
                  <div className="p-2 border rounded-full hover:border-secondary duration-200 hover:shadow-inner static">
                    <GiWaveSurfer />
                  </div>
                </div>
                <div className="flex flex-col stat-desc">
                  <div className="text-black">
                    {availableLeave.casual_leaves || 0}
                  </div>
                  <div className="text-zinc-500">Casual</div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="stat-figure">
                  <div className="p-2 border rounded-full hover:border-secondary duration-200 hover:shadow-inner static">
                    <MdEmergency />
                  </div>
                </div>
                <div className="flex flex-col stat-desc">
                  <div className="text-black">
                    {availableLeave.emergency_leaves || 0}
                  </div>
                  <div className="text-zinc-500">Emergency</div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="stat-figure">
                  <div className="p-2 border rounded-full hover:border-secondary duration-200 hover:shadow-inner static">
                    <FaCashRegister />
                  </div>
                </div>
                <div className="flex flex-col stat-desc">
                  <div className="text-black">
                    {availableLeave.encashment_leaves || 0}
                  </div>
                  <div className="text-zinc-500">Encashment</div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="stat-figure">
                  <div className="p-2 border rounded-full hover:border-secondary duration-200 hover:shadow-inner static">
                    <GiEmptyHourglass />
                  </div>
                </div>
                <div className="flex flex-col stat-desc">
                  <div className="text-black">
                    {availableLeave.pending_leaves || 0}
                  </div>
                  <div className="text-zinc-500">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AvailableLeaves;
