/* eslint-disable react-hooks/exhaustive-deps */
/**Organization Dashboard */

import { useContext, useEffect } from "react";
import OrganizationSidebar from "../../components/OrganizationSidebar";
import { BiHomeAlt } from "react-icons/bi";
import {
  AuthContext,
  OrganizationContext,
  PreloadContext,
} from "../../context/Contexts";
import CreateOrganization from "../../modals/CreateOrganization";
import OrganizationDetails from "../../components/OrganizationDetails"; // Fixed typo in import
import image_4o4 from "../../static/img/404.gif";
import Preloader from "../../components/Preloader";

const OrganizationDashboard = () => {
  /**Organization Dashboard Component daisyUI & Tailwind CSS */
  const { getOrganization, organization, postOrganization } =
    useContext(OrganizationContext);
  const { auth } = useContext(AuthContext);
  const { preload, updatePreloader } = useContext(PreloadContext);

  useEffect(() => {
    organization || getOrganization("");
  }, [auth, organization]);

  useEffect(() => {
    auth && organization && updatePreloader();
  }, [organization, preload]);

  return (
    <>
      {preload ? (
        <Preloader />
      ) : (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <OrganizationSidebar user={auth} organization={organization} />
          </div>
          <div className="col-span-9 lg:col-span-7 mx-3">
            <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold hidden lg:block">
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
              {organization ? (
                <OrganizationDetails organization={organization} />
              ) : (
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
      )}
    </>
  );
};

export default OrganizationDashboard;
