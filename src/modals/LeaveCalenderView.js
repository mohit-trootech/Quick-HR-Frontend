/**Leave Calender View */
import { AuthContext, LeavesContext } from "../context/Contexts";
import { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const LeaveCalenderView = ({ leave }) => {
  /**Leave Calender View Daisy UI */
  const { auth } = useContext(AuthContext);
  const { updateLeave } = useContext(LeavesContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    /**Get Whole Updated Object */
    updateLeave({ ...leave, status: event.target.status.value }, leave.id);
  };
  return (
    <>
      <dialog id={`leave_calender_view_${leave.id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-start">Leave Calender View!</h3>
          <div className="py-4">
            <div className="flex flex-col p-3 rounded-xl mb-3 capitalize">
              <h1 className="text-xl text-start font-bold">{leave.title}</h1>
              <p className="text-start">{leave.description}</p>
              <div className="divider p-0 m-0"></div>
              <div className="flex justify-between items-center hover:bg-base-200 p-2 rounded-lg">
                <div>Duration</div>
                {/* Leave Duration first_half, second_half & full_day Conditions to better View */}
                <div>
                  {leave.duration === "full_day"
                    ? "Full Day"
                    : leave.duration === "first_half"
                    ? "First Half"
                    : "Second Half"}
                </div>
              </div>
              <div className="divider p-0 m-0"></div>
              <div className="flex justify-between items-center hover:bg-base-200 p-2 rounded-lg">
                <div>Days</div>
                <div>{leave.leave_duration} Days</div>
              </div>
              <div className="divider p-0 m-0"></div>

              <div className="flex justify-between items-center hover:bg-base-200 p-2 rounded-lg">
                <div>Action</div>
                {leave.status === "approved" ? (
                  <div
                    className={
                      "btn btn-sm capitalize " +
                      {
                        pending: "btn-warning",
                        approved: "btn-success",
                        rejected: "btn-error",
                      }[leave.status]
                    }
                  >
                    {leave.status}
                  </div>
                ) : // TODO: Update Condition So that only the user who created the leave can't  update it
                auth && auth.user.id === leave.user.id ? (
                  <form
                    className="flex gap-x-3 items-center justify-end"
                    onSubmit={handleSubmit}
                    method="POST"
                  >
                    <select
                      name="status"
                      defaultValue={leave.status}
                      className="select select-sm select-bordered"
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <button className="btn btn-sm btn-primary">Submit</button>
                  </form>
                ) : (
                  <div
                    className={
                      "btn btn-sm capitalize " +
                      {
                        pending: "btn-warning",
                        approved: "btn-success",
                        rejected: "btn-error",
                      }[leave.status]
                    }
                  >
                    {leave.status}
                  </div>
                )}
              </div>
            </div>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              initialDate={
                new Date(leave.start_date).toISOString().split("T")[0]
              }
              events={[
                {
                  title: leave.title,
                  id: leave.id,
                  allDay: false,
                  start: leave.start_date,
                  end: leave.end_date,
                },
              ]}
            />
          </div>
        </div>
      </dialog>
    </>
  );
};
export default LeaveCalenderView;
