/**Broad Cast Messages Component */
import { BsArrowDownLeftCircleFill, BsInfo } from "react-icons/bs";
import { useContext } from "react";
import { DashboardContext } from "../../context/Contexts";
import BroadCastMessages from "./BroadCastMesages";
const Broadcast = () => {
  /**BroadCast Component using DaisyUI & Tailwind CSS */
  const { broadCastMessages } = useContext(DashboardContext);
  return (
    <>
      <div className="card static bg-base-100 shadow-md transition duration-250 hover:shadow-xl w-full">
        <div className="card-body">
          <div className="flex flex-row justify-start gap-x-2 items-center">
            <h2 className="card-title capitalize">Broadcast Messages</h2>
            <span>
              <BsArrowDownLeftCircleFill className="hover:text-primary hover:rotate-180 transition duration-200" />
            </span>
          </div>
          {(broadCastMessages &&
            broadCastMessages.length > 0 &&
            broadCastMessages.map((message) => (
              <BroadCastMessages message={message} key={message.id} />
            ))) || (
            <div
              role="alert"
              className="flex items-center gap-x-1 bg-base-200 p-2 rounded-lg cursor-pointer"
            >
              <BsInfo className="h-6 w-6 bg-zinc-300 rounded-full" />
              <span className="text-sm">No BroadCase Available.</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Broadcast;
