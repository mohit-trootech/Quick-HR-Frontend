/**Dashboard UserCard Coponent */
import profile from "../../static/img/profile.jpg";
import { FaArrowDown } from "react-icons/fa";
const UserCard = () => {
  return (
    <>
      <div className="flex justify-start gap-2 items-center py-3">
        <img src={profile} alt="profile" className="rounded-lg w-14 h-14" />
        <div>
          <p className="text-md text-zinc-500">Welcome,</p>
          <div className="text-lg font-semibold text-zinc-700 flex flex-row justify-start gap-2 items-center">
            <span>Darth Vader</span>
            <div className="dropdown">
              <div tabIndex={0} className="btn btn-xs btn-circle">
                <FaArrowDown className="text-zinc-500" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[999] w-40 p-2 shadow border"
              >
                <li>
                  <p>Item 1</p>
                </li>
                <li>
                  <p>Item 2</p>
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
