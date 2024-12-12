/* eslint-disable react-hooks/exhaustive-deps */
/**Organization Dashboard */

import { useContext, useEffect } from "react";
import OrganizationSidebar from "../components/OrganizationSidebar";
import { BiHomeAlt } from "react-icons/bi";
import { OrganizationContext } from "../context/Contexts";
import CreateOrganization from "../modals/CreateOrganization";
import OrganizationDeatils from "../components/OrganizationDeatils";
import image_4o4 from "../static/img/404.gif";
const OrganizationDashboard = () => {
  /**Organization Dashboard Component daisyUI & Tailwind CSS */
  const {
    getUserData,
    userData,
    getOrganizations,
    organizations,
    postOrganization,
  } = useContext(OrganizationContext);
  useEffect(() => {
    getUserData();
    getOrganizations("");
    return () => {};
  }, []);
  return (
    <>
      <div className="grid grid-cols-9 gap-2">
        <div className="col-span-2">
          <OrganizationSidebar user={userData} />
        </div>
        <div className="col-span-7">
          <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
            <span className="text-xl font-semibold">
              Organization Dashboard
            </span>
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <BiHomeAlt /> Dashboard
                </li>
              </ul>
            </div>
          </div>
          <div className="p-5">
            {(organizations && (
              <OrganizationDeatils organizations={organizations} />
            )) || (
              <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                  <div className="max-w-md">
                    <img src={image_4o4} alt="404_notfound" />
                    <p className="py-6">
                      Please Create a New Organization to continue.
                    </p>
                    <button
                      onClick={() =>
                        document
                          .getElementById("create_organization")
                          .showModal()
                      }
                      className="btn btn-primary"
                    >
                      Get Started
                    </button>
                    <CreateOrganization postOrganization={postOrganization} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationDashboard;
