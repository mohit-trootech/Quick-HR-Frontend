/* eslint-disable react-hooks/exhaustive-deps */
/**Holiday Component */
/**React Hooks */
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

/**Contexts */
import {
  PaginationContext,
  PreloadContext,
  AuthContext,
} from "../../context/Contexts";

/**Components */
import Sidebar from "../../components/Sidebar";
import HolidayTable from "../../tables/HolidayTable";
import HolidayCalenderView from "../../components/holiday/HolidayCalenderView";
import Preloader from "../../components/Preloader";
import AddHolidayModal from "../../modals/AddHolidayModal";
/**Icons */
import { BiHomeAlt, BiCalendar } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";

/**Utility Functions & Constants */
import { GetRequest, PostRequest } from "../../utils/AxiosRequest";
import { BaseUrlPath } from "../../utils/contants";
import { getBearerToken } from "../../utils/utils";
import { FaInfoCircle } from "react-icons/fa";
import SidenavDrawer from "../../components/SidenavDrawer";
import { toast } from "react-toastify";
import { handleCsvSubmitSuccess } from "../../utils/handleResponses";

const Holiday = () => {
  const [holidays, setHolidays] = useState(null);
  const { auth } = useContext(AuthContext);
  const { previous, setPrevious, next, setNext, count, setCount } =
    useContext(PaginationContext);
  const { preload, updatePreloader } = useContext(PreloadContext);
  const getHolidays = async (query_params) => {
    let response = await GetRequest(
      `${BaseUrlPath}/api/holidays/${query_params || ""}`,
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
  const createHoliday = async (data) => {
    // Create Holiday
    let response = await PostRequest(
      `${BaseUrlPath}/api/holidays/`,
      data,
      getBearerToken,
      null,
      updatePreloader
    );
    response && getHolidays();
  };
  const handleCsvSubmit = async (event) => {
    // Handle CSV Submit
    event.preventDefault();
    let id = toast.loading("Uploading Holidays CSV...");
    let response = await PostRequest(
      `${BaseUrlPath}/api/holidays/holidays_csv_upload/`,
      new FormData(event.target),
      getBearerToken,
      handleCsvSubmitSuccess,
      id,
      null
    );
    console.log(response);
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
    holidays || getHolidays();
    return () => {};
  }, []);
  const handleSubmit = (event) => {
    // Handle Submit to Create New Holidays
    event.preventDefault();
    createHoliday(new FormData(event.target));
  };
  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-9 lg:col-span-7 mx-3">
            <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold hidden lg:block">
                Holidays
              </span>
              <div className="breadcrumbs text-sm flex flex-row items-center justify-start gap-2">
                <SidenavDrawer />
                <ul>
                  <li>
                    <Link to="/">
                      <BiHomeAlt /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <BiCalendar />
                    Holidays
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-between my-5 items-center">
              <label className="input input-sm input-bordered flex items-center gap-2 md:w-1/3 w-full">
                <input
                  type="text"
                  onChange={handleChange}
                  className="grow"
                  placeholder="Search"
                />
                <FaMagnifyingGlass className="h-4 w-4 opacity-70" />
              </label>
              <div className="flex flex-col md:flex-row gap-2 justify-end items-center w-full">
                <details className="dropdown dropdown-bottom w-full md:w-auto">
                  <summary className="btn btn-sm m-1 w-full md:w-auto">
                    Read CSV
                  </summary>
                  <form
                    method="POST"
                    onSubmit={handleCsvSubmit}
                    encType="multipart/form-data"
                    className="menu dropdown-content bg-base-100 rounded-box z-[999] w-60 p-2 shadow-lg gap-3 border"
                  >
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text text-xs">
                          Pick Holidays CSV
                        </span>
                      </div>
                      <input
                        type="file"
                        name="csv"
                        className="file-input file-input-sm file-input-bordered w-full"
                      />
                    </label>
                    <button className="btn btn-sm btn-primary w-full">
                      Upload
                    </button>
                  </form>
                </details>
                {auth && auth.department.name === "hr" && (
                  <>
                    <button
                      className="btn btn-sm  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:bg-gradient-to-l w-full md:w-auto"
                      onClick={() =>
                        document.getElementById("add_holiday").showModal()
                      }
                    >
                      Add New Holiday
                    </button>
                    <AddHolidayModal handleSubmit={handleSubmit} />
                  </>
                )}
                {holidays && (
                  <>
                    <button
                      className="btn btn-sm  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:bg-gradient-to-l w-full md:w-auto"
                      onClick={() =>
                        document
                          .getElementById("holiday_calender_view")
                          .showModal()
                      }
                    >
                      Holiday Calender View
                    </button>
                    <HolidayCalenderView holidays={holidays} />
                  </>
                )}
              </div>
            </div>
            <div className="p-5">
              {(holidays && count && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left table-auto min-w-max rounded-lg">
                    <thead>
                      <tr>
                        <th className="p-4 border-b border-slate-200 bg-base-300">
                          <p className="text-sm font-normal leading-none text-slate-500">
                            ID
                          </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-base-300">
                          <p className="text-sm font-normal leading-none text-slate-500">
                            Title
                          </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-base-300">
                          <p className="text-sm font-normal leading-none text-slate-500">
                            Starts From
                          </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-base-300">
                          <p className="text-sm font-normal leading-none text-slate-500">
                            Ends On
                          </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-base-300">
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
