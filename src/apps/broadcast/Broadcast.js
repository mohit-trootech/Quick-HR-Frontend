/* eslint-disable react-hooks/exhaustive-deps */
/**Broadcast Page */
/*React Hooks*/
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "firebase/firestore";

/*Contexts */
import {
  DashboardContext,
  PreloadContext,
  PaginationContext,
  BroadcastContext,
} from "../../context/Contexts";

/*Icons */
import { BiHomeAlt } from "react-icons/bi";
import { FaTowerBroadcast } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

/*Components */
import Sidebar from "../../components/Sidebar";
import SidenavDrawer from "../../components/SidenavDrawer";
import NewBroadcastModal from "../../modals/broadcast/NewBroadcastModal";
import Preloader from "../../components/Preloader";
import BroadcastMessageCard from "../../cards/broadcast/BroadcastMessageCard";
import BroadcastDetailModal from "../../modals/broadcast/BroadcastDetailModal";

const Broadcast = () => {
  /**Broadcast Page Component */
  const { app, getFirestoreConfiguration, createCollectionDocument, setDb } =
    useContext(BroadcastContext);

  useEffect(() => {
    app || getFirestoreConfiguration();
  }, []);
  useEffect(() => {
    app && setDb(getFirestore(app));
  }, [app]);
  const { preload } = useContext(PreloadContext);
  const [messageDetail, setMessageDetail] = useState(null);
  const { previous, next } = useContext(PaginationContext);
  const { broadCastMessages, getBroadCastMessages, createBroadCastMessage } =
    useContext(DashboardContext);
  const handleClickPageNumber = (event) => {
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
                      <BiHomeAlt className="mr-2" /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <FaTowerBroadcast className="mr-2" />
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
                createCollectionDocument={createCollectionDocument}
                app={app}
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
