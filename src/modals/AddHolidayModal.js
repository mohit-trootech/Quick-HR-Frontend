/**Add Holiday Modal Daisy UI */

const AddHolidayModal = ({ handleSubmit }) => {
  return (
    <>
      <dialog id="add_holiday" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Holiday</h3>
          <form method="POST" className="py-4" onSubmit={handleSubmit}>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-sm input-bordered"
                required
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                className="textarea textarea-sm textarea-bordered"
                required
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Starts From</span>
              </div>
              <input
                type="date"
                name="starts_from"
                className="input input-sm input-bordered"
                required
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Ends On</span>
              </div>
              <input
                type="date"
                name="ends_on"
                className="input input-sm input-bordered"
                required
              />
            </label>
            <div className="modal-action">
              <button className="btn btn-primary">Add Holiday</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default AddHolidayModal;
