/**Dashboard User Devices */
import { useContext } from "react";
import { DashboardContext } from "../../context/Contexts";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import { IoMdCloseCircle, IoMdPlayCircle } from "react-icons/io";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";

const TimeTracker = () => {
  /**User Occupied Devices Component using DaisyUI and Tailwind CSS */
  // const { devices } = useContext(DashboardContext);
  return (
    <>
      <div className="col-span-2">
        <div className="card static bg-base-100 shadow-md transition duration-250 hover:shadow-xl w-full">
          <div className="card-body z-[99] gap-y-5">
            {/* Cards Header */}
            <div className="flex flex-row justify-start gap-x-2 items-center">
              <h2 className="card-title capitalize">Task Management</h2>
              <span>
                <BsArrowDownLeftCircleFill className="hover:text-primary hover:rotate-180 transition duration-200" />
              </span>
            </div>
            {/* Cards Input Boxes */}
            <div className="grid grid-cols-2 gap-2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Choose a Project</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full input-sm outline-none"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Choose a Task</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full input-sm outline-none"
                />
              </label>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center border rounded-md bg-base-200 px-3 py-5">
              {/* Today's Date */}
              <div>
                <button className="btn btn-primary btn-sm">
                  <div className="text-white">
                    {new Date().toDateString("default", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </button>
              </div>
              {/* Tast Clock */}
              <div>
                <span className="countdown font-bold tracking-wide text-6xl">
                  <span style={{ "--value": 0 }}></span>:
                  <span style={{ "--value": 0 }}></span>:
                  <span style={{ "--value": 60 }}></span>
                </span>
              </div>
              {/* Task Actions */}
              <div className="flex flex-row gap-x-3 justify-center items-center">
                <button className="btn btn-wide btn-error btn-sm">
                  Stop
                  <IoMdCloseCircle />
                </button>
                <button className="btn btn-wide btn-warning btn-sm">
                  Pause
                  <IoMdPlayCircle />
                </button>
              </div>
              <button className="btn btn-wide btn-primary btn-sm">
                <AiOutlineProduct />
                Start Task
              </button>
              <button className="btn btn-wide btn-warning btn-sm">
                Start Break
                <MdOutlineFreeBreakfast />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTracker;
