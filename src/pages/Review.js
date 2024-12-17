/* eslint-disable react-hooks/exhaustive-deps */
/**Review Component */
import Sidebar from "../components/Sidebar";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import ReviewModal from "../modals/ReviewModal";
import { useContext, useEffect } from "react";
import { ReviewContext } from "../context/Contexts";
import ReviewCard from "../cards/ReviewCard";
import SidenavDrawer from "../components/SidenavDrawer";
import { VscPreview } from "react-icons/vsc";
const Review = () => {
  /**Review Component daisyUI & Tailwind CSS */
  const { getAllReviews, reviews } = useContext(ReviewContext);
  useEffect(() => {
    getAllReviews("");
  }, []);
  return (
    <>
      <div className="grid grid-cols-9 gap-2">
        <div className="hidden lg:block lg:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-9 lg:col-span-7 mx-3">
          {/* Breadcrump */}
          <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
            <span className="text-xl font-semibold hidden lg:block ">
              Review
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
                  <VscPreview />
                  Review
                </li>
              </ul>
            </div>
          </div>
          {/* Header */}
          <div className="p-5 flex justify-between items-center">
            <p>Review Page</p>
            <button
              className="btn btn-sm btn-primary"
              onClick={() =>
                document.getElementById("review_modal").showModal()
              }
            >
              Create Review
            </button>
          </div>
          {/* Reviews */}
          <div className="">
            {reviews && reviews.length > 0 ? (
              <div className="flex flex-wrap items-center justify-around">
                {reviews.map((review) => {
                  return <ReviewCard key={review.id} review={review} />;
                })}
              </div>
            ) : (
              <div className="alert alert-warning shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span>No Reviews Found</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Review Modal */}
      <ReviewModal />
    </>
  );
};
export default Review;
