/**Add Organization User Modal */
import { useContext, useEffect, useState } from "react";
import { OrganizationContext } from "../context/Contexts";

const AddOrganizationUser = () => {
  const { getOrganizationUsers, users } = useContext(OrganizationContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getOrganizationUsers(`?search=${search}`);
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <dialog id="add_organization_user" className="modal">
        <div className="modal-box w-full max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Organization User!</h3>
          <div className="px-2 py-4">
            {/* Add User Form */}
            <form method="POST" onSubmit={handleSubmit}>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Enter Username</span>
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Enter Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </label>
              <button className="btn btn-primary w-full mt-5">Add User</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddOrganizationUser;
