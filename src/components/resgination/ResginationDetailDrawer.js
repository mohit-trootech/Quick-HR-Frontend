/* eslint-disable jsx-a11y/anchor-is-valid */
/**Resignation Details Drawer */
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
            className="drawer-overlay"
          ></label>
          <div className="bg-base-200 text-base-content min-h-full w-96 p-4">
            <h1 className="text-xl font-bold mb-3">Resignation Details</h1>
            <div className="flex flex-col gap-3">
              <p>
                Resgination Date:
                {new Date(resignation.created).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                Last Working Day:
                {new Date(resignation.last_working_day).toLocaleDateString(
                  "en-GB",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
              <p className="mb-2 badge capitalizer">{resignation.status}</p>
            </div>
            <a
              href="/"
              className="btn btn-primary btn-sm mt-4"
              onClick={(e) => e.preventDefault()}
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResignationDetailDrawer;
