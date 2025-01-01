import { AuthContext } from "../../context/Contexts";
import { useContext } from "react";
const Stats = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      {auth && (
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col px-2 justify-center items-center">
            <div className="stat-value text-base uppercase">
              {auth.department.name}
            </div>
            <div className="stat-desc">Department</div>
          </div>
          <div className="bg-neutral-400 h-10 w-px"></div>
          <div className="flex flex-col px-2 justify-center items-center">
            <div className="stat-value text-base uppercase">
              {auth.designation}
            </div>
            <div className="stat-desc">Designation</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Stats;
