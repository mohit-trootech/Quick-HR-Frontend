/**Project Info Card */
import profile from "../../static/img/no-profile.webp";
const ProjectInfoCard = ({ project }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Project Details */}
        <div className="card static bg-base-100 hover:shadow-xl shadow-sm transition-all duration-250 border">
          <div className="flex flex-col gap-2 p-3">
            <h2 className="card-title">{project.title}</h2>
            <p
              className="prose"
              dangerouslySetInnerHTML={{
                __html: project.description,
              }}
            ></p>
            <ul className="menu bg-base-100 rounded-box gap-2">
              <li>
                <p className="flex flex-row justify-between items-center border border-zinc-500">
                  <span>Team Leader</span>
                  <button className="btn btn-sm capitalize">
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
                <p className="flex flex-row justify-between items-center border border-zinc-500">
                  <span>Project Manager</span>
                  <button className="btn btn-sm capitalize">
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
        {/* Project Meta Details */}
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
                {new Date(project.modified).toLocaleDateString()}
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
    </>
  );
};
export default ProjectInfoCard;
