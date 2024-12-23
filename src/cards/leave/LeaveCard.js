/**Leave Card Component */
import LeaveCalenderView from "../../modals/LeaveCalenderView";
const LeaveCard = ({ leave }) => {
  /**Leave Card DaisyUI & Tailwind CSS */
  return (
    <>
      <div className="card static w-80 self-start bg-base-100 shadow-sm my-5 rounded-xl border hover:shadow-xl hover:border transition duration-300">
        <div className="card-body p-3 items-center justify-center flex flex-col gap-y-3 text-center">
          <img
            src={
              leave.user.image ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            alt="profile"
            className="rounded-full avtar w-20 h-20"
          />
          <h1 className="card-title capitalize">{leave.user.username}</h1>
          <button
            className="btn btn-sm text-sm text-zinc-500"
            onClick={() =>
              document
                .getElementById(`leave_calender_view_${leave.id}`)
                .showModal()
            }
          >
            Leave Details
          </button>
          <LeaveCalenderView leave={leave} />
          <div className="px-0 pt-0 items-center text-center rounded-xl w-full border">
            <p className="w-full rounded-t-lg  bg-zinc-600 text-white p-2">
              {leave.leave_type === "casual_leave"
                ? "Casual Leave"
                : "Emergency Leave"}
            </p>
            <div className="stats stats-vertical lg:stats-horizontal border rounded-none  w-full">
              <div className="stat text-xs">
                <div className="stat-title">From</div>
                <div className="text-sm font-bold">
                  {new Date(leave.start_date).toLocaleDateString()}
                </div>
              </div>

              <div className="stat text-xs">
                <div className="stat-title">To</div>
                <div className="text-sm font-bold">
                  {new Date(leave.end_date).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="flex justify-around py-2 items-center">
              <div className="font-bold">Status</div>
              <div
                className={
                  leave.status === "pending"
                    ? "badge badge-sm px-2 py-3 capitalize font-bold text-white badge-warning"
                    : leave.status === "approved"
                    ? "badge badge-sm px-2 py-3 capitalize font-bold text-white badge-success"
                    : "badge badge-sm px-2 py-3 capitalize font-bold text-white badge-error"
                }
              >
                {leave.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveCard;
