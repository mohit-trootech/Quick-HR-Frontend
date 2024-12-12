/**Organization Sidebar */
import UserCard from "../components/dashboard/UserCard";
import OrganizationSidenav from "../components/dashboard/OrganizationSidenav";
// import logo from "../static/img/logo.png";
const OrganizationSidebar = ({ user }) => {
  /**Sidebar Component */
  return (
    <>
      <div className="min-h-screen sticky top-0 p-2 my-2 mr-2 rounded-lg shadow-xl">
        {/* <div className="pt-2 pb-3 flex flex-row justify-start gap-2 items-center">
          <img src={logo} alt="logo" className="w-8 h-8 mix-blend-difference" />
          <p className="text-xl font-normal italic text-zinc-700">Quick HR</p>
        </div>
        <div className="divider mr-3"></div> */}
        <div className="pl-3">
          {/* Card */}
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
