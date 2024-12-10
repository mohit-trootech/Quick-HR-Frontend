/* eslint-disable react-hooks/exhaustive-deps */
/**Leaves Page */
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { BiHomeAlt, BiCalendar } from "react-icons/bi";
import { LeavesContext } from "../context/Contexts";
import { useContext, useEffect } from "react";
import { MdSurfing, MdEmergency, MdOutlinePending } from "react-icons/md";
import { GiCash, GiMagnifyingGlass } from "react-icons/gi";
import AddLeaveForm from "../modals/AddLeaveForm";
import LeaveCard from "../cards/LeaveCard";
const Leaves = () => {
  /**Leaves Page Designed with Daisy UI, Tailwind CSS & Datatables */
  const { leaves, getLeaves, getAvailableLeave, availableLeave, createLeave } =
    useContext(LeavesContext);
  useEffect(() => {
    getLeaves("");
    getAvailableLeave("");
  }, []);
  const handleChange = (event) => {
    event.preventDefault();
    getLeaves("?search=" + event.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-9 gap-2">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-7">
          {/* Breadcrumb */}
          <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
            <span className="text-xl font-semibold">Leaves Management</span>
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
          <div className="flex p-3 justify-around w-full gap-x-3">
            <div className="card sticky border w-full hover:shadow-xl hover:border transition duration-300">
              <div className="card-body p-3 flex flex-row gap-x-3 items-center">
                <MdSurfing className="h-4 w-4" />
                <div className="flex flex-col">
                  <span className="text-sm text-zinc-500">Casual Leaves</span>
                  <span>
                    {(availableLeave && availableLeave.casual_leaves) || 0}
                  </span>
                </div>
              </div>
            </div>
            <div className="card sticky border w-full hover:shadow-xl hover:border transition duration-300">
              <div className="card-body p-3 flex flex-row gap-x-3 items-center">
                <MdEmergency className="h-4 w-4" />
                <div className="flex flex-col">
                  <span className="text-sm text-zinc-500">
                    Emergency Leaves
                  </span>
                  <span>
                    {(availableLeave && availableLeave.emergency_leaves) || 0}
                  </span>
                </div>
              </div>
            </div>
            <div className="card sticky border w-full hover:shadow-xl hover:border transition duration-300">
              <div className="card-body p-3 flex flex-row gap-x-3 items-center">
                <MdOutlinePending className="h-4 w-4" />
                <div className="flex flex-col">
                  <span className="text-sm text-zinc-500">Pending Leaves</span>
                  <span>
                    {(availableLeave && availableLeave.pending_leaves) || 0}
                  </span>
                </div>
              </div>
            </div>
            <div className="card sticky border w-full hover:shadow-xl hover:border transition duration-300">
              <div className="card-body p-3 flex flex-row gap-x-3 items-center">
                <GiCash className="h-4 w-4" />
                <div className="flex flex-col">
                  <span className="text-sm text-zinc-500">
                    Encashment Leaves
                  </span>
                  <span>
                    {(availableLeave && availableLeave.encashment_leaves) || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
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
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="btn bg-secondary text-white hover:text-black transition glass btn-sm"
            >
              Add Leave
            </button>
            <AddLeaveForm createLeave={createLeave} />
          </div>
          {/* Submmited Leaves Details  */}
          {(leaves && leaves.length > 0 && (
            <div className="flex flex-wrap items-center justify-around">
              {leaves &&
                leaves.map((leave) => {
                  return <LeaveCard leave={leave} key={leave.id} />;
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
        </div>
      </div>
    </>
  );
};

export default Leaves;
