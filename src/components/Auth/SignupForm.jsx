/** @format */

import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/operations/authAPI";
import { registerValidation } from "@/validations/validation";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerValidation.validate(
        { firstName, lastName, email, password, confirmPassword },
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

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }

    // Send data to backend for account creation
    dispatch(
      signUp(firstName, lastName, email, password, confirmPassword, navigate)
    );

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10">
      {/* Form Container */}
      <div className="bg-white shadow-lg p-8 rounded-xl w-[360px]">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Create an Account
        </h2>

        {/* Form */}
        <form noValidate onSubmit={handleOnSubmit} className="space-y-4">
          <div className="flex gap-3">
            <label className="w-full">
              <p className="text-sm text-gray-700">First Name</p>
              <input
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
                placeholder="John"
                className="mt-1 p-2 w-full border rounded-md border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.firstName && (
                <p className="text-red-600 text-xs">{errors.firstName}</p>
              )}
            </label>
            <label className="w-full">
              <p className="text-sm text-gray-700">Last Name</p>
              <input
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
                placeholder="Doe"
                className="mt-1 p-2 w-full border rounded-md border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.lastName && (
                <p className="text-red-600 text-xs">{errors.lastName}</p>
              )}
            </label>
          </div>

          <label>
            <p className="text-sm text-gray-700">Email Address</p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="john.doe@example.com"
              className="mt-1 p-2 w-full border rounded-md border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-600 text-xs">{errors.email}</p>
            )}
          </label>

          <div className="flex gap-3">
            <label className="relative w-full">
              <p className="text-sm text-gray-700">Password</p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="••••••••"
                className="mt-1 p-2 w-full border rounded-md border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[32px] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={18} />
                ) : (
                  <AiOutlineEye fontSize={18} />
                )}
              </span>
              {errors.password && (
                <p className="text-red-600 text-xs">{errors.password}</p>
              )}
            </label>

            <label className="relative w-full">
              <p className="text-sm text-gray-700">Confirm Password</p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="••••••••"
                className="mt-1 p-2 w-full border rounded-md border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-[32px] cursor-pointer"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={18} />
                ) : (
                  <AiOutlineEye fontSize={18} />
                )}
              </span>
              {errors.confirmPassword && (
                <p className="text-red-600 text-xs">
                  {errors.confirmPassword}
                </p>
              )}
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Create Account
          </button>

          <div className="flex flex-col items-center space-y-3 mt-3">
            <button className="w-full flex items-center justify-center gap-2 p-2 border rounded-md border-gray-300 hover:bg-gray-100 transition">
              <FcGoogle fontSize={18} />
              <span>Sign up with Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 p-2 border rounded-md border-gray-300 hover:bg-gray-100 transition">
              <FaApple fontSize={18} />
              <span>Sign up with Apple</span>
            </button>
          </div>

          <div className="flex justify-center items-center mt-3">
            <span className="text-sm text-gray-600">Already have an account?</span>
            <button
              className="text-blue-600 ml-1 hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
