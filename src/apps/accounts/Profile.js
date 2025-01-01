/* eslint-disable react-hooks/exhaustive-deps */
/**User Profile */
/**React Hooks */
import { useContext, useEffect } from "react";
import { UserContext, AuthContext } from "../../context/Contexts";
/**Components */
import Sidebar from "../../components/Sidebar";
import SidenavDrawer from "../../components/SidenavDrawer";
import UpdateProfileModal from "../../modals/UpdateProfileModal";

const Profile = () => {
  const { auth } = useContext(AuthContext);
  const { user, getUserProfile, updateUserProfile } = useContext(UserContext);
  useEffect(() => {
    user || getUserProfile();
  }, [auth, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    updateUserProfile(data);
  };
  return (
    <div className="grid grid-cols-9 gap-2">
      <div className="hidden lg:block lg:col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-9 lg:col-span-7 mx-3">
        <div className="px-3 py-1 border shadow-md my-2 rounded-lg flex items-center justify-between">
          <span className="text-xl font-semibold hidden lg:block">
            User Profile
          </span>
          <div className="breadcrumbs text-sm flex flex-row items-center justify-start gap-2">
            <SidenavDrawer />
          </div>
        </div>
        <div className="flex justify-end my-5 items-center">
          <button
            className="btn btn-primary btn-sm"
            onClick={() =>
              document.getElementById("update_profile").showModal()
            }
          >
            Update Profile
          </button>
          <UpdateProfileModal user={user} handleSubmit={handleSubmit} />
        </div>
        <div className="p-5">
          {/* User Details */}
          <div className="border-t border-gray-200 rounded-lg">
            <dl className="capitalize">
              <div className="bg-base-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:bg-base-100">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {(user &&
                    user.first_name &&
                    `${user.first_name} ${user.last_name}`) ||
                    (user && user.username)}
                </dd>
              </div>
              <div className="bg-base-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:bg-base-100">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2 lowercase">
                  {user && user.email}
                </dd>
              </div>
              <div className="bg-base-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:bg-base-100">
                <dt className="text-sm font-medium text-gray-500">Age</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {(user && user.age && `${user.age} Years Old`) || "N/A"}
                </dd>
              </div>
              <div className="bg-base-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:bg-base-100">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {(user && user.address) || "N/A"}
                </dd>
              </div>
              <div className="bg-base-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:bg-base-100">
                <dt className="text-sm font-medium text-gray-500">
                  Verification Status
                </dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {user && user.is_verified ? "Verified" : "Not Verified"}
                </dd>
              </div>
              <div className="bg-base-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:bg-base-100">
                <dt className="text-sm font-medium text-gray-500">
                  Date Joined
                </dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {user && new Date(user.date_joined).toDateString()}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
