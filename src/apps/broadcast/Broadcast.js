/* eslint-disable react-hooks/exhaustive-deps */
/**Broadcast Page */
import { useContext, useState } from "react";
import {
  DashboardContext,
  PreloadContext,
  PaginationContext,
} from "../../context/Contexts";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import SidenavDrawer from "../../components/SidenavDrawer";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaTowerBroadcast } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import NewBroadcastModal from "../../modals/broadcast/NewBroadcastModal";
import Preloader from "../../components/Preloader";
import BroadcastMessageCard from "../../cards/broadcast/BroadcastMessageCard";
import BroadcastDetailModal from "../../modals/broadcast/BroadcastDetailModal";
const Broadcast = () => {
  /**Broadcast Page Component */
  // function notifyMe() {
  //   if (!("Notification" in window)) {
  //     // Check if the browser supports notifications
  //     alert("This browser does not support desktop notification");
  //   } else if (Notification.permission === "granted") {
  //     // Check whether notification permissions have already been granted;
  //     // if so, create a notification
  //     const notification = new Notification("Hi there!");
  //     // …
  //   } else if (Notification.permission !== "denied") {
  //     // We need to ask the user for permission
  //     Notification.requestPermission().then((permission) => {
  //       // If the user accepts, let's create a notification
  //       if (permission === "granted") {
  //         const notification = new Notification("Hi there!");
  //         // …
  //       }
  //     });
  //   }
  // }
  const { preload } = useContext(PreloadContext);
  const [messageDetail, setMessageDetail] = useState(null);
  const { previous, next } = useContext(PaginationContext);
  const { broadCastMessages, getBroadCastMessages, createBroadCastMessage } =
    useContext(DashboardContext);
  const handleClickPageNumber = (event) => {
    event.preventDefault();
    event.preventDefault();
    let url =
      event.target.href.split("?")[1] === undefined
        ? "page=1"
        : event.target.href.split("?")[1];
    getBroadCastMessages("?" + url);
  };
  const handleClick = (message) => {
    setMessageDetail(message);
    document.getElementById(`broadcast_detail`).showModal();
  };
  useEffect(() => {
    broadCastMessages || getBroadCastMessages();
  }, []);
  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-9 lg:col-span-7 mx-3">
            <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold hidden lg:block">
                Broadcast
              </span>
              <div className="breadcrumbs text-sm flex flex-row items-center justify-start gap-2">
                <SidenavDrawer />
                <ul>
                  <li>
                    <Link to="/">
                      <BiHomeAlt /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <FaTowerBroadcast />
                    Broadcast
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-end my-5 items-center">
              <button
                to="/broadcast/new"
                onClick={() =>
                  document.getElementById("new_broadcast").showModal()
                }
                className="btn btn-sm btn-primary"
              >
                New Broadcast
              </button>
              <NewBroadcastModal
                createBroadCastMessage={createBroadCastMessage}
              />
            </div>
            <div className="p-5">
              {(broadCastMessages && (
                <>
                  <div className="flex flex-col md:grid md:grid-cols-3 gap-3 items-center justify-around flex-wrap">
                    <>
                      {broadCastMessages.map((message, index) => (
                        <BroadcastMessageCard
                          key={index}
                          message={message}
                          handleClick={handleClick}
                        />
                      ))}
                    </>
                    <BroadcastDetailModal messageDetail={messageDetail} />
                  </div>
                  {/* Pagination */}
                  <div className="join m-5 flex justify-end">
                    <a
                      role="button"
                      onClick={handleClickPageNumber}
                      href={previous}
                      disabled={!previous}
                      className="btn btn-info join-item"
                    >
                      Previous
                    </a>
                    <a
                      role="button"
                      onClick={handleClickPageNumber}
                      disabled={!next}
                      href={next}
                      className="btn btn-primary join-item"
                    >
                      Next
                    </a>
                  </div>
                </>
              )) || (
                <>
                  <div className="alert shadow-lg">
                    <FaInfoCircle className="h-6 w-6 mr-2" />
                    <span>No Broadcast Messages Found</span>
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
export default Broadcast;
