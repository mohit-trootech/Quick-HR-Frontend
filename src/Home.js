/**Home Page Base */
/**HR Management required Components */
import Sidebar from "./components/Sidebar";
import Dashboard from "./apps/home/Dashboard";
function Home() {
  /**Home Page with DaisyUI */
  return (
    <>
      <div className="grid grid-cols-9 gap-2">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-7">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default Home;
