/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { passwordRecovery } from "../../services/operations/authAPI"; // Correct import
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons

const PasswordRecovery = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(passwordRecovery(email));
      setMessage(
        "Password recovery instructions have been sent to your email."
      );
    } catch (error) {
      setMessage("Error sending password recovery instructions.");
    }
  };

  // Tile-style glassmorphism effect
  const glassTileStyle = {
    background: "rgba(255, 255, 255, 0.1)", // More transparent glassy effect
    borderRadius: "20px", // Increased rounded corners for tile effect
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)", // Tile-like shadow
    backdropFilter: "blur(30px)", // Increased blur for glass effect
    border: "1px solid rgba(255, 255, 255, 0.3)", // Optional: border to enhance tile
    padding: "2rem", // Padding inside the form
    maxWidth: "420px", // Fixed max width to simulate a tile size
    width: "100%",
    margin: "0 auto", // Center the form horizontally
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200'>
      <h1 className='text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100'>
        Password Recovery
      </h1>

      <form
        onSubmit={handleOnSubmit}
        style={glassTileStyle}
        className='relative'
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 dark:text-gray-300'
            htmlFor='email'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-1 block w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 focus:outline-none focus:border-blue-500'
        >
          Recover Password
        </button>

        {message && <div className='text-green-600 mt-4'>{message}</div>}

        <div className='text-center mt-4 text-gray-700 dark:text-gray-300'>
          <p>
            Remember your password?{" "}
            <span
              className='text-blue-600 cursor-pointer'
              onClick={() => navigate("/login")}
            >
              Sign In Here
            </span>
          </p>
          <p
            className='text-blue-600 cursor-pointer mt-2'
            onClick={() => navigate("/")}
          >
            Home
          </p>
        </div>
      </form>
    </div>
  );
};

export default PasswordRecovery;
