/**Add Leave Form Modal */

const AddLeaveForm = ({ createLeave }) => {
  /**Add Leave Modal Form Daisy UI & Tailwind CSS */
  const handleSubmit = (event) => {
    event.preventDefault();
    createLeave(new FormData(event.target));
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add New Leave!</h3>
          <form method="POST" className="py-4 gap-3" onSubmit={handleSubmit}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Brief Reason for Leave<sup>*</sup>
                </span>
              </div>
              <input
                type="text"
                name="title"
                placeholder="Reason Brief"
                className="input input-bordered w-full input-sm"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Descriptive Reason
                  <span className="badge badge-sm badge-primary ml-1">
                    Optional
                  </span>
                </span>
              </div>
              <textarea
                name="description"
                className="textarea textarea-bordered textarea-sm"
                placeholder="Descriptive Reason"
              ></textarea>
            </label>
            <div className="flex justify-between items-center gap-3">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">
                    Leave Type<sup>*</sup>
                  </span>
                </div>
                <select
                  name="leave_type"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="casual_leave">Casual Leave</option>
                  <option value="emergency_leave">Emergency Leave</option>
                </select>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">
                    Leave Duration<sup>*</sup>
                  </span>
                </div>
                <select
                  name="duration"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="full_day">Full Day</option>
                  <option value="first_half">First Half</option>
                  <option value="second_half">Second Half</option>
                </select>
              </label>
            </div>
            <div className="flex justify-between items-center gap-3">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">
                    Starts From<sup>*</sup>
                  </span>
                </div>
                <input
                  type="date"
                  name="start_date"
                  min={new Date().toISOString().split("T")[0]}
                  max={
                    new Date(new Date().setMonth(new Date().getMonth() + 1))
                      .toISOString()
                      .split("T")[0]
                  }
                  placeholder="Enter Leave Title"
                  className="input input-bordered w-full input-sm"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">
                    End To<sup>*</sup>
                  </span>
                </div>
                <input
                  type="date"
                  name="end_date"
                  min={new Date().toISOString().split("T")[0]}
                  max={
                    new Date(new Date().setMonth(new Date().getMonth() + 1))
                      .toISOString()
                      .split("T")[0]
                  }
                  placeholder="Enter Leave Title"
                  className="input input-bordered w-full input-sm"
                  required
                />
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

export default AddLeaveForm;
