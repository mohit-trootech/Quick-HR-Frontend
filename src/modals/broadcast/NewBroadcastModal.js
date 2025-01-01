import { MdHelp } from "react-icons/md";
import RichText from "../../components/RichText";
import { useState } from "react";
import MardownFormatHelp from "../MardownFormatHelp";
const NewBroadcastModal = ({ createBroadCastMessage }) => {
  /**Daisy UI Broadcast Modal */

  const [content, setContent] = useState(null);
  const [toggle, setToggle] = useState(false);
  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    createBroadCastMessage(new FormData(e.target));
  };
  return (
    <>
      <dialog id="new_broadcast" className="modal">
        <div className="modal-box w-full max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create New Broadcast!</h3>
          <form method="POST" className="py-4 gap-3" onSubmit={handleSubmit}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full input-sm"
                required
              />
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
            <div className="modal-action">
              <button className="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
        <MardownFormatHelp />
      </dialog>
    </>
  );
};
export default NewBroadcastModal;
