/** @format */

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "@/validations/validation";
import { login } from "../../services/operations/authAPI";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginValidation.validate(
        { email, password },
        { abortEarly: false }
      );
      setErrors({});
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
      return;
    }

    dispatch(login(email, password, navigate));
  };

  const handlePasswordRecovery = () => {
    navigate("/password-recovery");
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-r from-gray-100 to-blue-50 pt-16">
      {/* Centered Form */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Sign In to Your Account
        </h2>

        <form noValidate onSubmit={handleOnSubmit} className="space-y-6">
          {/* Email Input */}
          <label className="block">
            <span className="text-gray-700 font-semibold">Email Address</span>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <div className="text-red-600 text-sm mt-1">{errors.email}</div>
            )}
          </label>

          {/* Password Input */}
          <label className="block relative">
            <span className="text-gray-700 font-semibold">Password</span>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-1 p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-[38px] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
            {errors.password && (
              <div className="text-red-600 text-sm mt-1">{errors.password}</div>
            )}
          </label>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>

          {/* Forgot Password Button */}
          <button
            type="button"
            className="w-full text-blue-600 font-semibold mt-4 hover:underline"
            onClick={handlePasswordRecovery}
          >
            Forgot Password?
          </button>

          {/* Divider */}
          <div className="flex items-center justify-between mt-6">
            <span className="border-b w-[40%] border-gray-300"></span>
            <span className="text-gray-500">OR</span>
            <span className="border-b w-[40%] border-gray-300"></span>
          </div>

          {/* Signup Link */}
          <div className="text-center">
            <span className="text-gray-600">Don't have an account?</span>
            <button
              className="text-blue-600 font-semibold hover:underline ml-2"
              onClick={() => navigate("/signup")}
            >
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
