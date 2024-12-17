/* eslint-disable react-hooks/exhaustive-deps */
/**Dashboard User Devices */
/**React Hooks */
import { useContext, useEffect, useState } from "react";
/**Components */
import ProjectDataList from "../../datalists/ProjectDataList";
import TaskDataList from "../../datalists/TaskDataList";
import CreateNewTask from "../../modals/CreateNewTask";
/**Icons */
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import { IoMdCloseCircle, IoMdPlayCircle } from "react-icons/io";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
/**Contexts */
import { ProjectsContext, AuthContext } from "../../context/Contexts";

const TimeTracker = () => {
  /**User Occupied Devices Component using DaisyUI and Tailwind CSS */
  const [disabled, setDisabled] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { auth } = useContext(AuthContext);
  const {
    getProjects,
    projects,
    getTasks,
    tasks,
    createTimeSheetEntry,
    userTaskProgress,
  } = useContext(ProjectsContext);
  useEffect(() => {
    auth && userTaskProgress();
  }, [auth]);
  useEffect(() => {
    projects || getProjects("");
    tasks || getTasks("");
  }, []);

  const handleSubmit = (event) => {
    /**Handle Task Create Form Submit */
    event.preventDefault();
    createTimeSheetEntry(new FormData(event.target));
  };

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   if (event.target.name === "project") {
  //     getProjects(`?search=${event.target.value}`);
  //   } else if (event.target.name === "task")
  //     getTasks(`?search=${event.target.value}`);
  // };
  return (
    <>
      <div className="col-span-2">
        <div className="card static bg-base-100 shadow-md transition duration-250 hover:shadow-xl w-full">
          <div className="card-body z-[99] gap-y-5">
            {/* Cards Header */}
            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-x-2 items-center">
                <h2 className="card-title capitalize">Task Management</h2>
                <span>
                  <BsArrowDownLeftCircleFill className="hover:text-primary hover:rotate-180 transition duration-200" />
                </span>
              </div>
              <button
                onClick={() =>
                  document.getElementById("create_new_task").showModal()
                }
                className="btn btn-xs btn-primary"
              >
                Start Task
              </button>
              <CreateNewTask />
            </div>
            {/* Cards Input Boxes */}
            <form
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-4"
            >
              <div className="flex gap-x-4 justify-around items-center">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Choose a Project</span>
                  </div>

                  <select
                    name="project"
                    required
                    defaultValue={"DEFAULT"}
                    onChange={() => setDisabled(false)}
                    className="input input-bordered w-full input-sm outline-none"
                  >
                    <option disabled value={"DEFAULT"}>
                      Choose Project to Continue
                    </option>
                    <ProjectDataList data={projects} />
                  </select>
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Choose a Task</span>
                  </div>
                  <select
                    name="task"
                    required
                    disabled={disabled}
                    defaultValue={"DEFAULT"}
                    onChange={() => setBtnDisabled(false)}
                    className="input input-bordered w-full input-sm outline-none"
                  >
                    <option disabled value={"DEFAULT"}>
                      Choose Task to Continue
                    </option>
                    <TaskDataList data={tasks} />
                  </select>
                </label>
              </div>
              <div className={"flex justify-end"}>
                <button
                  type="submit"
                  className="btn btn-sm btn-primary"
                  disabled={btnDisabled}
                >
                  Start Task
                </button>
              </div>
            </form>
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
