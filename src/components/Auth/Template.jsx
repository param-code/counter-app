/** @format */

import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SignupImage from "./SignupImage";
import LoginImage from "./LoginImage";

function Template({ formType }) {
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div>
      <div className="grid h-auto place-items-center bg-slate-100">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="flex">
            <div
              className="pt-[40px] cursor-pointer relative"
              onClick={() => navigate("/")}
            >
              <FaArrowCircleLeft
                className="w-[30px] h-[30px] absolute"
                onClick={() => navigate("/")}
              />
            </div>
            <div className="mx-auto flex mt-4 sm:mt-8 max-w-maxContent py-6 md:gap-x-12 w-[90vw] text-black">
              {/* Conditionally reverse flex direction for login */}
              <div
                className={`flex flex-col-reverse md:flex-row ${
                  formType === "login" ? "md:flex-row-reverse" : ""
                } justify-evenly gap-y-12 md:gap-x-12 w-full`}
              >
                <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
                  <h1 className="text-[35px] text-center font-semibold leading-[2.375rem] text-richblack-5">
                    {formType === "signup" ? "Signup" : "Login"}
                  </h1>
                  <p className="mt-4 text-[1.125rem] text-center leading-[1.625rem] mb-2">
                    <span className="text-center font-edu-sa text-black">
                      {formType === "signup"
                        ? "Welcome to our platform"
                        : "Welcome back"}
                    </span>
                  </p>
                  {formType === "signup" ? <SignupForm /> : <LoginForm />}
                </div>
                <div className="relative mx-auto w-11/12 mt-[60px] max-w-[450px] md:mx-0">
                  {formType === "signup" ? <SignupImage /> : <LoginImage />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Template;
