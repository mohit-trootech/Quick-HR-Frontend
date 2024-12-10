/**Attendence Page */

import Sidebar from "../components/Sidebar";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const Attendence = () => {
  /**Attendence Component daisyUI & Tailwind CSS */
  return (
    <>
      <div className="grid grid-cols-9 gap-2">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-7">
          <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
            <span className="text-xl font-semibold">Attendence</span>
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <Link to="/">
                    <BiHomeAlt /> Dashboard
                  </Link>
                </li>
                <li>Attendence</li>
              </ul>
            </div>
          </div>
          <div className="p-5">
            <p>Attendence Page</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendence;
