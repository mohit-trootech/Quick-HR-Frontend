/**Sidenav Drawer */
import { CiMenuKebab } from "react-icons/ci";
import Sidebar from "./Sidebar";

const SidenavDrawer = () => {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="btn btn-sm btn-circle lg:hidden"
          >
            <CiMenuKebab />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="bg-base-200 text-base-content min-h-full w-80">
            <Sidebar />
          </ul>
        </div>
      </div>
    </>
  );
};
export default SidenavDrawer;
