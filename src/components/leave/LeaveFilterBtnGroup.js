const LeaveFilterBtnGroup = ({ status, setStatus }) => {
  return (
    <div className="flex justify-end items-center join m-3">
      <button
        onClick={() => setStatus("*")}
        className={"btn btn-sm join-item " + (status === "*" && "btn-accent")}
      >
        *
      </button>
      <button
        onClick={() => setStatus("pending")}
        className={
          "btn btn-sm join-item " + (status === "pending" && "btn-warning")
        }
      >
        Pending
      </button>
      <button
        onClick={() => setStatus("approved")}
        className={
          "btn btn-sm join-item " + (status === "approved" && "btn-success")
        }
      >
        Approved
      </button>
      <button
        onClick={() => setStatus("rejected")}
        className={
          "btn btn-sm join-item " + (status === "rejected" && "btn-error")
        }
      >
        Rejected
      </button>
    </div>
  );
};
export default LeaveFilterBtnGroup;
