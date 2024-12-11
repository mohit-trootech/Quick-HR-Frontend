/**Leave Calender View */

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const LeaveCalenderView = ({ leave }) => {
  /**Leave Calender View Daisy UI */
  return (
    <>
      <dialog id={`leave_calender_view_${leave.id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Leave Calender View!</h3>
          <div className="py-4">
            <form className="flex flex-col bg-zinc-200 p-3 rounded-xl mb-3">
              <h1 className="text-xl text-start font-bold">{leave.title}</h1>
              <p className="text-zinc-400 text-start">{leave.description}</p>
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
                <div className="flex gap-x-3 items-center justify-end">
                  <select
                    defaultValue={leave.status}
                    className="select select-sm select-bordered"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <button className="btn btn-sm btn-primary">Submit</button>
                </div>
              </div>
            </form>
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
