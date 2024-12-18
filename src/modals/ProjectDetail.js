/**Project Detail Modal */
import profile from "../static/img/no-profile.webp";
const ProjectDetail = ({ project }) => {
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
                      <p className="flex flex-row items-center justify-between">
                        Assigned Users
                        <div className="avatar-group -space-x-5 rtl:space-x-reverse">
                          {project.assigned_users &&
                            project.assigned_users.slice(0, 3).map((user) => {
                              return (
                                <div className="avatar">
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
                      </p>
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
                        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                          <li></li>
                          <li>
                            <hr className="bg-secondary" />
                            <div className="timeline-middle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 text-primary"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="timeline-end mb-10">
                              <time className="font-mono italic">1998</time>
                              <div className="text-lg font-black">iMac</div>
                              iMac is a family of all-in-one Mac desktop
                              computers designed and built by Apple Inc. It has
                              been the primary part of Apple's consumer desktop
                              offerings since its debut in August 1998, and has
                              evolved through seven distinct forms
                            </div>
                            <hr className="bg-secondary" />
                          </li>
                          <li>
                            <hr className="bg-secondary" />
                            <div className="timeline-middle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 text-primary"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="timeline-end mb-10">
                              <time className="font-mono italic">2007</time>
                              <div className="text-lg font-black">iPhone</div>
                              iPhone is a line of smartphones produced by Apple
                              Inc. that use Apple's own iOS mobile operating
                              system. The first-generation iPhone was announced
                              by then-Apple CEO Steve Jobs on January 9, 2007.
                              Since then, Apple has annually released new iPhone
                              models and iOS updates. As of November 1, 2018,
                              more than 2.2 billion iPhones had been sold. As of
                              2022, the iPhone accounts for 15.6% of global
                              smartphone market share
                            </div>
                            <hr className="bg-secondary" />
                          </li>
                          <li>
                            <div className="timeline-middle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 text-primary"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="timeline-end mb-10">
                              <time className="font-mono italic">1998</time>
                              <div className="text-lg font-black">iMac</div>
                              iMac is a family of all-in-one Mac desktop
                              computers designed and built by Apple Inc. It has
                              been the primary part of Apple's consumer desktop
                              offerings since its debut in August 1998, and has
                              evolved through seven distinct forms
                            </div>
                            <hr className="bg-secondary" />
                          </li>
                          <li>
                            <hr className="bg-secondary" />
                            <div className="timeline-middle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 text-primary"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="timeline-end mb-10">
                              <time className="font-mono italic">2007</time>
                              <div className="text-lg font-black">iPhone</div>
                              iPhone is a line of smartphones produced by Apple
                              Inc. that use Apple's own iOS mobile operating
                              system. The first-generation iPhone was announced
                              by then-Apple CEO Steve Jobs on January 9, 2007.
                              Since then, Apple has annually released new iPhone
                              models and iOS updates. As of November 1, 2018,
                              more than 2.2 billion iPhones had been sold. As of
                              2022, the iPhone accounts for 15.6% of global
                              smartphone market share
                            </div>
                            <hr className="bg-secondary" />
                          </li>
                          <li>
                            <div className="timeline-middle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 text-primary"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="timeline-end mb-10">
                              <time className="font-mono italic">1998</time>
                              <div className="text-lg font-black">iMac</div>
                              iMac is a family of all-in-one Mac desktop
                              computers designed and built by Apple Inc. It has
                              been the primary part of Apple's consumer desktop
                              offerings since its debut in August 1998, and has
                              evolved through seven distinct forms
                            </div>
                            <hr className="bg-secondary" />
                          </li>
                          <li>
                            <hr className="bg-secondary" />
                            <div className="timeline-middle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 text-primary"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="timeline-end mb-10">
                              <time className="font-mono italic">2007</time>
                              <div className="text-lg font-black">iPhone</div>
                              iPhone is a line of smartphones produced by Apple
                              Inc. that use Apple's own iOS mobile operating
                              system. The first-generation iPhone was announced
                              by then-Apple CEO Steve Jobs on January 9, 2007.
                              Since then, Apple has annually released new iPhone
                              models and iOS updates. As of November 1, 2018,
                              more than 2.2 billion iPhones had been sold. As of
                              2022, the iPhone accounts for 15.6% of global
                              smartphone market share
                            </div>
                          </li>
                        </ul>
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
