/**Login Page */
/**Context Import */
import { useContext } from "react";
import { UserContext } from "../../context/Contexts";
import { Link } from "react-router-dom";
/**Custom Static Files */
import "../../static/css/accounts.css";
import logo from "../../static/img/logo.png";
const Login = () => {
  /**Desgined With Daisy UI and Tailwind CSS */
  const { loginRequest, toggle, setToggle } = useContext(UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    loginRequest(new FormData(event.target));
  };

  return (
    <>
      <div className="relative min-h-screen flex">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-zinc-900">
                  Welcome Back!
                </h2>
                <p className="mt-2 text-sm text-zinc-500">
                  Please login to continue
                </p>
              </div>
              <form
                className="mt-8 space-y-6"
                onSubmit={handleSubmit}
                method="POST"
              >
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-zinc-500">
                      Please Enter Your Username
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="input bg-white text-zinc-900 input-bordered input-primary w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-zinc-500">
                      Please Enter Your Password
                    </span>
                  </div>
                  <input
                    type={toggle ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="input bg-white text-zinc-900 input-bordered input-primary w-full"
                  />
                  <div className="label">
                    <span className="label-text text-xs text-zinc-500 italic">
                      Please don't share password with anyone.
                    </span>
                  </div>
                </label>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex flex-start items-center space-x-2">
                    <input
                      type="checkbox"
                      className="toggle toggle toggle-primary"
                      onChange={() => {
                        setToggle(!toggle);
                      }}
                      id="show-password"
                      name="show-password"
                    />
                    <span className="text text-zinc-500">Show password</span>
                  </div>
                  <div>
                    <Link
                      to="/forgot-password"
                      className="text-xs text-zinc-500 hover:underline italic"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-y-3 justify-center">
                  <button type="submit" className="w-full btn btn-primary">
                    Login
                  </button>
                  <Link
                    to={"/organization/accounts/"}
                    className="w-full btn btn-secondary"
                  >
                    Organization Login
                  </Link>
                </div>
                <p className="flex gap-x-2 items-center justify-center mt-10 text-center text-md text-zinc-500">
                  <span>Doesn't have have an account?</span>
                  <a
                    href="{% url 'accounts:register' %}"
                    className="text-indigo-400 hover:text-blue-500 italic no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    Register
                  </a>
                </p>
              </form>
            </div>
          </div>

          <div className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
            <div className="absolute bg-gradient-to-b from-blue-900 to-gray-900 opacity-75 inset-0 z-0"></div>
            <div className="absolute triangle-login min-h-screen left-0 w-16"></div>
            <a
              href={logo}
              title="codepen aji"
              className="flex absolute top-5 text-center text-zinc-100 right-5 focus:outline-none"
            >
              <img
                src={logo}
                alt=""
                className="object-cover mx-auto w-8 h-8 rounded-full w-10 h-10"
              />
              <p className="text-xl ml-3">QuickHR</p>
            </a>
            <img
              src="https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c.png"
              className="h-96 absolute right-5 mr-5"
              alt=""
            />
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
