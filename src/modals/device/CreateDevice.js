/*Create Device Modal */
import { FaEye } from "react-icons/fa";
import { DeviceContext } from "../../context/Contexts";
import { useContext, useState } from "react";
import RichText from "../../components/RichText";
import { MdHelp } from "react-icons/md";
import MarkdownFormatHelp from "../MarkdownFormatHelp";
import { BiX } from "react-icons/bi";
const CreateDevice = () => {
  const { createDevice } = useContext(DeviceContext);
  const [content, setContent] = useState(null);
  const [toggle, setToggle] = useState(false);
  const handleChange = async (event) => {
    setContent(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    createDevice(new FormData(event.target));
    event.target.reset();
    event.target.closest("dialog").close();
  };
  return (
    <dialog id="create_device_modal" className="modal">
      <div className="modal-box">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Hello!</h3>
          <form method="dialog">
            <button className="btn btn-circle btn-sm btn-ghost text-md font-semibold">
              <BiX />
            </button>
          </form>
        </div>
        <div className="py-4">
          <form
            className="flex flex-col gap-3 items-start justify-start mb-3"
            method="post"
            onSubmit={handleSubmit}
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Device Title</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                name="title"
                className="input input-sm input-bordered w-full"
              />
            </label>
            <div className="form-control w-full">
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
                  <MarkdownFormatHelp />
                </button>
              </label>
              <div className="relative w-full">
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
            <div className="flex flex-row justify-end items-center">
              <button className="btn btn-primary" type="submit">
                Add Device
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};
export default CreateDevice;
