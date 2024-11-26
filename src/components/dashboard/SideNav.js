/**Dashboard Menu */
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { TbBodyScan } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <>
      <ul className="menu rounded-box w-full p-0 m-0">
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
          <details open>
            <summary>Parent</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <details open>
                  <summary>Parent</summary>
                  <ul>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </>
  );
};

export default SideNav;
