/* eslint-disable react-hooks/exhaustive-deps */
/**Review Modal View */
import { useContext, useEffect } from "react";
import { ReviewContext } from "../context/Contexts";
const ReviewModal = ({ review }) => {
  const { users, getUsers, postReview } = useContext(ReviewContext);
  useEffect(() => {
    getUsers("");
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    postReview(new FormData(event.target));
  };
  const handleChange = (event) => {
    event.preventDefault();
    getUsers("?search=" + event.target.value);
  };
  return (
    <>
      <dialog id={`review_modal`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Review!</h3>
          <form onSubmit={handleSubmit} method="POST" className="py-4 gap-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Select User for Review</span>
              </div>
              <input
                type="text"
                name="reviewee"
                list="users"
                autoComplete="false"
                autoCorrect="false"
                onChange={handleChange}
                className="capitalize input input input-sm input-bordered"
              />
              <datalist id="users">
                {users &&
                  users.map((user) => {
                    return (
                      <option
                        className="capitalize"
                        key={user.id}
                        value={user.id}
                      >
                        {user.username}
                      </option>
                    );
                  })}
              </datalist>
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Performance</span>
              </div>
              <div class="flex w-full flex-col mb-3">
                <input
                  type="range"
                  min={1}
                  max="5"
                  step="1"
                  className="range"
                  name="performace_rating"
                />
                <div class="flex items-center justify-between px-2 text-center">
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                </div>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Performance Review"
                name="performance_comment"
              ></textarea>
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Project Delivery</span>
              </div>
              <div class="flex w-full flex-col mb-3">
                <input
                  type="range"
                  min={1}
                  max="5"
                  step="1"
                  className="range"
                  name="delivery_rating"
                />
                <div class="flex items-center justify-between px-2 text-center">
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                </div>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Project Delivery Review"
                name="delivery_comment"
              ></textarea>
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Social Life</span>
              </div>
              <div class="flex w-full flex-col mb-3">
                <input
                  type="range"
                  min={1}
                  max="5"
                  step="1"
                  className="range"
                  name="socialization_rating"
                />
                <div class="flex items-center justify-between px-2 text-center">
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                  <span
                    class="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </span>
                </div>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Social Life Review"
                name="socialization_comment"
              ></textarea>
            </label>
            <div className="modal-action">
              <button className="btn btn-sm">Add Review</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default ReviewModal;
