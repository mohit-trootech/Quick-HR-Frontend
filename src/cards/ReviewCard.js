/**Review Card */
import React from "react";
import Rating from "../components/Rating";
import ReviewDetailsModal from "../modals/ReviewDetailsModal";
import { HiMiniUser } from "react-icons/hi2";
const ReviewCard = ({ review }) => {
  return (
    <div className="card static w-80 self-start bg-base-100 shadow-sm my-5 rounded-xl border hover:shadow-xl hover:border transition duration-300">
      <div className="card-body p-3 items-center justify-center flex flex-col text-center">
        <div className="flex gap-x-3 w-full items-center justify-between">
          <div className="flex items-center justify-start text-sm gap-x-2">
            <Rating
              id={`overall_review_${review.id}`}
              rating={review.overall_review}
            />
            <p>Review: {review.overall_review}</p>
          </div>
          <div className="text-sm">{`${new Date(
            review.created
          ).toLocaleDateString("default", {
            month: "short",
          })}, ${new Date(review.created).getFullYear()}`}</div>
        </div>
        <div className="divider w-full my-0 py-0"></div>
        <div className="bg-zinc-100 p-2 rounded-lg mb-3 border w-full">
          <div className="flex justify-between items-center">
            <span className="font-bold">Performance</span>
            <span className="">
              <Rating
                id={`performance_rating_${review.id}`}
                rating={review.performance_rating}
              />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold">Project Delivery</span>
            <span>
              <Rating
                id={`delivery_rating_${review.id}`}
                rating={review.delivery_rating}
              />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold">Social Life</span>
            <span>
              <Rating
                id={`socialization_rating_${review.id}`}
                rating={review.socialization_rating}
              />
            </span>
          </div>
        </div>
        <div className="divider mr-3 my-0 py-0"></div>
        <div className="flex justify-between items-center w-full">
          <div>
            {review.reviewer && (
              <div className="capitalize flex items-start gap-x-2">
                {review.reviewer.image ? (
                  <img
                    src={review.reviewer.image}
                    alt="profile"
                    className="rounded-full avtar w-5 h-5"
                  />
                ) : (
                  <HiMiniUser />
                )}
                {review.reviewer.username}
              </div>
            )}
          </div>
          <button
            className="btn glass bg-base-200 btn-sm text-sm text-zinc-500"
            onClick={() =>
              document.getElementById(`review_modal_${review.id}`).showModal()
            }
          >
            Review Details
          </button>
          <ReviewDetailsModal review={review} />
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
