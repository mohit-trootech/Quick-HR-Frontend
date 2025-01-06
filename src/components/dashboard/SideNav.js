/* eslint-disable no-unused-vars */
/**Dashboard Menu */
import { MdDashboard } from "react-icons/md";
import { TbBodyScan, TbFileAlert } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { FaList, FaMoneyCheck, FaMobile } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineMoreTime } from "react-icons/md";
import { FaTowerBroadcast } from "react-icons/fa6";
import { AiOutlineProject } from "react-icons/ai";
const SideNav = ({ customization }) => {
  return (
    <>
      <ul className="menu rounded-box w-full p-0 m-0 gap-y-1">
        <li>
          <NavLink
            role="button"
            to="/"
            className="flex flex-row justify-start gap-2 items-center"
            end
          >
            <MdDashboard /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            role="button"
            to="/leaves/"
            className="flex flex-row justify-start gap-2 items-center"
            end
          >
            <SlCalender /> Leave
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/holidays/"
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
            end
          >
            <FaList /> Holiday
          </NavLink>
        </li>
        {customization && customization.salary && (
          <li>
            <NavLink
              role="button"
              to="/salary/"
              className="flex flex-row justify-start gap-2 items-center"
              end
            >
              <FaMoneyCheck /> Salary
            </NavLink>
          </li>
        )}
        {customization && customization.attendence && (
          <li>
            <NavLink
              role="button"
              to="/salary/"
              className="flex flex-row justify-start gap-2 items-center"
              end
            >
              <TbBodyScan /> Attendence
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            role="button"
            to="/review/"
            className="flex flex-row justify-start gap-2 items-center"
            end
          >
            <VscPreview /> Review
          </NavLink>
        </li>
        {customization && customization.overtime && (
          <li>
            <NavLink
              role="button"
              to="/overtime/"
              className="flex flex-row justify-start gap-2 items-center"
              end
            >
              <MdOutlineMoreTime /> Overtime
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            role="button"
            to="/broadcast"
            className="flex flex-row justify-start gap-2 items-center"
            end
          >
            <FaTowerBroadcast /> Broadcast
          </NavLink>
        </li>
        {customization && customization.device && (
          <li>
            <NavLink
              role="button"
              to="/device/"
              className="flex flex-row justify-start gap-2 items-center"
              end
            >
              <FaMobile /> Devices
            </NavLink>
          </li>
        )}
        {customization && customization.project && (
          <li>
            <NavLink
              role="button"
              to="/project/"
              className="flex flex-row justify-start gap-2 items-center"
              end
            >
              <AiOutlineProject /> Project
            </NavLink>
          </li>
        )}
        {/* <li>
          <details close="true">
            <summary>Other</summary>
            <ul>
              <li>
                <NavLink
                  role="button"
                  to="/broadcast"
                  className="flex flex-row justify-start gap-2 items-center"
                  end
                >
                  <FaTowerBroadcast /> Broadcast
                </NavLink>
              </li>
              <li>
                <NavLink
                  role="button"
                  to="/resignation"
                  className="flex flex-row justify-start gap-2 items-center"
                  end
                >
                  <TbFileAlert /> Resignation
                </NavLink>
              </li>
              <li>
                <NavLink
                  role="button"
                  to="/broadcast"
                  className="flex flex-row justify-start gap-2 items-center"
                  end
                >
                  <TbBodyScan /> User Request
                </NavLink>
              </li>
            </ul>
          </details>  
        </li> */}
      </ul>
    </>
  );
};

export default SideNav;
