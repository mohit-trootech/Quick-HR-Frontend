/**Tables - Organization Users Table */
import profile from "../static/img/no-profile.webp";

const OrganizationUsers = ({ user, handleClick }) => {
  /**User Table DaisyUI Component */
  return (
    <>
      <tr className="hover:bg-base-200 border-b border-slate-200 capitalize">
        <td className="p-4 py-5">
          <p className="block font-semibold text-sm">{user.id}</p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm">
            {(user.image && (
              <img
                src={user.image}
                alt="profile-img"
                className="avtar rounded-full w-10 h-10"
              />
            )) || (
              <img
                src={profile}
                alt="profile-img"
                className="avtar rounded-full w-10 h-10"
              />
            )}
          </p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm">{user.username}</p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm">{user.get_full_name || "No Full name"}</p>
        </td>
        <td className="p-4 py-5">
          <div className="text-sm">
            <p className="join">
              <button
                onClick={handleClick}
                data-user={user.id}
                className="btn join-item btn-sm btn-error"
              >
                Remove
              </button>
            </p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default OrganizationUsers;
