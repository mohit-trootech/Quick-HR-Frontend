/*ResetPasswordModal*/
import { toast } from "react-toastify";
import { useState } from "react";
import { PostRequest } from "../utils/AxiosRequest";
import { BaseUrlPath } from "../utils/contants";
import { getBearerToken } from "../utils/utils";
import { SuccessToast } from "../utils/ToastMessage";
const ResetPasswordModal = ({ user }) => {
  /**Reset Password Modal */
  const [toggle, setToggle] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    let id = toast.loading("Resetting Password...");
    const response = await PostRequest(
      `${BaseUrlPath}/accounts/password-reset/`,
      new FormData(event.target),
      getBearerToken,
      null,
      id
    );
    response && SuccessToast(id, response.data.message);
    response && event.target.reset();
    response && document.getElementById("reset_password").close();
  };
  return (
    <>
      <dialog id="reset_password" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Reset Password!</h3>
          <form method="POST" className="py-4 gap-3" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              defaultValue={user && user.email}
              hidden
              className="input input-bordered w-full input-sm"
              required
            />
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Old Password</span>
              </div>
              <input
                type={toggle ? "text" : "password"}
                name="password"
                placeholder="Old Password"
                className="input input-bordered w-full input-sm"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">New Password</span>
              </div>
              <input
                type={toggle ? "text" : "password"}
                name="new_password"
                placeholder="New Password"
                className="input input-bordered w-full input-sm"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Confirm Password</span>
              </div>
              <input
                type={toggle ? "text" : "password"}
                name="confirm_password"
                placeholder="Confirm Password"
                className="input input-bordered w-full input-sm"
                required
              />
              <div className="label justify-start gap-2">
                <input
                  type="checkbox"
                  onClick={() => setToggle(!toggle)}
                  className="toggle toggle-sm toggle-primary"
                />
                <span className="text-sm">Show Password</span>
              </div>
            </label>

            <div className="modal-action">
              <button className="btn btn-primary">Reset</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default ResetPasswordModal;
