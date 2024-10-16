import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const SignUpPage = () => {
  const [currState, setCurrState] = useState('Sign Up');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currState === 'Sign Up') {
      console.log('Sign Up Data:', { username, email, password });
      toast.success('Signup Successfully!');
    } else {
      console.log('Sign In Data:', { email, password });
      toast.success('Login Successfully!');
    }
    navigate('/');
  };

  // Tile-style glassmorphism effect
  const glassTileStyle = {
    background: 'rgba(255, 255, 255, 0.1)', // More transparent glassy effect
    borderRadius: '20px', // Increased rounded corners for tile effect
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Tile-like shadow
    backdropFilter: 'blur(30px)', // Increased blur for glass effect
    border: '1px solid rgba(255, 255, 255, 0.3)', // Optional: border to enhance tile
    padding: '2rem', // Padding inside the form
    maxWidth: '420px', // Fixed max width to simulate a tile size
    width: '100%',
    margin: '0 auto', // Center the form horizontally
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">{currState}</h1>

      <form onSubmit={handleSubmit} style={glassTileStyle} className="relative">
        {/* Back Button for Sign In */}
        {currState === 'Sign In' && (
          <div className="mb-4">
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent form submission
                setCurrState('Sign Up'); // Switch to Sign Up
              }}
              className="bg-blue-600 text-white py-1 px-2 rounded text-sm hover:bg-blue-700"
            >
              {'<<'} Back
            </button>
          </div>
        )}

        {currState === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500"
          />
          {/* Icon for toggling password visibility */}
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 cursor-pointer text-gray-600 dark:text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 focus:outline-none focus:border-blue-500"
        >
          {currState === 'Sign Up' ? 'Create Account' : 'Sign In'}
        </button>

        <div className="text-center mt-4 text-gray-700 dark:text-gray-300">
          {currState === 'Sign Up' ? (
            <p>
              Already have an account?{' '}
              <span className="text-blue-600 cursor-pointer" onClick={() => setCurrState('Sign In')}>
                Sign In Here
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <span className="text-blue-600 cursor-pointer" onClick={() => setCurrState('Sign Up')}>
                Create an Account
              </span>
            </p>
          )}
          {currState === 'Sign Up' && (
            <p className="text-blue-600 cursor-pointer mt-2" onClick={() => navigate('/')}>
              Home
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
``
