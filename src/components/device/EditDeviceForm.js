import converter from "html-to-markdown";
import { DeviceContext } from "../../context/Contexts";
import { useContext } from "react";
const EditDeviceForm = ({ current }) => {
  const { updateDevice } = useContext(DeviceContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateDevice(current.id, new FormData(event.target));
    event.target.reset();
    document.getElementById("device_edit_drawer").checked = false;
  };
  return (
    <>
      <div className="text-base-content bg-base-200 min-h-full w-96 p-4">
        <div className="flex justify-between items-center mb-3 gap-3">
          <span className="text-xl font-semibold">Edit Device</span>
          <label
            htmlFor="device_edit_drawer"
            aria-label="close sidebar"
            className="btn btn-circle btn-sm btn-ghost"
          >
            ✕
          </label>
        </div>
        {(current && (
          <form method="POST" onSubmit={handleSubmit}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                className="input input-sm input-bordered w-full"
                type="text"
                name="title"
                defaultValue={current.title}
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                className="textarea textarea-sm textarea-bordered w-full h-40"
                type="text"
                name="description"
                required
                defaultValue={converter.convert(current.description)}
              ></textarea>
            </label>
            <div className="flex justify-end">
              <button type="submit" className="mt-3 btn btn-sm btn-primary">
                Update
              </button>
            </div>
          </form>
        )) ||
          "No Device Selected"}
      </div>
    </>
  );
};
export default EditDeviceForm;
