/* eslint-disable react-hooks/exhaustive-deps */
/**Leaves Page */
/**React Hooks */
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

/**Components */
import Sidebar from "../../components/Sidebar";
import AddLeaveForm from "../../modals/AddLeaveForm";
import LeaveCard from "../../cards/leave/LeaveCard";
import AvailableLeavesFlex from "../../components/leave/AvailalbleLeavesFlex";
import LeaveFilterBtnGroup from "../../components/leave/LeaveFilterBtnGroup";
/**Contexts */
import {
  LeavesContext,
  PaginationContext,
  PreloadContext,
} from "../../context/Contexts";

/**Icons */
import { GiMagnifyingGlass } from "react-icons/gi";
import { BiHomeAlt, BiCalendar } from "react-icons/bi";
import Preloader from "../../components/Preloader";
/**Utils Functions & Constants */

const Leaves = () => {
  /**Leaves Page Designed with Daisy UI, Tailwind CSS & Datatables */
  const { leaves, getLeaves, getAvailableLeave, availableLeave, createLeave } =
    useContext(LeavesContext);
  const { preload } = useContext(PreloadContext);
  const { next, previous } = useContext(PaginationContext);
  const [status, setStatus] = useState("*");
  useEffect(() => {
    leaves || getLeaves("?page=1");
    availableLeave || getAvailableLeave();
  }, []);
  const handleChange = (event) => {
    event.preventDefault();
    getLeaves("?search=" + event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    getLeaves("?" + event.target.href.split("?")[1]);
  };
  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-9 lg:col-span-7 mx-3">
            {/* Breadcrumb */}
            <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold hidden lg:block">
                Leaves Management
              </span>
              <div className="breadcrumbs text-sm">
                <ul>
                  <li>
                    <Link to="/">
                      <BiHomeAlt /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <BiCalendar />
                    Leaves
                  </li>
                </ul>
              </div>
            </div>
            {/* Available Leaves */}
            {availableLeave && (
              <AvailableLeavesFlex availableLeave={availableLeave} />
            )}
            {/* Create New Leave */}
            <div className="flex justify-between items-center gap-x-3 px-3">
              <label className="input input-bordered input-sm flex items-center gap-2">
                <GiMagnifyingGlass />
                <input
                  type="text"
                  className="grow"
                  placeholder="Search with Keywords"
                  onChange={handleChange}
                />
              </label>
              {/* Leave Status Filter */}
              <LeaveFilterBtnGroup status={status} setStatus={setStatus} />
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="btn bg-secondary text-white hover:text-black transition glass btn-sm"
              >
                Add Leave
              </button>
              <AddLeaveForm createLeave={createLeave} />
            </div>
            {/* Submmited Leaves Details  */}
            {(leaves && (
              <div className="flex flex-wrap items-center justify-around">
                {leaves.map((leave) => {
                  if (status === leave.status || status === "*") {
                    return <LeaveCard leave={leave} key={leave.id} />;
                  }
                  return null;
                })}
              </div>
            )) || (
              <div role="alert" className="alert my-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 shrink-0 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>No Leaves Data Found.</span>
              </div>
            )}
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
        </div>
      )}
    </>
  );
};

export default Leaves;
