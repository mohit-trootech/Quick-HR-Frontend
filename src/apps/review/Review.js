/* eslint-disable react-hooks/exhaustive-deps */
/**React Hooks */
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ReviewContext,
  AuthContext,
  PreloadContext,
  PaginationContext,
} from "../../context/Contexts";
import { MANAGER } from "../../utils/contants";
/**Components */
import Sidebar from "../../components/Sidebar";
import ReviewModal from "../../modals/review/ReviewModal";
import RecentReviewModal from "../../modals/review/RecentReviewModal";
import SidenavDrawer from "../../components/SidenavDrawer";
import ReviewCard from "../../cards/review/ReviewCard";
import Preloader from "../../components/Preloader";
import FilterReviews from "../../components/review/FilterReviews";
/**Icons */
import { BiHomeAlt } from "react-icons/bi";
import { VscPreview } from "react-icons/vsc";
const Review = () => {
  /**Review Component daisyUI & Tailwind CSS */
  const { auth } = useContext(AuthContext);
  const { previous, next } = useContext(PaginationContext);
  const { preload } = useContext(PreloadContext);
  const { getAllReviews, reviews } = useContext(ReviewContext);
  const handleClick = (event) => {
    event.preventDefault();
    let url =
      event.target.href.split("?")[1] === undefined
        ? "page=1"
        : event.target.href.split("?")[1];
    getAllReviews("?" + url);
  };
  useEffect(() => {
    getAllReviews();
  }, []);
  return (
    <>
      {(preload && <Preloader />) || (
        <>
          <div className="grid grid-cols-9 gap-2">
            <div className="hidden lg:block lg:col-span-2">
              <Sidebar />
            </div>
            <div className="col-span-9 lg:col-span-7 mx-3">
              {/* Breadcrump */}
              <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
                <span className="text-xl font-semibold hidden lg:block ">
                  Review Management
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
              <div className="p-5 flex justify-between items-center gap-3">
                {/* Filter Review Based on Month & Year */}
                <div>
                  <FilterReviews getAllReviews={getAllReviews} />
                </div>
                <div className="flex gap-3 items-center">
                  {auth && auth.designation === MANAGER && (
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() =>
                        document.getElementById("review_modal").showModal()
                      }
                    >
                      Create Review
                    </button>
                  )}
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() =>
                      document.getElementById("recent_review_modal").showModal()
                    }
                  >
                    Recent Review
                  </button>
                  <RecentReviewModal />
                </div>
              </div>
              {/* Reviews */}
              <div className="">
                {reviews && reviews.length > 0 ? (
                  <div key={reviews.id}>
                    <div className="flex flex-wrap items-center justify-around">
                      {reviews.map((review) => {
                        return <ReviewCard key={review.id} review={review} />;
                      })}
                    </div>
                    {/* Pagination */}
                    <div className="join m-5 flex justify-end">
                      <a
                        role="button"
                        onClick={handleClick}
                        href={previous}
                        disabled={!previous}
                        className="btn btn-info join-item"
                      >
                        Previous
                      </a>
                      <a
                        role="button"
                        onClick={handleClick}
                        disabled={!next}
                        href={next}
                        className="btn btn-primary join-item"
                      >
                        Next
                      </a>
                    </div>
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
      )}
    </>
  );
};
export default Review;
