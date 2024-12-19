/**Nav Bar Component Using Tailwind CSS */
import unauthorized from "../static/img/unauthorized.png";
function Unauthorized() {
  /**NavBar DaisyUI Component */
  return (
    <>
      <div className="hero min-h-screen items-center bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img
              src={unauthorized}
              alt="404"
              className="object-cover w-full w-40"
            />
            <p className="py-6">You are Not Authorized to View this Content.</p>
            <a href="/login" className="btn btn-primary">
              Login with Authorized Account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Unauthorized;
