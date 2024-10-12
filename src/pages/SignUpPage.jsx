import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currState === "Sign Up") {
      console.log('Sign Up Data:', { username, email, password });
      toast.success("Signup Successfully!");
    } else {
      console.log('Sign In Data:', { email, password });
      toast.success("Login Successfully!");
    }
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6">{currState}</h1>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        {currState === "Sign Up" && (
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="Enter your name.."
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 border-[1px] border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border-[1px] border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border-[1px] border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 focus:outline-none focus:border-blue-500">
          {currState === 'Sign Up' ? 'Create Account' : 'Sign In'}
        </button>
        <div className="text-center mt-4 text-gray-700 dark:text-gray-300">
          {currState === "Sign Up" ? (
            <p>Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => setCurrState("Sign In")}>Sign In Here</span></p>
          ) : (
            <p>Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={() => setCurrState("Sign Up")}>Create an Account</span></p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
