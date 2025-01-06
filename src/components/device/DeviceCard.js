/**Device Details Card */
import { DeviceContext, AuthContext } from "../../context/Contexts";
import { useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const DeviceCard = ({ device, setCurrentDevice }) => {
  const { updateDevice } = useContext(DeviceContext);
  const { auth } = useContext(AuthContext);
  const handleClick = async (event) => {
    event.preventDefault();
    const data = { user_id: auth.user.id };
    updateDevice(device.id, data, `?action=${event.target.id}`);
  };

  return (
    <>
      <div className="card static bg-base-100 shadow-xl z-[0] w-full md:w-56">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{device.title}</h2>
            <div className="flex gap-2">
              <div className="dropdown dropdown-hover z-[9999] dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-circle">
                  <BsThreeDotsVertical id="my-drawer" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box w-40 p-2 shadow"
                >
                  <li>
                    <label
                      onClick={() => setCurrentDevice(device)}
                      htmlFor="device_edit_drawer"
                    >
                      Edit Device
                    </label>
                  </li>

                  <li>
                    {(device && device.acquired_by && (
                      <button
                        onClick={handleClick}
                        id="release"
                        className="capitalize"
                      >
                        Release: {device.acquired_by.username}
                      </button>
                    )) || (
                      <button
                        onClick={handleClick}
                        id="acquire"
                        className="capitalize"
                      >
                        Acquire
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="prose">
            <p dangerouslySetInnerHTML={{ __html: device.description }}></p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeviceCard;
