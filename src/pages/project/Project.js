/**Project Home Page */
/**React */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
/**Contexts */
import {
  ProjectsContext,
  PreloadContext,
  PaginationContext,
} from "../../context/Contexts";
/**Icons */
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

/**Components */
import Sidebar from "../../components/Sidebar";
import Preloader from "../../components/Preloader";
import ProjectsTable from "../../tables/ProjectsTable";
import ProjectDetail from "../../modals/ProjectDetail";
const Project = () => {
  const [current, setCurrent] = useState(null);
  const { preload } = useContext(PreloadContext);
  const { projects, getProjects } = useContext(ProjectsContext);
  const { previous, next, count } = useContext(PaginationContext);
  const handleChange = (e) => {
    e.preventDefault();
    getProjects("?search=" + e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    getProjects("?" + e.target.href.split("?")[1]);
  };
  useEffect(() => {
    projects || getProjects("");
  }, []);
  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-9 lg:col-span-7 mx-3">
            {/* Breadcrumb */}
            <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold">Leaves Management</span>
              <div className="breadcrumbs text-sm">
                <ul>
                  <li>
                    <Link to="/">
                      <BiHomeAlt /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <AiOutlineProject />
                    Project
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
                  placeholder="Search Project"
                />
                <FaMagnifyingGlass className="h-4 w-4 opacity-70" />
              </label>
            </div>
            <div className="p-5">
              {(projects && count && (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left table-auto min-w-max">
                      <thead>
                        <tr>
                          <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-normal leading-none text-slate-500">
                              Title
                            </p>
                          </th>
                          <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-normal leading-none text-slate-500">
                              Created
                            </p>
                          </th>
                          <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-normal leading-none text-slate-500">
                              Deadline
                            </p>
                          </th>
                          <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-normal leading-none text-slate-500">
                              Team Lead
                            </p>
                          </th>
                          <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-normal leading-none text-slate-500">
                              Project Manager
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
                        {projects &&
                          projects.map((project) => {
                            return (
                              <ProjectsTable
                                project={project}
                                key={project.id}
                                setCurrent={setCurrent}
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
                    {/* Calender View */}
                  </div>
                  <ProjectDetail project={current} />
                </>
              )) || (
                <>
                  <div className="alert alert-warning shadow-lg">
                    <FaInfoCircle className="h-6 w-6 mr-2" />
                    <span>No Projects Available</span>
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
export default Project;
