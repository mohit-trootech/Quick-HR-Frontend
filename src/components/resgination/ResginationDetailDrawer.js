/* eslint-disable jsx-a11y/anchor-is-valid */
/**Resignation Details Drawer */
import profile from "../../static/img/profile.jpg";
const ResignationDetailDrawer = ({ resignation }) => {
  /**Resignation Details Drawer Daisy UI */

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-warning btn-sm drawer-button"
          >
            Details
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay justify-self-end"
          ></label>
          <div className="bg-base-200 text-base-content min-h-full w-96 px-3 py-4">
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-xl font-bold self-center">
                Resignation Details
              </h1>
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="btn btn-sm btn-circle"
              >
                ✕
              </label>
            </div>
            <div className="card border shadow-xl">
              <div className="card-body p-4 gap-y-3">
                <div className="card-title flex justify-start gap-2 items-center">
                  <img
                    src={resignation.user.image || profile}
                    alt=""
                    className="w-10 h-10 ring-primary ring-2 rounded-full ring ring-offset-2"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {resignation.user.username}
                    </span>
                    <span className="text-xs font-extralight">
                      {resignation.user.email}
                    </span>
                  </div>
                </div>
                <p className="text-ellipsis overflow-hidden">
                  {resignation.reason}
                </p>
                <div className="join">
                  <button className="join-item btn btn-glass btn-sm w-1/2 bg-yellow-400 hover:bg-yellow-500/90">
                    Resgined on
                    <span className="badge badge-sm badge-primary">
                      {new Date(resignation.created).toLocaleDateString(
                        "en-GB",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </button>
                  <button className="join-item btn btn-glass btn-sm w-1/2 bg-red-400 hover:bg-red-500/90">
                    LWD
                    <span className="badge badge-sm badge-primary">
                      {new Date(resignation.created).toLocaleDateString(
                        "en-GB",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResignationDetailDrawer;
