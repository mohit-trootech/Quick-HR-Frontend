/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/**Organization Customization Page */
import { useContext, useEffect } from "react";
import OrganizationSidebar from "../components/OrganizationSidebar";
import { BiHomeAlt, BiInfoCircle, BiPencil } from "react-icons/bi";
import { OrganizationContext, PreloadContext } from "../context/Contexts";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
const OrganizationCustomization = () => {
  const {
    getUserData,
    userData,
    getOrganizations,
    organizations,
    updateCustomization,
  } = useContext(OrganizationContext);
  const { preload, updatePreloader } = useContext(PreloadContext);

  useEffect(() => {
    userData || getUserData();
    organizations || getOrganizations("");
  }, [userData, organizations]);

  useEffect(() => {
    userData && organizations && updatePreloader();
  }, [userData, organizations, preload]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCustomization(new FormData(event.target));
  };

  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="col-span-2">
            <OrganizationSidebar user={userData} />
          </div>
          <div className="col-span-7">
            <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold">
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
              <p className="text-zinc-500">
                - Must add at least 4 customizations
              </p>
            </div>
            {(organizations && (
              <form method="POST" name="customization" onSubmit={handleSubmit}>
                <div className="p-5 mt-5 mx-auto max-w-md border rounded-xl hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-500">
                  {/* Attendence */}
                  <input
                    name="id"
                    hidden
                    defaultValue={organizations.customization.id}
                  />
                  <div className="form-control hover:bg-base-200 border-b px-1 px-2 rounded-t-lg">
                    <label className="label cursor-pointer">
                      <span className="label-text text-lg">Attendence</span>
                      <input
                        type="checkbox"
                        defaultChecked={organizations.customization.attendence}
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
                        defaultChecked={organizations.customization.overtime}
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
                        defaultChecked={organizations.customization.project}
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
                        defaultChecked={organizations.customization.salary}
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
                        defaultChecked={organizations.customization.device}
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
              <div>
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
