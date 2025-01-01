/**Broadcast Detail Modal */

const BroadcastDetailModal = ({ messageDetail }) => {
  return (
    <>
      <dialog id="broadcast_detail" className="modal">
        <div className="modal-box w-full max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Broadcast Details</h3>
          <div className="py-5">
            {(messageDetail && (
              <div className="card static gap-y-5">
                <div className="flex justify-between items-center">
                  <h2 className="card-title">{messageDetail.title}</h2>
                  <div className="card-actions justify-end">
                    <div className="flex flex-row gap-2 items-center">
                      <span className="badge badge-outline badge-accent">
                        {messageDetail.user.username}
                      </span>
                      <span className="badge badge-outline badge-primary">
                        {messageDetail.created_ago}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-xl bg-base-300  prose max-w-full">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: messageDetail.description,
                    }}
                  ></p>
                </div>
              </div>
            )) ||
              "No Message Selected"}
          </div>
          <div className="modal-action">
            <button className="btn btn-sm btn-primary">Close</button>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default BroadcastDetailModal;
