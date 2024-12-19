/**Broad Cast Messages */

const BroadCastMessagesModal = ({ message }) => {
  /**BroadCast Messages Component DaisyUI & Tailwind CSS */
  return (
    <>
      <button
        className="btn capitalize flex justify-between items-center w-full"
        onClick={() =>
          document.getElementById(`broadcast_modal_${message.id}`).showModal()
        }
      >
        {message.title}
      </button>
      <dialog id={`broadcast_modal_${message.id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="capitalize font-bold text-lg"> {message.title}!</h3>
          <p className="py-4">{message.description}</p>
          <div className="modal-action">
            <button className="btn btn-sm">{message.created_ago} ago </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BroadCastMessagesModal;
