/* eslint-disable no-unused-vars */
/**Review Detail Modal */
import Chart from "chart.js/auto";
import { HiUser } from "react-icons/hi2";
import Rating from "../components/review/Rating";
import { PolarArea, Bar } from "react-chartjs-2";

const ReviewDetailsModal = ({ review }) => {
  const labels = ["Performance", "Project Delivery", "Social Life"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: `${review.reviewer.username}'s Review`,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
        ],
        borderColor: "rgb(255, 99, 132)",
        data: [
          review.performance_rating,
          review.delivery_rating,
          review.socialization_rating,
        ],
      },
    ],
  };
  return (
    <>
      <dialog id={`review_modal_${review.id}`} className="modal">
        <div className="modal-box max-w-5xl w-11/12">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Review Details!</h3>
          <div className="py-4">
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-start gap-x-3">
                {review.reviewee.image ? (
                  <img
                    src={review.reviewee.image}
                    alt="profile"
                    className="rounded-full avtar w-5 h-5"
                  />
                ) : (
                  <HiUser />
                )}
                <p className="capitalize">{review.reviewee.username}</p>
              </div>
              <p className="text-sm text-right">
                {`${new Date(review.created).toLocaleDateString("default", {
                  month: "short",
                })}, ${new Date(review.created).getFullYear()}`}
              </p>
            </div>
            <div className="divider mr-3 my-0"></div>
            <div className="flex flex-col gap-y-3">
              <div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Performance</span>
                  <Rating rating={review.performance_rating} id="performance" />
                </div>
                <p className="text-start text-zinc-500">
                  {review.performance_comment}
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Project Delivery</span>
                  <span>
                    <Rating rating={review.delivery_rating} id="delivery" />
                  </span>
                </div>
                <p className="text-start text-zinc-500">
                  {review.delivery_comment}
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Social Life</span>
                  <span>
                    <Rating
                      rating={review.socialization_rating}
                      id="socialization"
                    />
                  </span>
                </div>
                <p className="text-start text-zinc-500">
                  {review.socialization_comment}
                </p>
              </div>
            </div>
            <div className="divider mr-3 my-0"></div>
            <div className="flex justify-center items-center">
              <div role="tablist" className="tabs tabs-boxed w-full">
                <input
                  type="radio"
                  name={`review_${review.id}`}
                  role="tab"
                  className="tab"
                  aria-label="Polar"
                />
                <div role="tabpanel" className="tab-content w-full">
                  <PolarArea data={data} />
                </div>

                <input
                  type="radio"
                  name={`review_${review.id}`}
                  role="tab"
                  className="tab"
                  aria-label="Bar"
                  defaultChecked
                />
                <div role="tabpanel" className="tab-content">
                  <Bar data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default ReviewDetailsModal;
