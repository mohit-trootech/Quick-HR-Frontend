/* eslint-disable */
/**Create Project Modal */
import { useState } from "react";
import RichText from "../../components/RichText";
import { MdHelp } from "react-icons/md";
import { useContext, useEffect } from "react";
import { ProjectsContext, UserContext } from "../../context/Contexts";
import UserDataList from "../../datalists/UserDataList";
const CreateProject = () => {
  /**Project create form using DaisyUI modal */
  const { createProject } = useContext(ProjectsContext);
  const [content, setContent] = useState(null);
  const [toggle, setToggle] = useState(false);
  const { projectManagers, usersList, getUsersList, getProjectManagers } =
    useContext(UserContext);
  useEffect(() => {
    projectManagers || getProjectManagers();
    usersList || getUsersList();
  }, []);
  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createProject(new FormData(event.target));
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    event.target.id === "project_manager" &&
      getProjectManagers(`?search=${event.target.value}`);
    event.target.id === "team_lead" &&
      getUsersList(`?search=${event.target.value}`);
  };
  return (
    <>
      <dialog id="create_project_modal" className="modal">
        <div className="modal-box max-w-5xl w-10/12">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create Project</h3>
          <form method="POST" onSubmit={handleSubmit} className="py-4">
            <div className="flex flex-col gap-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">
                    Project Name<sup>*</sup>
                  </span>
                </div>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Add Project Name"
                  className="input input-sm input-bordered"
                />
              </label>
              <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">
                      Deadline<sup>*</sup>
                    </span>
                  </div>
                  <input
                    type="date"
                    name="deadline"
                    required
                    placeholder="Project Deadline"
                    className="input input-sm input-bordered"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">
                      Select Client<sup>*</sup>
                    </span>
                  </div>
                  <select
                    type="text"
                    name="client"
                    required
                    className="input input-sm input-bordered"
                  >
                    <option disabled>Select Client Name</option>
                    <option>Client 1</option>
                    <option>Client 2</option>
                    <option>Client 3</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">
                      Project Manager<sup>*</sup>
                    </span>
                  </div>
                  <input
                    type="text"
                    required
                    onChange={handleInputChange}
                    name="project_manager_id"
                    list="project_manager_list"
                    id="project_manager"
                    placeholder="Type here for project managers list..."
                    className="input input-sm input-bordered"
                  />
                  <datalist id="project_manager_list">
                    <UserDataList data={projectManagers} />
                  </datalist>
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">
                      Team Lead<sup>*</sup>
                    </span>
                  </div>
                  <input
                    type="text"
                    required
                    onChange={handleInputChange}
                    name="team_lead_id"
                    list="team_lead_list"
                    id="team_lead"
                    placeholder="Type here for team lead list..."
                    className="input input-sm input-bordered"
                  />
                  <datalist id="team_lead_list">
                    <UserDataList data={usersList} />
                  </datalist>
                </label>
              </div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">
                    Assigned Users<sup>*</sup>
                  </span>
                </div>
                <input
                  type="text"
                  required
                  multiple={true}
                  onChange={handleInputChange}
                  name="assigned_users"
                  list="assigned_users_list"
                  id="assigned_users"
                  placeholder="Type here for team lead list..."
                  className="input input-sm input-bordered"
                />
                <datalist id="assigned_users_list">
                  <UserDataList data={usersList} />
                </datalist>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <div className="flex justify-start gap-2">
                    <span className="label-text">Enter Description</span>
                    <button type="button">
                      <MdHelp
                        onClick={() => {
                          document.getElementById("markdown_help").showModal();
                        }}
                        className="cursor-help"
                        title="Click For Markdown Formatting Help"
                      />
                    </button>
                  </div>
                  <span
                    className="btn btn-xs label-text-alt"
                    onClick={() => setToggle(!toggle)}
                  >
                    {toggle ? "Edit" : "Preview"}
                  </span>
                </div>
                {(toggle && <RichText content={content} />) || (
                  <textarea
                    required
                    placeholder="Enter Description"
                    onChange={handleChange}
                    name="description"
                    className="textarea textarea-sm h-40 textarea-bordered"
                  >
                    {content}
                  </textarea>
                )}
              </label>
            </div>
            <div className="modal-action">
              <button className="btn btn-sm">Create Project</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default CreateProject;
