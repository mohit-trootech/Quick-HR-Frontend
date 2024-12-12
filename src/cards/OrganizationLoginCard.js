/**Organization Login Card */

const OrganizationLoginCard = ({ handleSubmit, login, setLogin }) => {
  return (
    <>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-zinc-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-sm text-zinc-500">Please login to continue</p>
        </div>
        <form
          id="login-form"
          className="mt-8 space-y-3"
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
              type="password"
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
          <div className="join grid grid-cols-2">
            <button
              className="join-item btn btn-secondary"
              onClick={() => setLogin(!login)}
            >
              {login ? "Create an account?" : "Already have an account?"}
            </button>
            <button type="submit" className="join-item btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrganizationLoginCard;
