/**Holiday Component */
/**React Hooks */
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

/**Contexts */
import { PaginationContext, PreloadContext } from "../context/Contexts";

/**Components */
import Sidebar from "../components/Sidebar";
import HolidayTable from "../tables/HolidayTable";
import HolidayCalenderView from "../modals/HolidayCalenderView";
import Preloader from "../components/Preloader";
/**Icons */
import { BiHomeAlt, BiCalendar } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";

/**Utility Functions & Constants */
import { GetRequest } from "../utils/AxiosRequest";
import { BaseUrlPath } from "../utils/contants";
import { getBearerToken } from "../utils/utils";
import { FaInfoCircle } from "react-icons/fa";

const Holiday = () => {
  const [holidays, setHolidays] = useState(null);
  const { previous, setPrevious, next, setNext, count, setCount } =
    useContext(PaginationContext);
  const { preload, updatePreloader } = useContext(PreloadContext);
  const getHolidays = async (url) => {
    let response = await GetRequest(
      BaseUrlPath + "/api/holidays/" + url,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && setPrevious(response.data.previous);
    response && setNext(response.data.next);
    response && setCount(response.data.count);
    response && setHolidays(response.data.results);
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
    holidays || getHolidays("");
    return () => {};
  }, []);
  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-9 lg:col-span-7 mx-3">
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
              {holidays && count && (
                <button
                  className="btn btn-sm  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:bg-gradient-to-l transition-all duration-300"
                  onClick={() =>
                    document.getElementById("holiday_calender_view").showModal()
                  }
                >
                  Holiday Calender View
                </button>
              )}
            </div>
            <div className="p-5">
              {(holidays && count && (
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
              )) || (
                <>
                  <div className="alert alert-warning shadow-lg">
                    <FaInfoCircle className="h-6 w-6 mr-2" />
                    <span>No Holidays Found</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Holiday;
