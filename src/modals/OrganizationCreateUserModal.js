/**OrganizationCreateUserModal */

const OrganizationCreateUserModal = ({ handleSubmit }) => {
  return (
    <>
      <dialog id="create_organization_user" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add User to Organization!</h3>
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="py-4 gap-3"
            encType="multipart/form-data"
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Enter Username</span>
              </div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered w-full input-sm"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Enter Email</span>
              </div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full input-sm"
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
export default OrganizationCreateUserModal;
