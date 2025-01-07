/* eslint-disable react-hooks/exhaustive-deps */
/**Dashboard Sidebar */
/**React Hooks */
import { useContext, useEffect } from "react";

/**Contexts */
import { OrganizationContext, AuthContext } from "../context/Contexts";

/**Components */
import UserCard from "../components/dashboard/UserCard";
import Stats from "../components/dashboard/Stats";
import SideNav from "../components/dashboard/SideNav";
import logo from "../static/img/empty.png";
const Sidebar = () => {
  /**Sidebar Component */
  const { auth } = useContext(AuthContext);
  const { organization, getOrganization, customization } =
    useContext(OrganizationContext);
  useEffect(() => {
    organization || getOrganization();
  }, [auth]);
  return (
    <>
      <div className="min-h-screen sticky top-0 p-2 pr-4 lg:my-2 lg:rounded-lg lg:shadow-xl">
        {organization && (
          <div>
            <div className="flex flex-row justify-start gap-x-2 items-center">
              <img
                src={organization.logo || logo}
                alt="logo"
                className="w-8 h-8"
              />
              <p className="text-xl italic text-gray-400">
                {organization.name}
              </p>
            </div>
            <div className="divider mr-3 my-0"></div>
          </div>
        )}
        <div className="pl-3">
          {/* Card */}
          <UserCard user={auth && auth.user} />
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
