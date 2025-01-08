/* eslint-disable */
/**Create Project Modal */
import { useState } from "react";
import RichText from "../../components/RichText";
import { MdHelp } from "react-icons/md";
import { useContext, useEffect } from "react";
import { ProjectsContext, UserContext } from "../../context/Contexts";
import UserDataList from "../../datalists/UserDataList";
import profile from "../../static/img/no-profile.webp";
import { IoIosCloseCircleOutline } from "react-icons/io";

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
    event.target.id === "users-select" &&
      getUsersList(`?search=${event.target.value}`);
  };
  const handleClick = () => {
    let userSelect = document.querySelector("#users-select");
    let assignedUsersInput = document.querySelector("#assigned_users");
    let assignedUsersView = document.querySelector("#assigned_users_view");
    let assignedUsers = assignedUsersInput.value.split(",");
    if (userSelect.value && usersList) {
      let user = usersList.find(
        (user) => user.user.username === userSelect.value
      );
      if (user && !assignedUsers.includes(String(user.user.id))) {
        assignedUsersView.innerHTML += `<div class="capitalize -2 btn">
          <img
                      src=${user.user.image || profile}
                      class="w-6 h-6 rounded-full"
                      alt=""
                    />
                    ${user.user.username}
                    <button type="button" id="remove_user_from_assigned_users" class="btn btn-sm btn-circle btn-ghost">✕</button>
                  </div>`;
        assignedUsersInput.value += `${user.user.id},`;
        userSelect.value = "";
      }
    }
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
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
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
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
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
                <div className="flex flex-col gap-3">
                  <div
                    id="assigned_users_view"
                    className="flex flex-wrap gap-2 w-full border rounded-xl border-gray-300 p-3"
                  ></div>
                  <input
                    type="text"
                    className="hidden"
                    name="assigned_users"
                    id="assigned_users"
                  />
                  <div className="join w-full">
                    <input
                      type="text"
                      id="users-select"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      onChange={handleInputChange}
                      list="assigned_users_list"
                      placeholder="Type here for team lead list..."
                      className="input input-sm input-bordered w-full"
                    />
                    <button
                      type="button"
                      className="btn btn-sm join-item rounded-r-full"
                      onClick={handleClick}
                    >
                      Add User
                    </button>
                  </div>
                </div>
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
