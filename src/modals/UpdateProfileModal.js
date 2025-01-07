/**Update Profile Modal*/

const UpdateProfileModal = ({ user, handleSubmit }) => {
  /**daisy ui update profile modal */

  return (
    <>
      <dialog id="update_profile" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update Profile!</h3>
          <form
            method="POST"
            className="py-4 gap-3"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Profile Picture</span>
              </div>
              <input
                type="file"
                name="image"
                accept="image/*"
                placeholder="Enter Profile Picture"
                className="file-input file-input-bordered w-full file-input-sm"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                name="first_name"
                defaultValue={user && user.first_name}
                placeholder="First Name"
                className="input input-bordered w-full input-sm"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                name="last_name"
                defaultValue={user && user.last_name}
                placeholder="Last Name"
                className="input input-bordered w-full input-sm"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Age</span>
              </div>
              <input
                type="number"
                name="age"
                defaultValue={user && user.age}
                placeholder="Age"
                className="input input-bordered w-full input-sm"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Address</span>
              </div>
              <textarea
                name="address"
                defaultValue={user && user.address}
                placeholder="Address"
                className="textarea textarea-bordered w-full"
                required
              />
            </label>
            <div className="modal-action">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default UpdateProfileModal;
