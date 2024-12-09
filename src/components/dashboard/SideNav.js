/**Dashboard Menu */
import { MdDashboard } from "react-icons/md";
import { TbBodyScan } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaList, FaMoneyCheck, FaUserTag } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineMoreTime } from "react-icons/md";
import { FaTowerBroadcast } from "react-icons/fa6";
const SideNav = () => {
  return (
    <>
      <ul className="menu rounded-box w-full p-0 m-0 gap-y-1">
        <li>
          <Link
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <MdDashboard /> Dashboard
          </Link>
        </li>
        <li>
          <Link
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <TbBodyScan /> Attendence
          </Link>
        </li>
        <li>
          <Link
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <SlCalender /> Leave
          </Link>
        </li>
        <li>
          <Link
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <FaList /> Holiday
          </Link>
        </li>
        <li>
          <Link
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <FaMoneyCheck /> Salary
          </Link>
        </li>
        <li>
          <Link
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <VscPreview /> Review
          </Link>
        </li>
        <li>
          <Link
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <MdOutlineMoreTime /> Overtime
          </Link>
        </li>
        <li>
          <Link
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <FaUserTag /> User Request
          </Link>
        </li>
        <li>
          <Link
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <FaTowerBroadcast /> Broadcast
          </Link>
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
        <li>
          <Link>Item 3</Link>
        </li>
      </ul>
    </>
  );
};

export default SideNav;
