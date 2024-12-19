/**Project Timeline Activity Item */

import profile from "../../static/img/no-profile.webp";
const TimelineActivityItem = ({ activity }) => {
  return (
    <>
      <li key={activity.id}>
        <hr
          className={
            activity.activity_type === "start"
              ? "bg-info"
              : activity.activity_type === "pause"
              ? "bg-warning"
              : "bg-success"
          }
        />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-primary"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-3 w-full">
          <time className="font-mono italic">{activity.created_ago} Ago</time>
          <div className="text-lg font-black flex justify-between items-center">
            <p>{activity.task.title}</p>
            <div className="flex items-center gap-x-2">
              <p className="text-sm italic">By</p>
              <button className="btn btn-sm capitalize">
                {activity.user.username}
                <img
                  src={activity.user.image || profile}
                  className="w-6 h-6 rounded-full"
                  alt=""
                />
              </button>
            </div>
          </div>
          {/* Badge */}
          <div className="flex flex-row gap-x-2 justify-start">
            {/* Activity Status */}
            <span
              className={
                activity.activity_type === "start"
                  ? "badge badge-secondary"
                  : activity.activity_type === "pause"
                  ? "badge badge-warning"
                  : "badge badge-success"
              }
            >
              {activity.activity_type === "start"
                ? "In Progress"
                : activity.activity_type === "pause"
                ? "Paused"
                : "Completed"}
            </span>
            {/* Duration in Format of HH:MM:SS */}
            <span className="badge badge-info">
              {activity.duration &&
                new Date(activity.duration * 1000).toISOString().slice(11, 19)}
            </span>
          </div>
          <div className="prose">
            <div
              dangerouslySetInnerHTML={{ __html: activity.task.description }}
            />
          </div>
        </div>
        <hr
          className={
            activity.activity_type === "start"
              ? "bg-secondary"
              : activity.activity_type === "pause"
              ? "bg-warning"
              : "bg-success"
          }
        />
      </li>
    </>
  );
};

export default TimelineActivityItem;
