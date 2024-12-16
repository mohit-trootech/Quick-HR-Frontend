/**Organization Sidebar */
import UserCard from "../components/dashboard/UserCard";
import OrganizationSidenav from "../components/dashboard/OrganizationSidenav";
import logo from "../static/img/logo.png";
const OrganizationSidebar = ({ user, organization }) => {
  /**Sidebar Component */
  return (
    <>
      <div className="min-h-screen sticky top-0 p-2 my-2 mr-2 rounded-lg shadow-xl">
        <div className="pl-3">
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
              <div className="divider"></div>
            </div>
          )}
          {/* Profile */}
          <UserCard user={user} />
          <div className="divider mr-3"></div>

          {/* Organization SideNav */}
          <OrganizationSidenav />
        </div>
      </div>
    </>
  );
};

export default OrganizationSidebar;
