/* eslint-disable react-hooks/exhaustive-deps */
/**Project Detail Modal */
/**React Hooks */
import { useContext, useEffect } from "react";
/** Contexts */
import { ProjectsContext } from "../context/Contexts";
/**Components */
import ProjectTimeLine from "../components/project/ProjectTimeLine";
import ProjectInfoCard from "../cards/project/ProjectInfoCard";
import CreateNewTaskTimeline from "../components/project/CreateNewTaskTimeline";
const ProjectDetail = ({ project }) => {
  const { activities, getActivities } = useContext(ProjectsContext);
  useEffect(() => {
    getActivities(`?project=${project && project.id}`);
  }, [project]);
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
                <ProjectInfoCard project={project} />
                <div className="flex flex-col gap-4 lg:col-span-2">
                  <div className="card static shadow-sm hover:shadow-lg transition-all duration-250 border">
                    <div className="card-content p-3 h-[600px] overflow-y-auto">
                      <div className="">
                        <h1 className="text-xl font-bold">Project Activity</h1>
                        <CreateNewTaskTimeline project={project} />
                        <div className="divider my-5 mx-2"></div>
                        {(activities && (
                          <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                            <ProjectTimeLine
                              project={project}
                              activities={activities}
                              key={project.id}
                            />
                            {project && (
                              <li>
                                <hr />
                                <div className="timeline-middle">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                                <div className="timeline-end mb-10 w-full">
                                  <time className="font-mono italic">
                                    {project.created_ago} Ago
                                  </time>
                                  <div className="text-lg font-black">
                                    <p>{project.title}</p>
                                  </div>
                                  <p>Project Started</p>
                                </div>
                                <hr />
                              </li>
                            )}
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
