/* eslint-disable no-unused-vars */
/**Dashboard Menu */
import { MdDashboard } from "react-icons/md";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";
import { FaTowerBroadcast, FaUsersViewfinder } from "react-icons/fa6";
const OrganizationSidenav = () => {
  return (
    <>
      <ul className="menu rounded-box w-full p-0 m-0 gap-y-1">
        <li>
          <NavLink
            role="button"
            to="/organization"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <MdDashboard /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            role="button"
            to="/organization/customization"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <MdOutlineDeveloperMode /> Customization
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/organization/users"
            role="button"
            className="flex flex-row justify-start gap-2 items-center"
          >
            <FaUsersViewfinder /> Users
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default OrganizationSidenav;
