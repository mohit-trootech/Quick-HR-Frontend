/* eslint-disable */
/**Recent Review Modals */
import Chart from "chart.js/auto";
import randomColor from "randomcolor";
import { Line } from "react-chartjs-2";
import { useContext, useEffect } from "react";
import { ReviewContext } from "../../context/Contexts";
const RecentReviewModal = () => {
  const { recentReview, getRecentReviews } = useContext(ReviewContext);
  useEffect(() => {
    recentReview || getRecentReviews();
  }, []);
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        min: 0,
      },
      // Invert the x-axis
      x: {
        reverse: true,
      },
    },
  };
  const labels =
    recentReview &&
    recentReview.map((review) =>
      new Date(review.created).toLocaleDateString("default", {
        month: "short",
        year: "numeric",
      })
    );
  const values =
    recentReview && recentReview.map((review) => review.overall_review);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Recent Reviews",
        data: values,
        borderColor: randomColor(),
        backgroundColor: randomColor(),
        fill: false,
        tension: 0.1,
      },
    ],
  };
  return (
    <>
      <dialog id="recent_review_modal" className="modal">
        <div className="modal-box w-full max-w-6xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Recent Reviews!</h3>
          <div className="p-2 capitalize">
            {recentReview && <Line data={data} options={options} />}
          </div>
        </div>
      </dialog>
    </>
  );
};
export default RecentReviewModal;
