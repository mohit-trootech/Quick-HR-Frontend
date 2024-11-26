/**Forgot Page */
/**Context Import */
import { useState, useContext } from "react";
import { UserContext } from "../../context/Contexts";
import { GoMail } from "react-icons/go";
import { otpInputs } from "../../utils/utils";
/**Custom Static Files */
import "../../static/css/accounts.css";
import logo from "../../static/img/logo.png";

const ForgotPassword = () => {
  /**Desgined With Daisy UI and Tailwind CSS */
  const [otpBlock, setOtpBlock] = useState(false);
  const { forgotPassword, forgotPasswordOtpSubmit } = useContext(UserContext);
  const handleResendOtp = async () => {
    let email = document.querySelector("input[name=email]").value;
    email && (await forgotPassword({ email: email }));
  };
  const handleGenerateOtpSubmit = async (event) => {
    event.preventDefault();
    let response = await forgotPassword(new FormData(event.target));
    response && setOtpBlock(true);
    otpInputs();
  };
  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    let otp = [...event.target.querySelectorAll("input[name=otp]")]
      .map((input) => input.value)
      .join("");
    let email = event.target.email.value;
    await forgotPasswordOtpSubmit({ otp, email });
  };
  return (
    <>
      <div className="relative min-h-screen flex">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div className="w-full h-full hidden md:flex flex-auto items-center justify-start p-10 bg-purple-900 text-white bg-no-repeat bg-cover relative">
            <div className="absolute bg-gradient-to-b from-blue-900 to-gray-900 opacity-75 inset-0 z-0"></div>
            <a
              href="/"
              className="flex absolute top-5 text-center text-zinc-100 right-5 focus:outline-none"
            >
              <img
                src={logo}
                alt="aji"
                className="object-cover mx-auto w-8 h-8 rounded-full w-10 h-10"
              />
              <p className="text-xl ml-3">QuickHR</p>
            </a>
            <div className="flex flex-col justify-center items-center w-full h-full z-[99]  bg-white py-5 px-5 max-w-md mx-auto rounded-lg shadow-xl">
              <div>
                <img src={logo} alt="aji" className="h-24 w-24 mb-14 mx-auto" />
              </div>
              <form
                onSubmit={otpBlock ? handleOtpSubmit : handleGenerateOtpSubmit}
                method="post"
                className="max-w-md w-full"
                id="otp-form"
              >
                <div className="flex flex-col space-y-5">
                  <label className="form-control w-full">
                    {otpBlock ? (
                      <div className="flex flex-col">
                        <div className="flex justify-center gap-2 mb-2">
                          <input
                            className="w-12 h-12 text-center input input-bordered input-primary bg-white text-zinc-500 otp"
                            type="text"
                            maxLength="1"
                            name="otp"
                            pattern="[0-9]"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            required
                          />
                          <input
                            className="w-12 h-12 text-center input input-bordered input-primary bg-white text-zinc-500 otp"
                            type="text"
                            maxLength="1"
                            name="otp"
                            pattern="[0-9]"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            required
                          />
                          <input
                            className="w-12 h-12 text-center input input-bordered input-primary bg-white text-zinc-500 otp"
                            type="text"
                            maxLength="1"
                            name="otp"
                            pattern="[0-9]"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            required
                          />
                          <input
                            className="w-12 h-12 text-center input input-bordered input-primary bg-white text-zinc-500 otp"
                            type="text"
                            maxLength="1"
                            name="otp"
                            pattern="[0-9]"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            required
                          />
                          <input
                            className="w-12 h-12 text-center input input-bordered input-primary bg-white text-zinc-500 otp"
                            type="text"
                            maxLength="1"
                            name="otp"
                            pattern="[0-9]"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            required
                          />
                          <input
                            className="w-12 h-12 text-center input input-bordered input-primary bg-white text-zinc-500 otp"
                            type="text"
                            maxLength="1"
                            name="otp"
                            pattern="[0-9]"
                            autoComplete="one-time-code"
                            required
                          />
                        </div>
                        <div className="flex justify-end items-center mb-5">
                          <span
                            role="button"
                            onClick={handleResendOtp}
                            className="text-sm italic text-zinc-500 hover:underline cursor-pointer transition ease-in duration-300"
                          >
                            Resend otp
                          </span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <label className="input bg-white input-bordered input-primary w-full text-zinc-500 flex items-center gap-2">
                      <GoMail className="h-4 w-4 opacity-70" />
                      <input
                        type="text"
                        className="grow"
                        placeholder="Email"
                        name="email"
                      />
                    </label>
                    <div className="label">
                      <span className="label-text text-xs italic">
                        Please use registered email, we will send you a otp to
                        your email.
                      </span>
                    </div>
                  </label>
                  <button
                    className="btn btn-primary transition ease-in duration-150 scale-95 hover:scale-100 text-zinc-100"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                      />
                    </svg>

                    <span>Reset password</span>
                  </button>
                  <p className="text-center text-zinc-500 text-sm italic">
                    If error persists, Please contact HR Department for help.
                  </p>
                </div>
              </form>
            </div>
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

export default ForgotPassword;
