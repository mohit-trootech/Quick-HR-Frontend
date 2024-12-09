/**Dashboard Sidebar */
import UserCard from "../components/dashboard/UserCard";
import Stats from "../components/dashboard/Stats";
import SideNav from "../components/dashboard/SideNav";
// import logo from "../static/img/logo.png";
const Sidebar = () => {
  /**Sidebar Component */
  return (
    <>
      <div className="min-h-screen sticky top-0 p-2 my-2 mr-2 rounded-lg shadow-xl">
        {/* Logo
        <div className="pt-2 pb-3 flex flex-row justify-start gap-2 items-center">
          <img src={logo} alt="logo" className="w-8 h-8 mix-blend-difference" />
          <p className="text-xl font-normal italic text-zinc-700">Quick HR</p>
        </div>
        <div className="divider mr-3"></div> */}
        <div className="pl-3">
          {/* Card */}
          <UserCard />
          <div className="divider mr-3"></div>
          {/* Stats */}
          <Stats />
          <div className="divider mr-3"></div>
          {/* SideNav */}
          <SideNav />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
