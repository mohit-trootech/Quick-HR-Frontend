/**Device Details Card */
import { DeviceContext, AuthContext } from "../../context/Contexts";
import { useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const DeviceCard = ({ device, setCurrentDevice }) => {
  const { updateDevice } = useContext(DeviceContext);
  const { auth } = useContext(AuthContext);
  const handleClick = async (action, id) => {
    let data = null;
    if (id) {
      data = { user_id: id };
    } else {
      data = { user_id: auth.user.id };
    }
    updateDevice(device.id, data, `?action=${action}`);
  };

  return (
    <>
      <div className="card static bg-base-200 rounded-xl shadow-sm hover:shadow-blue-400/10 border hover:shadow-xl w-full z-[-1] lg:z-0 md:w-56">
        <div className="card-body p-4">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{device.title}</h2>
            <div className="flex gap-2">
              <div className="dropdown dropdown-hover dropdown-end z-[1]">
                <label
                  tabIndex={0}
                  className="btn btn-sm btn-primary btn-circle"
                >
                  <BsThreeDotsVertical id="my-drawer" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box w-40 shadow"
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
                        onClick={() => {
                          if (
                            device.acquired_by.username === auth.user.username
                          ) {
                            handleClick("release", device.acquired_by.id);
                          }
                        }}
                        id="release"
                        className="capitalize"
                      >
                        Release: {device.acquired_by.username}
                      </button>
                    )) || (
                      <button
                        onClick={() => {
                          handleClick("acquire");
                        }}
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
