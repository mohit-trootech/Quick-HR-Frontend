/**Attendence Page */

import Sidebar from "../../components/Sidebar";
import { BiHomeAlt } from "react-icons/bi";
import { TbBodyScan } from "react-icons/tb";
import { Link } from "react-router-dom";
import SidenavDrawer from "../../components/SidenavDrawer";
const Attendence = () => {
  /**Attendence Component daisyUI & Tailwind CSS */
  return (
    <>
      <div className="grid grid-cols-9 gap-2">
        <div className="hidden lg:block lg:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-9 lg:col-span-7 mx-3">
          <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
            <span className="text-xl font-semibold hidden lg:block">
              Attendence
            </span>
            <div className="breadcrumbs text-sm flex flex-row items-center justify-start gap-2">
              <SidenavDrawer />
              <ul>
                <li>
                  <Link to="/">
                    <BiHomeAlt /> Dashboard
                  </Link>
                </li>
                <li>
                  <TbBodyScan />
                  Attendence
                </li>
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
