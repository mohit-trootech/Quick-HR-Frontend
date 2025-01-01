/**Organization Details */
import emptyImg from "../../static/img/empty.png";
import { TbUsersGroup, TbTrophy } from "react-icons/tb";
import UpdateOrganization from "../../modals/UpdateOrganization";
const OrganizationDetails = ({ organization }) => {
  return (
    <>
      <div className="card static hover:shadow-xl transition-all duration-300">
        <div className="card-content static border p-4 rounded-xl">
          <div className="flex justify-between items-center gap-3">
            <div className="flex items-center gap-2 truncate">
              <img
                src={organization.logo || emptyImg}
                alt="logo"
                className="avtar rounded-full w-10 h-10"
              />
              <p>{organization.name}</p>
            </div>
            <div>
              <button
                className="btn btn-sm"
                onClick={() =>
                  document.getElementById("update_organization").showModal()
                }
              >
                Customize Label
              </button>
              <UpdateOrganization organization={organization} />
            </div>
          </div>
          <div className="divider mr-3 my-0"></div>
          <div className="relative group flex items-center justify-center overflow-hidden">
            <div className="group relative mx-auto w-8/12 h-72">
              <div className="truncate relative leading-7 -left-9 top-0 z-10 w-full h-full rounded-xl bg-[#3d348b] px-5 py-3 text-base font-semibold transition-all duration-700 group-hover:-left-12 md:group-hover:-left-14">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <TbTrophy className="text-xl text-secondary" />
                    <p className="text-white opacity-0 delay-200 duration-700 ease-in-out group-hover:opacity-100">
                      1,300 Goals
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbUsersGroup className="text-xl text-secondary" />
                    <p className="text-white opacity-0 delay-200 duration-700 ease-in-out group-hover:opacity-100">
                      {organization.count || "No"} Users
                    </p>
                  </div>
                  <p>
                    <a
                      href="https://tailwindcss.com/docs"
                      className="text-sky-500 opacity-0 hover:text-sky-600"
                    >
                      &rarr;
                    </a>
                  </p>
                </div>
              </div>
              <div className="absolute -right-5 top-0 z-20 flex w-full flex-col gap-4 self-end rounded-xl rounded-l-2xl border-none bg-[#7678ed] px-5 py-3 text-base font-semibold h-full transition-all duration-700 group-hover:-right-24 group-hover:w-full group-hover:rounded-l-lg">
                <div className="flex flex-col border rounded-xl p-4 bg-base-200 shadow flex-wrap gap-y-1">
                  <div
                    className="flex flex-row items-center gap-x-1 "
                    aria-disabled
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-success "
                      defaultChecked={organization.customization.attendence}
                      disabled={true}
                    />
                    <div className="stat-title">Attendence</div>
                  </div>
                  <div
                    className="flex flex-row items-center gap-x-1 "
                    aria-disabled
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-success "
                      defaultChecked={organization.customization.device}
                      disabled={true}
                    />
                    <div className="stat-title">Device</div>
                  </div>
                  <div
                    className="flex flex-row items-center gap-x-1 "
                    aria-disabled
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-success "
                      defaultChecked
                      disabled={true}
                    />
                    <div className="stat-title">Leave</div>
                  </div>
                  <div
                    className="flex flex-row items-center gap-x-1 "
                    aria-disabled
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-success "
                      defaultChecked={organization.customization.overtime}
                      disabled={true}
                    />
                    <div className="stat-title">Overtime</div>
                  </div>
                  <div
                    className="flex flex-row items-center gap-x-1 "
                    aria-disabled
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-success "
                      defaultChecked={organization.customization.project}
                      disabled={true}
                    />
                    <div className="stat-title">Project</div>
                  </div>
                  <div
                    className="flex flex-row items-center gap-x-1 "
                    aria-disabled
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-success"
                      defaultChecked
                      disabled={true}
                    />
                    <div className="stat-title">Salary</div>
                  </div>
                  <div
                    className="flex flex-row items-center gap-x-1 "
                    aria-disabled
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-success "
                      defaultChecked={organization.customization.salary}
                      disabled={true}
                    />
                    <div className="stat-title">Leave</div>
                  </div>
                  <div
                    className="flex flex-row items-center gap-x-1 "
                    aria-disabled
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-success "
                      defaultChecked
                      disabled={true}
                    />
                    <div className="stat-title">Holidays</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationDetails;
