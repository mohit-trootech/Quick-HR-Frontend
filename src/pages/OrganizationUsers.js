/**Organization Users */
import { useContext, useEffect } from "react";
import OrganizationSidebar from "../components/OrganizationSidebar";
import { OrganizationContext, PreloadContext } from "../context/Contexts";
import Preloader from "../components/Preloader";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import OrganizationUsersTable from "../tables/OrganizationUsersTable";
import { FaMagnifyingGlass } from "react-icons/fa6";
const OrganizationUsers = () => {
  const { getUserData, userData, getOrganizationUsers, users, previous, next } =
    useContext(OrganizationContext);
  const { preload, updatePreloader } = useContext(PreloadContext);

  useEffect(() => {
    userData || getUserData();
    users || getOrganizationUsers("");
  }, [userData, users]);

  useEffect(() => {
    updatePreloader(false);
  }, [users, preload, userData]);

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

  return (
    <>
      {preload ? (
        <Preloader />
      ) : (
        <div className="grid grid-cols-9 gap-2">
          <div className="col-span-2">
            <OrganizationSidebar user={userData} />
          </div>
          <div className="col-span-7">
            <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold">Organization Users</span>
              <div className="breadcrumbs text-sm">
                <ul>
                  <li>
                    <Link to="/dashboard">
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
              <button className="btn btn-sm  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:bg-gradient-to-l transition-all duration-300">
                Holiday Calender View
              </button>
            </div>
            <div className="p-5">
              <div className="overflow-x-auto">
                <table className="w-full text-left table-auto min-w-max">
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
                    {users &&
                      users[0].users.map((user) => {
                        return (
                          <OrganizationUsersTable user={user} key={user.id} />
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrganizationUsers;
