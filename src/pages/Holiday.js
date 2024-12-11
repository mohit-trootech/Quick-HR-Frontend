/**Holiday Component */
import Sidebar from "../components/Sidebar";
import { BiHomeAlt, BiCalendar } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetRequest } from "../utils/AxiosRequest";
import { BaseUrlPath } from "../utils/contants";
import { getBearerToken } from "../utils/utils";
import { FaMagnifyingGlass } from "react-icons/fa6";
import HolidayTable from "../tables/HolidayTable";
import HolidayCalenderView from "../modals/HolidayCalenderView";
const Holiday = () => {
  const [holidays, setHolidays] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const getHolidays = async (url) => {
    let response = await GetRequest(
      BaseUrlPath + "/api/holidays/" + url,
      getBearerToken
    );
    setPrevious(response.data.previous);
    setNext(response.data.next);
    setHolidays(response.data.results);
  };
  const handleChange = (event) => {
    event.preventDefault();
    getHolidays("?search=" + event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    let url =
      event.target.href.split("?")[1] === undefined
        ? "page=1"
        : event.target.href.split("?")[1];
    getHolidays("?" + url);
  };
  useEffect(() => {
    getHolidays("");
    return () => {};
  }, []);
  return (
    <>
      <div className="grid grid-cols-9 gap-2">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-7 mr-5">
          <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
            <span className="text-xl font-semibold">Holidays</span>
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <Link to="/">
                    <BiHomeAlt /> Dashboard
                  </Link>
                </li>
                <li>
                  <BiCalendar /> Holidays
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between my-5 items-center">
            <label className="input input-sm input-bordered flex items-center gap-2 w-1/3">
              <input
                type="text"
                onChange={handleChange}
                className="grow"
                placeholder="Search"
              />
              <FaMagnifyingGlass className="h-4 w-4 opacity-70" />
            </label>
            <button
              className="btn btn-sm  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:bg-gradient-to-l transition-all duration-300"
              onClick={() =>
                document.getElementById("holiday_calender_view").showModal()
              }
            >
              Holiday Calender View
            </button>
          </div>
          <div className="p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-left table-auto min-w-max">
                <thead>
                  <tr>
                    <th className="p-4 border-b border-slate-200 bg-slate-50">
                      <p className="text-sm font-normal leading-none text-slate-500">
                        ID
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-200 bg-slate-50">
                      <p className="text-sm font-normal leading-none text-slate-500">
                        Title
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-200 bg-slate-50">
                      <p className="text-sm font-normal leading-none text-slate-500">
                        Starts From
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-200 bg-slate-50">
                      <p className="text-sm font-normal leading-none text-slate-500">
                        Ends On
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-200 bg-slate-50">
                      <p className="text-sm font-normal leading-none text-slate-500">
                        No of Days
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {holidays &&
                    holidays.map((holiday) => {
                      return (
                        <HolidayTable holiday={holiday} key={holiday.id} />
                      );
                    })}
                </tbody>
              </table>
              {/* Pagination */}
              <div className="join m-5 flex justify-end">
                <a
                  role="button"
                  onClick={handleClick}
                  href={previous}
                  disabled={!previous}
                  className="btn btn-info join-item"
                >
                  Previous
                </a>
                <a
                  role="button"
                  onClick={handleClick}
                  disabled={!next}
                  href={next}
                  className="btn btn-primary join-item"
                >
                  Next
                </a>
              </div>
              {/* Calender View */}
              <HolidayCalenderView holidays={holidays} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Holiday;
