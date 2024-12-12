/**Organization Register Card */

const OrganizationRegisterCard = ({ handleSubmit, login, setLogin }) => {
  return (
    <>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-zinc-900">
            Register With Us!
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Please register to continue
          </p>
        </div>
        <form
          id="register-form"
          className="mt-8 space-y-3"
          onSubmit={handleSubmit}
          method="POST"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-zinc-500">Enter First Name</span>
            </div>
            <input
              type="text"
              placeholder="Firstname"
              name="first_name"
              className="input bg-white text-zinc-900 input-bordered input-primary w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-zinc-500">Enter Last Name</span>
            </div>
            <input
              type="text"
              placeholder="Lastname"
              name="last_name"
              className="input bg-white text-zinc-900 input-bordered input-primary w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-zinc-500">Enter Your Email</span>
            </div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input bg-white text-zinc-900 input-bordered input-primary w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-zinc-500">Enter Username</span>
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
              <span className="label-text text-zinc-500">Choose Password</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input bg-white text-zinc-900 input-bordered input-primary w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-zinc-500">Confirm Password</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              name="confirm_password"
              className="input bg-white text-zinc-900 input-bordered input-primary w-full"
            />
            <div className="label">
              <span className="label-text text-xs text-zinc-500 italic">
                Password should be alphanumeric with a 8 digits long.
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
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrganizationRegisterCard;
