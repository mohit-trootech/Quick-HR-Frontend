/**Create Organization Modal */

const CreateOrganization = ({ postOrganization }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    postOrganization(new FormData(event.target));
  };
  return (
    <>
      <dialog id="create_organization" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create Organization!</h3>
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
                Create
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default CreateOrganization;
