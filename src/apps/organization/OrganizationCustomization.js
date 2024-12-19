/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/**Organization Customization Page */
import { useContext, useEffect } from "react";
import OrganizationSidebar from "../../components/organization/OrganizationSidebar";
import { BiHomeAlt, BiInfoCircle, BiPencil } from "react-icons/bi";
import {
  AuthContext,
  OrganizationContext,
  PreloadContext,
} from "../../context/Contexts";
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";
const OrganizationCustomization = () => {
  const { auth } = useContext(AuthContext);
  const { getOrganization, organization, updateCustomization, customization } =
    useContext(OrganizationContext);
  const { preload, updatePreloader } = useContext(PreloadContext);

  useEffect(() => {
    organization || getOrganization("");
  }, [auth]);

  useEffect(() => {
    organization && updatePreloader();
  }, [organization, preload]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCustomization(new FormData(event.target));
  };

  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <OrganizationSidebar user={auth} organization={organization} />
          </div>
          <div className="col-span-9 lg:col-span-7 mx-3">
            <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold hidden lg:block">
                Organization Customization
              </span>
              <div className="breadcrumbs text-sm">
                <ul>
                  <li>
                    <Link to="/dashboard">
                      <BiHomeAlt className="mr-2" /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <BiPencil className="mr-1" /> Customization
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                Please edit the items below for your Organization Portal.
              </h1>
            </div>
            {(organization && (
              <form method="POST" name="customization" onSubmit={handleSubmit}>
                <div className="p-5 mt-5 mx-auto max-w-md border rounded-xl hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-500">
                  {/* Attendence */}
                  <input
                    name="id"
                    hidden
                    defaultValue={
                      (organization && organization.id) ||
                      (customization && customization.id) ||
                      null
                    }
                  />
                  <div className="form-control hover:bg-base-200 border-b px-1 px-2 rounded-t-lg">
                    <label className="label cursor-pointer">
                      <span className="label-text text-lg">Attendence</span>
                      <input
                        type="checkbox"
                        defaultChecked={customization.attendence}
                        name="attendence"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                  {/* Leave */}
                  <div className="form-control hover:bg-base-200 border-b px-1 px-2 rounded-t-lg">
                    <label className="label cursor-pointer">
                      <span className="label-text text-lg">
                        <span>
                          Leave<sup>*</sup>
                        </span>
                      </span>
                      <input
                        type="checkbox"
                        defaultChecked
                        name="leave"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                  {/* Overtime */}
                  <div className="form-control hover:bg-base-200 border-b px-1 px-2 rounded-t-lg">
                    <label className="label cursor-pointer">
                      <span className="label-text text-lg">Overtime</span>
                      <input
                        type="checkbox"
                        name="overtime"
                        defaultChecked={customization.overtime}
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                  {/* Project */}
                  <div className="form-control hover:bg-base-200 border-b px-1 px-2 rounded-t-lg">
                    <label className="label cursor-pointer">
                      <span className="label-text text-lg">Project</span>
                      <input
                        type="checkbox"
                        defaultChecked={customization.project}
                        name="project"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                  {/* Review */}
                  <div className="form-control hover:bg-base-200 border-b px-1 px-2 rounded-t-lg">
                    <label className="label cursor-pointer">
                      <span className="label-text text-lg">
                        Review<sup>*</sup>
                      </span>
                      <input
                        type="checkbox"
                        defaultChecked
                        name="review"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                  {/* Salary */}
                  <div className="form-control hover:bg-base-200 border-b px-1 px-2 rounded-t-lg">
                    <label className="label cursor-pointer">
                      <span className="label-text text-lg">Salary</span>
                      <input
                        type="checkbox"
                        defaultChecked={customization.salary}
                        name="salary"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                  {/* Device */}
                  <div className="form-control hover:bg-base-200 border-b px-1 px-2 rounded-t-lg">
                    <label className="label cursor-pointer">
                      <span className="label-text text-lg">Device</span>
                      <input
                        type="checkbox"
                        defaultChecked={customization.device}
                        name="device"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                  {/* Holiday */}
                  <div className="form-control hover:bg-base-200 border-b px-1 px-2 rounded-t-lg">
                    <label className="label cursor-pointer">
                      <span className="label-text text-lg">
                        Holiday<sup>*</sup>
                      </span>
                      <input
                        type="checkbox"
                        defaultChecked
                        name="holiday"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                  <button type="submit" className="btn btn-info mt-5 w-full">
                    Save
                  </button>
                </div>
              </form>
            )) || (
              <div className="mt-5">
                <div role="alert" className="alert cursor-help">
                  <BiInfoCircle className="stroke-info h-6 w-6 shrink-0" />
                  <span>
                    Unable to load data please contact adminstration for help.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OrganizationCustomization;
