/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/exhaustive-deps */
/**Organization Users */
import { useContext, useEffect } from "react";
import OrganizationSidebar from "../../components/organization/OrganizationSidebar";
import {
  AuthContext,
  OrganizationContext,
  PaginationContext,
  PreloadContext,
} from "../../context/Contexts";
import Preloader from "../../components/Preloader";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import OrganizationUsersTable from "../../tables/OrganizationUsersTable";
import { FaMagnifyingGlass } from "react-icons/fa6";
import OrganizationCreateUserModal from "../../modals/OrganizationCreateUserModal";
import CreateDepartmentModal from "../../modals/CreateDepartment";
const OrganizationUsers = () => {
  const {
    users,
    organization,
    getOrganization,
    getOrganizationUsers,
    createOrganizationUser,
    removeOrganizationUser,
    departments,
    getDepartments,
  } = useContext(OrganizationContext);
  const { preload, updatePreloader } = useContext(PreloadContext);
  const { previous, next } = useContext(PaginationContext);
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    users || getOrganizationUsers();
    departments || getDepartments();
  }, [auth, users]);
  useEffect(() => {
    organization || getOrganization();
  }, [auth, organization]);

  useEffect(() => {
    updatePreloader(false);
  }, [users, preload, auth]);

  const handleChange = (event) => {
    getOrganizationUsers(`?search=${event.target.value}`);
  };
  const handleClick = (event) => {
    event.preventDefault();
    let url =
      event.target.href.split("?")[1] === undefined
        ? "page=1"
        : event.target.href.split("?")[1];
    getOrganizationUsers("?" + url);
  };
  const handleRemoveClick = (event) => {
    event.preventDefault();
    removeOrganizationUser(event.target.getAttribute("data-user"));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    createOrganizationUser(new FormData(form));
  };
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
                Organization Users
              </span>
              <div className="breadcrumbs text-sm">
                <ul>
                  <li>
                    <Link to="/organization/">
                      <BiHomeAlt /> Dashboard
                    </Link>
                  </li>
                  <li>Organization Users</li>
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
              <div className="flex items-center gap-2">
                <button
                  className="btn btn-sm"
                  role="button"
                  onClick={() => {
                    document.getElementById("create_department").showModal();
                  }}
                >
                  Create New Department
                </button>
                <CreateDepartmentModal />
                <button
                  onClick={() => {
                    document
                      .getElementById("create_organization_user")
                      .showModal();
                  }}
                  className="btn btn-sm  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:bg-gradient-to-l transition-all duration-300"
                >
                  Create User
                </button>
              </div>
              <OrganizationCreateUserModal
                handleSubmit={handleSubmit}
                departments={departments}
              />
            </div>
            <div className="p-5">
              {(users && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left table-auto min-w-max rounded-xl">
                    <thead className="capitalize">
                      <tr>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                          <p className="text-sm font-normal leading-none text-slate-500">
                            ID
                          </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                          <p className="text-sm font-normal leading-none text-slate-500">
                            Image
                          </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                          <p className="text-sm font-normal leading-none text-slate-500">
                            Username
                          </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                          <p className="text-sm font-normal leading-none text-slate-500">
                            Full Name
                          </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                          <p className="text-sm font-normal leading-none text-slate-500">
                            Action
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => {
                        return (
                          <OrganizationUsersTable
                            user={user.user}
                            key={user.id}
                            handleClick={handleRemoveClick}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                  {/* Pagination */}
                  <div className="join m-5 flex justify-end">
                    <a
                      role="button"
                      onClick={handleClick}
                      href={previous}
                      disabled={!previous}
                      className="btn btn-info join-item"
                    >
                      Previous
                    </a>
                    <a
                      role="button"
                      onClick={handleClick}
                      disabled={!next}
                      href={next}
                      className="btn btn-primary join-item"
                    >
                      Next
                    </a>
                  </div>
                </div>
              )) || (
                <div role="alert" className="alert mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info h-6 w-6 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>No users available in organization.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrganizationUsers;
