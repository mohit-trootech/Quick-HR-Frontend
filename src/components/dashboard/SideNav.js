/* eslint-disable no-unused-vars */
/**Dashboard Menu */
import { MdDashboard } from "react-icons/md";
import { TbBodyScan } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { FaList, FaMoneyCheck, FaUserTag } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineMoreTime } from "react-icons/md";
import { FaTowerBroadcast } from "react-icons/fa6";
const SideNav = () => {
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
        {/* <li>
          <NavLink
            role="button"
            to="/attendence"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <TbBodyScan /> Attendence
          </NavLink>
        </li> */}
        <li>
          <NavLink
            role="button"
            to="/leaves"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <SlCalender /> Leave
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/holidays"
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <FaList /> Holiday
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            role="button"
            to="/salary"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <FaMoneyCheck /> Salary
          </NavLink>
        </li> */}
        <li>
          <NavLink
            role="button"
            to="/review"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <VscPreview /> Review
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            role="button"
            to="/overtime"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <MdOutlineMoreTime /> Overtime
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink
            role="button"
            to="/users"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <FaUserTag /> User Request
          </NavLink>
        </li> */}
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
          <details close="true">
            <summary>Parent</summary>
            <ul>
              <li>
                <Link>Submenu 1</Link>
              </li>
              <li>
                <Link>Submenu 2</Link>
              </li>
              <li>
                <details close="true">
                  <summary>Parent</summary>
                  <ul>
                    <li>
                      <Link>Submenu 1</Link>
                    </li>
                    <li>
                      <Link>Submenu 2</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </>
  );
};

export default SideNav;
