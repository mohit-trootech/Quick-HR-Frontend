/* eslint-disable react-hooks/exhaustive-deps */
/**Dashboard Sidebar */
import UserCard from "../components/dashboard/UserCard";
import Stats from "../components/dashboard/Stats";
import SideNav from "../components/dashboard/SideNav";
import { useContext, useEffect } from "react";
import { OrganizationContext, AuthContext } from "../context/Contexts";
import logo from "../static/img/empty.png";
// import logo from "../static/img/logo.png";
const Sidebar = () => {
  /**Sidebar Component */
  const { auth } = useContext(AuthContext);
  const { organization, getOrganization, customization } =
    useContext(OrganizationContext);
  useEffect(() => {
    getOrganization("");
  }, [auth]);
  return (
    <>
      <div className="min-h-screen sticky top-0 p-2 my-2 mr-2 rounded-lg shadow-xl">
        {organization && (
          <div>
            <div className="flex flex-row justify-start gap-x-2 items-center">
              <img
                src={organization.logo || logo}
                alt="logo"
                className="w-8 h-8"
              />
              <p className="text-xl italic text-zinc-700">
                {organization.name}
              </p>
            </div>
            <div className="divider mr-3 my-0"></div>
          </div>
        )}
        <div className="pl-3">
          {/* Card */}
          <UserCard user={auth} />
          <div className="divider mr-3 my-0"></div>
          {/* Stats */}
          <Stats />
          <div className="divider mr-3 my-0"></div>
          {/* SideNav */}
          <SideNav customization={customization} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
