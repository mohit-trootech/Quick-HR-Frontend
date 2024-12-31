/**Create Organization Modal */
import { OrganizationContext } from "../context/Contexts";
import { useContext } from "react";

const CreateOrganization = ({ organization }) => {
  const { updateOrganization } = useContext(OrganizationContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateOrganization(new FormData(event.target));
  };
  return (
    <>
      <dialog id="update_organization" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update Organization!</h3>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="py-4 gap-3"
            encType="multipart/form-data"
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Organization Name</span>
              </div>
              <input
                type="text"
                name="name"
                defaultValue={organization.name}
                placeholder="Organization Name"
                className="input input-bordered w-full input-sm"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Logo</span>
              </div>
              <input
                type="file"
                name="logo"
                placeholder="Organization Logo"
                className="file-input w-full file-input-sm"
                required
              />
            </label>
            <div className="modal-action">
              <button className="btn btn-sm glass bg-primary text-white hover:text-black">
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default CreateOrganization;
