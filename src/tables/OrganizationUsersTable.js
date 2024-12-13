/**Tables - Organization Users Table */
import profile from "../static/img/no-profile.webp";

const OrganizationUsers = ({ user }) => {
  /**User Table DaisyUI Component */
  return (
    <>
      <tr className="hover:bg-slate-50 border-b border-slate-200 capitalize">
        <td className="p-4 py-5">
          <p className="block font-semibold text-sm text-slate-800">
            {user.id}
          </p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">
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
          <p className="text-sm text-slate-500">{user.username}</p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">
            {user.get_full_name || "No Full name"}
          </p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">
            <p className="join">
              <button className="btn join-item btn-sm btn-primary">Edit</button>
              <button className="btn join-item btn-sm btn-error">Remove</button>
            </p>
          </p>
        </td>
      </tr>
    </>
  );
};

export default OrganizationUsers;
