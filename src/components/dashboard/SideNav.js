/* eslint-disable no-unused-vars */
/**Dashboard Menu */
import { MdDashboard } from "react-icons/md";
import { TbBodyScan } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { FaList, FaMoneyCheck, FaUserTag, FaMobile } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineMoreTime } from "react-icons/md";
import { FaBookJournalWhills, FaTowerBroadcast } from "react-icons/fa6";
const SideNav = ({ customization }) => {
  return (
    <>
      <ul className="menu rounded-box w-full p-0 m-0 gap-y-1">
        <li>
          <NavLink
            role="button"
            to="/"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <MdDashboard /> Dashboard
          </NavLink>
        </li>
        {customization && customization.leave && (
          <li>
            <NavLink
              role="button"
              to="/leaves"
              className="flex flex-row justify-start gap-2 items-center"
            >
              <SlCalender /> Leave
            </NavLink>
          </li>
        )}
        {customization && customization.holiday && (
          <li>
            <NavLink
              to="/holidays"
              role="button"
              className="flex flex-row justify-start gap-2 items-center"
            >
              <FaList /> Holiday
            </NavLink>
          </li>
        )}
        {customization && customization.salary && (
          <li>
            <NavLink
              role="button"
              to="/salary"
              className="flex flex-row justify-start gap-2 items-center"
            >
              <FaMoneyCheck /> Salary
            </NavLink>
          </li>
        )}
        {customization && customization.attendence && (
          <li>
            <NavLink
              role="button"
              to="/salary"
              className="flex flex-row justify-start gap-2 items-center"
            >
              <TbBodyScan /> Attendence
            </NavLink>
          </li>
        )}
        {customization && customization.review && (
          <li>
            <NavLink
              role="button"
              to="/review"
              className="flex flex-row justify-start gap-2 items-center"
            >
              <VscPreview /> Review
            </NavLink>
          </li>
        )}
        {customization && customization.overtime && (
          <li>
            <NavLink
              role="button"
              to="/overtime"
              className="flex flex-row justify-start gap-2 items-center"
            >
              <MdOutlineMoreTime /> Overtime
            </NavLink>
          </li>
        )}
        {customization && customization.device && (
          <li>
            <NavLink
              role="button"
              to="/overtime"
              className="flex flex-row justify-start gap-2 items-center"
            >
              <FaMobile /> Mobile
            </NavLink>
          </li>
        )}

        <li>
          <details close="true">
            <summary>Other</summary>
            <ul>
              <li>
                <NavLink
                  role="button"
                  to="/broadcast"
                  className="flex flex-row justify-start gap-2 items-center"
                >
                  <FaTowerBroadcast /> Broadcast
                </NavLink>
              </li>
              <li>
                <NavLink
                  role="button"
                  to="/broadcast"
                  className="flex flex-row justify-start gap-2 items-center"
                >
                  <TbBodyScan /> User Request
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </>
  );
};

export default SideNav;
