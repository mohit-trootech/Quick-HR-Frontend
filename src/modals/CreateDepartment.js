/**CreateDepartmentModal */
import { useContext } from "react";
import { OrganizationContext } from "../context/Contexts";

const CreateDepartmentModal = () => {
  const { createDepartment } = useContext(OrganizationContext);
  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    createDepartment(new FormData(e.target));
  };
  return (
    <>
      <dialog id="create_department" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create New Department!</h3>
          <form
            onSubmit={(e) => handleSubmit(e)}
            method="POST"
            className="py-4 gap-3"
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Department Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Department Name"
                className="input input-bordered w-full input-sm"
                required
              />
            </label>
            <div className="modal-action">
              <button
                type="submit"
                className="btn btn-sm glass bg-primary text-white hover:text-black"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default CreateDepartmentModal;
