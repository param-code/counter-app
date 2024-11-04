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
    <div className="py-2">
      {/* Form */}
      <form
        noValidate
        onSubmit={handleOnSubmit}
        className="flex w-full font-semibold flex-col gap-y-6 text-black p-6 rounded-2xl shadow-blue-200 shadow-xl"
      >
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.95rem] leading-[1.375rem]">First Name</p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="form-style w-full p-2 shadow-md bg-white rounded-lg text-black border-[1px] border-transparent hover:border-blue-500 hover:border-[1px]"
            />
            {errors.firstName && (
              <div className="text-red-600">{errors.firstName}</div>
            )}
          </label>
          <label>
            <p className="mb-1 text-[0.95rem] leading-[1.375rem] text-richblack-5">
              Last Name
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="form-style p-2 shadow-md bg-white rounded-lg w-full text-black border-[1px] border-transparent hover:border-blue-500 hover:border-[1px]"
            />
            {errors.lastName && (
              <div className="text-red-600">{errors.lastName}</div>
            )}
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.95rem] leading-[1.375rem] ">
            Email Address
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="form-style w-full p-2 shadow-md bg-white rounded-lg text-black border-[1px] border-transparent hover:border-blue-500 hover:border-[1px]"
          />
          {errors.email && <div className="text-red-600">{errors.email}</div>}
        </label>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.95rem] leading-[1.375rem] text-richblack-5">
              Create Password
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full !pr-10 p-2 shadow-md bg-white rounded-lg text-black border-[1px] border-transparent hover:border-blue-500 hover:border-[1px]"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[35px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#000000" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#000000" />
              )}
            </span>
            {errors.password && (
              <div className="text-red-600">{errors.password}</div>
            )}
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.95rem] leading-[1.375rem] text-richblack-5">
              Confirm Password
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="form-style w-full !pr-10 shadow-md p-2 bg-white rounded-lg text-black border-[1px] border-transparent hover:border-blue-500 hover:border-[1px]"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[35px] z-[10] cursor-pointer text-black"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#000000" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#000000" />
              )}
            </span>
            {errors.confirmPassword && (
              <div className="text-red-600">{errors.confirmPassword}</div>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 font-semibold py-[8px] px-[12px] text-white p-2 border-[1px] rounded-lg bg-red-600 hover:bg-red-700 border-red-800"
        >
          Create Account
        </button>
        <div className="flex flex-col items-center space-y-3 mt-3">
          <button  onClick={() => window.location.href = "http://localhost:4000/auth/google"} className="w-full flex items-center justify-center gap-2 p-2 border rounded-md border-gray-300 hover:bg-gray-100 transition">
            <FcGoogle fontSize={18} />
            <span>Sign up with Google</span>
          </button>
          <button className="w-full flex items-center justify-center gap-2 p-2 border rounded-md border-gray-300 hover:bg-gray-100 transition">
            <FaApple fontSize={18} />
            <span>Sign up with Apple</span>
          </button>
        </div>
        <div className="flex gap-2 flex-col mt-2">
          <div className="flex gap-2 justify-center items-center">
            <span className="h-[1px] bg-black w-[70%]"></span>
            <span>OR</span>
            <span className="h-[1px] bg-black w-[70%]"></span>
          </div>
          <div className="flex flex-row mx-auto gap-4 justify-center items-center">
            <div className="font-normal text-black select-none">
              Already have an account?
            </div>
            <button
              className="text-blue-700 hover:text-blue-950 font-semibold cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </div>

          </div>
        </form>
      

    </div>
  );
}

export default SignupForm;
