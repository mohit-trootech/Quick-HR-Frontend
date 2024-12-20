/* eslint-disable react-hooks/exhaustive-deps */
/**Holiday Component */
/**React Hooks */
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";

/**Contexts */
import { PreloadContext, ResignationContext } from "../../context/Contexts";

/**Components */
import Sidebar from "../../components/Sidebar";
import Preloader from "../../components/Preloader";
import ResginationCard from "../../cards/resignation/ResignationCard";

/**Icons */
import { BiHomeAlt } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { TbFileAlert } from "react-icons/tb";

/**Utility Functions & Constants */
import SidenavDrawer from "../../components/SidenavDrawer";

const Resignation = () => {
  const {
    resignations,
    getResignations,
    // createResignation
  } = useContext(ResignationContext);
  const { preload } = useContext(PreloadContext);
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  useEffect(() => {
    resignations || getResignations();
  }, []);
  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-9 lg:col-span-7 mx-3">
            <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold hidden lg:block">
                Resgination Data
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
                    <TbFileAlert />
                    Holidays
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between my-5 items-center">
              <label className="input input-sm input-bordered flex items-center gap-2 w-1/3">
                <input
                  type="text"
                  onChange={handleChange}
                  className="grow"
                  placeholder="Search"
                />
                <FaMagnifyingGlass className="h-4 w-4 opacity-70" />
              </label>
            </div>
            <div className="p-5">
              {(resignations &&
                resignations.map((resignation) => (
                  <ResginationCard
                    key={resignation.id}
                    resignation={resignation}
                  />
                ))) || (
                <>
                  <div className="alert alert-warning shadow-lg">
                    <FaInfoCircle className="h-6 w-6 mr-2" />
                    <span>No Resignation data found.</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Resignation;
