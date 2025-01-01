/**Broad Cast Message Card */

const BroadcastMessageCard = ({ message, handleClick }) => {
  /**Daisy UI Tailwind BroadcastMessageCard Component */

  return (
    <div
      onClick={() => handleClick(message)}
      className="card static bordered hover:shadow-lg w-full"
    >
      <div className="card-body">
        <h2 className="card-title">{message.title}</h2>
        <div className="card-actions justify-end">
          {/* User Information */}
          <div className="flex flex-row gap-2 items-center">
            <span className="badge badge-outline badge-accent">
              {message.user.username}
            </span>
            <span className="badge badge-outline badge-primary">
              {message.created_ago}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadcastMessageCard;
