/**Create New Task Modal */
import { useContext } from "react";
import { ProjectsContext } from "../context/Contexts";

const CreateNewTask = () => {
  const { projects, createTask } = useContext(ProjectsContext);
  const handleSubmit = (event) => {
    /**Handle Task Create Form Submit */
    event.preventDefault();
    createTask(new FormData(event.target));
  };
  return (
    <>
      <dialog id="create_new_task" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create New Task!</h3>
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="py-4 gap-3"
            encType="multipart/form-data"
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Task Title</span>
              </div>
              <input
                type="text"
                name="title"
                placeholder="Task Title"
                className="input input-bordered w-full input-sm"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Project</span>
              </div>
              <select
                name="project"
                className="select select-bordered w-full select-sm"
                required
              >
                {projects &&
                  projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.title}
                    </option>
                  ))}
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                name="description"
                className="textarea textarea-bordered textarea-sm"
                placeholder="Description"
              ></textarea>
            </label>
            <div className="modal-action">
              <button className="btn btn-sm glass bg-primary text-white hover:text-black">
                Create
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default CreateNewTask;
