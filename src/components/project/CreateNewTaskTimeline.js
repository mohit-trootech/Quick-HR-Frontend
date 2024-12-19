/**Create New Task Form on Timeline */
import { useState, useContext } from "react";
import RichText from "../RichText";
import { ProjectsContext } from "../../context/Contexts";
import { FaEye } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import MardownFormatHelp from "../../modals/MardownFormatHelp";
const CreateNewTaskTimeline = ({ project }) => {
  const [content, setContent] = useState(null);
  const [toggle, setToggle] = useState(false);
  const { createTask } = useContext(ProjectsContext);
  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await createTask(new FormData(event.target));
  };
  return (
    <>
      <div className="card static">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="card-body px-2 py-3"
        >
          <input className="hidden" defaultValue={project.id} name="project" />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              className="input input-sm input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label flex gap-x-1 justify-start items-center">
              <span className="label-text">Description</span>
              <button type="button">
                <MdHelp
                  onClick={() => {
                    document.getElementById("markdown_help").showModal();
                  }}
                  className="cursor-help"
                  title="Click For Markdown Formatting Help"
                />
              </button>
            </label>
            <div className="relative">
              <div
                onClick={() => setToggle(!toggle)}
                className="btn btn-circle btn-sm absolute right-2 top-2"
              >
                <FaEye className="text-lg" />
              </div>
              {(toggle && <RichText content={content} />) || (
                <textarea
                  placeholder="Enter Description"
                  onChange={handleChange}
                  name="description"
                  className="textarea textarea-sm w-full h-60 textarea-bordered"
                >
                  {content}
                </textarea>
              )}
            </div>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-primary btn-sm">Create Task</button>
          </div>
        </form>
      </div>
      <MardownFormatHelp />
    </>
  );
};

export default CreateNewTaskTimeline;
