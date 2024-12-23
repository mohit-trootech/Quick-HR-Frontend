/* eslint-disable react-hooks/exhaustive-deps */
/**Dashboard UserCard Coponent */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../static/img/no-profile.webp";
import { FaArrowDown } from "react-icons/fa";
import { LogOut } from "../../utils/LogOut";
const UserCard = ({ auth }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth && setUser(auth.user);
  }, [auth]);
  return (
    <>
      <div className="flex justify-start gap-2 items-center py-3">
        <img
          src={(user && user.image) || profile}
          alt="profile"
          className="rounded-lg w-14 h-14"
        />
        <div>
          <p className="text-md text-zinc-500">Welcome,</p>
          <div className="text-lg font-semibold text-zinc-700 flex flex-row justify-start gap-2 items-center">
            <span className="capitalize">
              {(user && user.get_full_name) || (user && user.username)}
            </span>
            <div className="dropdown">
              <div tabIndex={0} className="btn btn-xs btn-circle">
                <FaArrowDown className="text-zinc-500" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[999] w-40 p-2 shadow border"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <p onClick={LogOut}>Logout</p>
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
