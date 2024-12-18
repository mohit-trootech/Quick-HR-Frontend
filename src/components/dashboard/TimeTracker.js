/* eslint-disable react-hooks/rules-of-hooks */
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
import { IoMdCloseCircle, IoMdPause, IoMdPlayCircle } from "react-icons/io";
import { MdOutlineFreeBreakfast } from "react-icons/md";
/**Contexts */
import { ProjectsContext, AuthContext } from "../../context/Contexts";

const TimeTracker = () => {
  /**User Occupied Devices Component using DaisyUI and Tailwind CSS */
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { auth } = useContext(AuthContext);
  const {
    duration,
    setDuration,
    getProjects,
    projects,
    getTasks,
    tasks,
    createActivity,
    activity,
    updateActivity,
    getLastUserActivity,
  } = useContext(ProjectsContext);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(Math.floor(duration % 60));
      setMinutes(Math.floor((duration / 60) % 60));
      setHours(Math.floor(duration / 3600));
      if (activity && activity.activity_type === "start") {
        setDuration(duration + 1);
        setSeconds((seconds) => seconds + 1);
        if (seconds === 59) {
          setMinutes((minutes) => minutes + 1);
          setSeconds(0);
        }
        if (minutes === 59) {
          setHours((hours) => hours + 1);
          setMinutes(0);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes, hours, activity]);

  useEffect(() => {
    activity || getLastUserActivity();
    projects || getProjects("");
  }, [activity, auth]);

  const handleSubmit = (event) => {
    /**Handle Task Create Form Submit */
    event.preventDefault();
    createActivity(new FormData(event.target));
  };

  const handleChange = (event) => {
    event.preventDefault();
    getTasks(`&project=${event.target.value}`);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(
      `${event.target.getAttribute("data-activity")}/`,
      event.target.id
    );
    updateActivity(
      `${event.target.getAttribute("data-activity")}/`,
      event.target.id
    );
  };
  return (
    <>
      <div className="w-full">
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
                disabled={disabled}
                data-tip="Please select a Project first."
                className="btn btn-xs btn-primary"
              >
                Create Task
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
                    defaultselected={
                      (activity && activity.project.id) || "DEFAULT"
                    }
                    disabled={(activity && true) || false}
                    onChange={(event) => {
                      handleChange(event);
                      projects && projects.length && setDisabled(false);
                    }}
                    className="input input-bordered w-full input-sm outline-none"
                  >
                    {(projects && projects.length && (
                      <ProjectDataList data={projects} />
                    )) || (
                      <option title="Please create some projects first.">
                        No Projects Available
                      </option>
                    )}
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
                    defaultValue={(activity && activity.task.id) || "DEFAULT"}
                    onChange={() =>
                      tasks && tasks.length && setBtnDisabled(false)
                    }
                    className="input input-bordered w-full input-sm outline-none"
                  >
                    {(activity && (
                      <option value={activity.task.id}>
                        {activity.task.title}
                      </option>
                    )) || (
                      <option disabled value={"DEFAULT"}>
                        Choose Project to Continue
                      </option>
                    )}
                    {(tasks && tasks.length && (
                      <TaskDataList data={tasks} />
                    )) || (
                      <option title="Please create some tasks first.">
                        No Tasks Available
                      </option>
                    )}
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
            <div className="flex flex-col justify-center gap-2 items-center border rounded-md bg-base-300 px-3 py-5">
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
                <span className="countdown font-bold tracking-wide text-5xl">
                  <span style={{ "--value": hours || 0 }}></span>:
                  <span style={{ "--value": minutes || 0 }}></span>:
                  <span style={{ "--value": seconds || 0 }}></span>
                </span>
              </div>
              {/* Task Actions */}
              <div className="flex flex-row join justify-center items-center w-full">
                {activity && activity.activity_type === "pause" ? (
                  <button
                    id="start"
                    onClick={handleClick}
                    disabled={activity ? false : true}
                    data-activity={activity && activity.id}
                    className="join-item w-1/2 btn transition-all duration-300 btn-success text-lg p-0"
                  >
                    Start
                    <IoMdPlayCircle />
                  </button>
                ) : (
                  <button
                    id="pause"
                    onClick={handleClick}
                    disabled={activity ? false : true}
                    data-activity={activity && activity.id}
                    className="join-item w-1/2 btn transition-all duration-300 btn-success text-lg p-0"
                  >
                    Pause
                    <IoMdPause />
                  </button>
                )}
                <button
                  id="stop"
                  onClick={handleClick}
                  disabled={activity ? false : true}
                  data-activity={activity && activity.id}
                  className="join-item w-1/2 btn transition-all duration-300 btn-error text-lg p-0"
                >
                  Stop
                  <IoMdCloseCircle />
                </button>
              </div>
              <button
                disabled={activity ? true : false}
                className="btn btn-warning w-full text-lg p-0"
              >
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
