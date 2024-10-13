import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const SignUpPage = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currState === "Sign Up") {
      // Save user data to local storage as JSON
      const userData = { username, email, password };
      localStorage.setItem(email, JSON.stringify(userData)); // Use email as key for storage
      console.log("Sign Up Data:", userData);
      // Show success alert
      alert("Signed up successfully!");
      // Redirect to home page
      window.location.href = "/";
      // Reset fields after successful sign-up
      setUsername("");
      setEmail("");
      setPassword("");
    } else {
      // Sign in logic
      const storedUser = localStorage.getItem(email);
      if (storedUser) {
        const { password: storedPassword } = JSON.parse(storedUser);
        if (storedPassword === password) {
          console.log("Sign In Success:", { email });
        } else {
          console.log("Sign In Failed: Incorrect password");
        }
      } else {
        console.log("Sign In Failed: Email not found");
      }
      // Reset password field after attempt
      setPassword("");
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6">{currState}</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
      >
        {currState === "Sign Up" && (
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring focus:ring-blue-500"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring focus:ring-blue-500"
            required
          />
          {/* Icon for toggling password visibility */}
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-9 cursor-pointer text-gray-600 dark:text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          {currState === "Sign Up" ? "Create Account" : "Sign In"}
        </button>
        <div className="text-center mt-4 text-gray-700 dark:text-gray-300">
          {currState === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setCurrState("Sign In")}
              >
                Sign In Here
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setCurrState("Sign Up")}
              >
                Create an Account
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
