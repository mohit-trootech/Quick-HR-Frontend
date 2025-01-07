/* eslint-disable react-hooks/exhaustive-deps */
/**Dashboard UserCard Coponent */
import { NavLink } from "react-router-dom";
import profile from "../../static/img/no-profile.webp";
import { FaArrowDown } from "react-icons/fa";
import { LogOut } from "../../utils/LogOut";
import Options from "../ThemeOptions";
import { ThemeContext } from "../../context/Contexts";
import { useContext, useEffect } from "react";
const UserCard = ({ user }) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <div className="flex justify-start gap-2 items-center py-3">
        <img
          src={
            (user && user.image && "http://localhost:8000/" + user.image) ||
            profile
          }
          alt="profile"
          className="rounded-lg w-14 h-14"
        />
        <div className="w-full">
          <p className="text-md text-gray-500">Welcome,</p>
          <div className="text-lg font-semibold flex flex-row justify-start gap-3 items-center">
            <span className="capitalize truncate">
              {(user && user.get_full_name) || (user && user.username)}
            </span>
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} className="btn btn-xs btn-circle">
                <FaArrowDown className="text-zinc-500" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content gap-y-2 menu bg-base-100 rounded-box z-[999] w-40 p-2 shadow border"
              >
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                  <p onClick={LogOut}>Logout</p>
                </li>
                <li>
                  <select
                    className="select select-bordered"
                    defaultValue={theme}
                    onChange={updateTheme}
                  >
                    <Options />
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
