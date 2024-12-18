/**Tables - Projects Table Item */
import profile from "../static/img/no-profile.webp";
const ProjectsTable = ({ project, setCurrent }) => {
  /**Project Table DaisyUI Component */
  const handleClick = (project) => {
    setCurrent(project);
    document.getElementById("project_details").showModal();
  };

  return (
    <>
      <tr className="hover:bg-slate-50 border-b border-slate-200">
        <td className="p-4 py-5">
          <p className="block font-semibold text-sm text-slate-800">
            {project.title}
          </p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">{project.created_at} Ago</p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">
            {(project.deadline && new Date(project.deadline).toDateString()) ||
              "No Deadline"}
          </p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500 flex gap-2 items-center justify-start border p-2 rounded-lg bg-base-100 w-fit hover:shadow-lg">
            {
              <img
                src={project.team_lead.image || profile}
                className="avtar w-5 h-5 rounded-full"
                alt="team-lead"
              />
            }
            <span className="capitalize">{project.team_lead.username}</span>
          </p>
        </td>
        <td className="p-4 py-5">
          <div className="text-sm text-slate-500 flex gap-2 items-center justify-start border p-2 rounded-lg bg-base-100 w-fit hover:shadow-lg">
            {
              <img
                src={project.project_manager.image || profile}
                className="avtar w-5 h-5 rounded-full"
                alt="project-manager"
              />
            }
            <span className="capitalize">
              {project.project_manager.username}
            </span>
          </div>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">
            <button
              onClick={() => handleClick(project)}
              className="btn btn-sm btn-primary"
            >
              Details
            </button>
          </p>
        </td>
      </tr>
    </>
  );
};

export default ProjectsTable;
