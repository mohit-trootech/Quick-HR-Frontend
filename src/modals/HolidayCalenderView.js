/**Holiday Calender View */
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const HolidayCalenderView = ({ holidays }) => {
  /**Holiday Calender View Daisy UI */
  return (
    <>
      <dialog id="holiday_calender_view" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Calender View!</h3>
          <div className="py-4">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={false}
              events={holidays.map((holiday) => {
                return {
                  title: holiday.title,
                  id: holiday.id,
                  allDay: false,
                  start: holiday.starts_from,
                  end: holiday.ends_on,
                };
              })}
            />
          </div>
        </div>
      </dialog>
    </>
  );
};
export default HolidayCalenderView;
