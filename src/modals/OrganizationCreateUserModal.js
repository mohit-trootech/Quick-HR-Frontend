/**OrganizationCreateUserModal */
const OrganizationCreateUserModal = ({ handleSubmit, departments }) => {
  return (
    <>
      <dialog id="create_organization_user" className="modal">
        <div className="modal-box w-full max-w-3xl">
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
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full input-sm"
                required
              />
            </label>
            <div className="flex justify-between items-center gap-3">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Department</span>
                </div>
                <select
                  name="department"
                  className="select select-sm select-bordered w-full"
                  required
                >
                  {(departments &&
                    departments.map((department) => {
                      return (
                        <option key={department.id} value={department.id}>
                          {department.name}
                        </option>
                      );
                    })) || <option>Select Department</option>}
                </select>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Designation</span>
                </div>
                <select
                  name="department"
                  className="select select-sm select-bordered w-full"
                  required
                >
                  <option value="junior">Junior</option>
                  <option value="experienced">Experienced</option>
                  <option value="senior">Senior</option>
                  <option value="manager">Manager</option>
                </select>
              </label>
            </div>
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
