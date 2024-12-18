/**Project Detail Modal */
import profile from "../static/img/no-profile.webp";
import ProjectTimeLine from "../components/ProjectTimeLine";
import { ProjectsContext } from "../context/Contexts";
import { useContext, useEffect } from "react";

const ProjectDetail = ({ project }) => {
  const { activities, getActivities } = useContext(ProjectsContext);
  useEffect(() => {
    activities || getActivities();
  }, []);
  return (
    <>
      <dialog id={`project_details`} className="modal">
        <div className="modal-box max-w-7xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Project Details!</h3>
          {(project && (
            <div className="py-4">
              <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
                <div className="flex flex-col gap-4">
                  <div className="card static bg-base-100 hover:shadow-xl shadow-sm transition-all duration-250 border">
                    <div className="flex flex-col gap-2 p-3">
                      <h2 className="card-title">{project.title}</h2>
                      <p>{project.description || ""}</p>
                      <ul className="menu bg-base-100 rounded-box">
                        <li>
                          <p className="flex flex-row justify-between items-center">
                            <span>Team Leader</span>
                            <button className="btn btn-sm btn-ghost capitalize">
                              {project.team_lead.username}
                              <img
                                src={project.team_lead.image || profile}
                                className="w-6 h-6 rounded-full"
                                alt=""
                              />
                            </button>
                          </p>
                        </li>
                        <li>
                          <p className="flex flex-row justify-between items-center">
                            <span>Project Manager</span>
                            <button className="btn btn-sm btn-ghost capitalize">
                              {project.project_manager.username}
                              <img
                                src={project.project_manager.image || profile}
                                className="w-6 h-6 rounded-full"
                                alt=""
                              />
                            </button>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu bg-base-100 rounded-box hover:shadow-xl shadow-sm transition-all duration-250 border">
                    <li>
                      <div className="flex flex-row items-center justify-between">
                        Assigned Users
                        <div className="avatar-group -space-x-5 rtl:space-x-reverse">
                          {project.assigned_users &&
                            project.assigned_users.slice(0, 3).map((user) => {
                              return (
                                <div className="avatar" key={user.id}>
                                  <div className="w-7">
                                    <img src={user.image || profile} alt="" />
                                  </div>
                                </div>
                              );
                            })}
                          <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content w-7">
                              <span className="text-xs">
                                {project.assigned_users.length - 3}+
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p className="flex flex-row items-center justify-between">
                        Created
                        <span className="btn btn-xs btn-ghost border border-zinc-900">
                          {new Date(project.created).toLocaleDateString()}
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="flex flex-row items-center justify-between">
                        Updated
                        <span className="btn btn-xs btn-ghost border border-zinc-900">
                          {new Date(project.updated).toLocaleDateString()}
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="flex flex-row items-center justify-between">
                        Deadline
                        <span className="btn btn-xs btn-ghost border border-zinc-900">
                          {(project.deadline &&
                            new Date(project.deadline).toLocaleDateString()) ||
                            "No Deadline"}
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="flex flex-row items-center justify-between">
                        Status
                        <span className="btn btn-xs btn-ghost border border-zinc-900">
                          {(project.status && "Active") || "Inactive"}
                        </span>
                      </p>
                    </li>
                  </div>
                </div>
                <div className="flex flex-col gap-4 lg:col-span-2">
                  <div className="card static shadow-sm hover:shadow-lg transition-all duration-250 border">
                    <div className="card-content p-3 h-96 overflow-y-auto">
                      <div className="">
                        <h1 className="text-xl font-bold">Project Activity</h1>
                        {(activities && (
                          <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                            <ProjectTimeLine activities={activities} />
                          </ul>
                        )) || <p className="text-center">No Activity Found</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )) || <div className="p-4">No Project Selected</div>}
        </div>
      </dialog>
    </>
  );
};
export default ProjectDetail;
