/**Resignation Card */
import profile from "../../static/img/profile.jpg";
import ResignationDetailDrawer from "../../components/resgination/ResginationDetailDrawer";
const ResginationCard = ({ resignation }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-4 justify-around lg:items-center items-start gap-4 border px-3 py-2 rounded-lg shadow-md mb-3">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex gap-1 justify-start items-center">
          <img
            alt="profile"
            src={resignation.user.image || profile}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-semibold">{resignation.user.username}</span>
            <span className="text-xs text-gray-500 truncate">
              {resignation.user.email}
            </span>
          </div>
        </div>
      </div>
      <div className="md:col-span-2">
        <p className="text-sm font-semibold">
          Last Working Day:
          {new Date(resignation.last_working_day).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div>
        <ResignationDetailDrawer resignation={resignation} />
      </div>
    </div>
  );
};
export default ResginationCard;
