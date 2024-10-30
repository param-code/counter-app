import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Github, Moon, Sun, Globe, Info, Users,Plus } from "lucide-react";
// import logo from "../assets/logo1.png"
// import darkLogo from "../assets/darklogo1.png"; // Use an appropriate dark version of the logo
// import timer from "../assets/timer1.png";
// import worldClock from "../assets/clock.png";

import logo from "../assets/logo1.webp";
import darkLogo from "../assets/darklogo1.webp"; // Use an appropriate dark version of the logo
import timer from "../assets/timer1.webp";
import worldClock from "../assets/clock.webp";
import "./css/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/operations/authAPI";

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="font-bold text-xl text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:text-blue-800 dark:hover:text-blue-300"
            >
              <img
                src={theme === "dark" ? darkLogo : logo}
                alt={theme === "dark" ? "Dark Logo" : "Logo"}
                className="h-9 w-55 transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <Link
              to="/timer"
              className="pages font-bold text-xl text-blue-600 ml-6 dark:text-blue-400 mr-8 hidden sm:inline-block"
            >
              <img src={timer} alt="Timer" className="h-9 w-55" />
            </Link>
            <Link
              to="/WorldClock"
              className="pages font-bold text-xl text-blue-600 dark:text-blue-400 hidden sm:inline-block"
            >
              <img src={worldClock} alt="World Clock" className="h-9 w-55" />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleToggleMenu}
              className="sm:hidden text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded focus:outline-none"
            >
              <span className="sr-only">Open Main Menu</span>
              {/* Simple Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className={`sm:flex items-center space-x-4 hidden sm:block`}>
              <Button
                onClick={() =>
                  window.open("https://github.com/param-code/counter-app")
                }
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Github className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-blue-500" />
              </Button>

              <Button
                onClick={() => navigate("/WorldClock")}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 hover:-rotate-12 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Globe className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-green-500" />
              </Button>

              <Button
                onClick={() => navigate("/about")}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Info className="h-5 w-5 transition-all duration-300 ease-in-out" />
              </Button>

              <Button
                onClick={() => navigate("/Contributors")}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 hover:-rotate-12 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Users className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-red-500" />
              </Button>

              {user && (
                <Button
                  onClick={() => navigate("/todo")} 
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-blue-500" />
                </Button>
              )}

              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-indigo-500" />
                )}
              </Button>
            </div>
            {/* Conditional rendering for LogOut or Sign Up button */}
            <div className="hidden sm:block">
              {user ? (
                <button
                  className="px-4 text-center py-3 mx-auto rounded-lg border-[1px] border-blue-800 hover:bg-blue-600 text-black hover:text-white"
                  onClick={() => dispatch(logout(navigate))}
                >
                  LogOut
                </button>
              ) : (
                <Link
                  to="/signup"
                  className={`px-4 text-center rounded-lg mx-auto py-3 border-[1px] border-blue-800 hover:bg-blue-600 ${
                    theme === "dark" ? "text-white" : "text-black"
                  } hover:text-white transition-colors duration-300`}
                >
                  Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* Small Screen Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white dark:bg-gray-800 py-4">
            <Link
              to="/timer"
              className="pages font-bold text-xl text-blue-600 dark:text-blue-400 block mb-2 flex items-center"
            >
              <img src={timer} alt="Timer" className="h-9 w-55" />
              <span className="ml-2">Timer</span>
            </Link>
            <Link
              to="/WorldClock"
              className="pages font-bold text-xl text-blue-600 dark:text-blue-400 block mb-2 flex items-center"
            >
              <img src={worldClock} alt="World Clock" className="h-9 w-55" />
              <span className="ml-2">World Clock</span>
            </Link>
            <div className="mt-4">
              {user ? (
                <button
                  className="px-4 w-full text-center py-3 rounded-lg border-[1px] border-blue-800 hover:bg-blue-600 text-black hover:text-white"
                  onClick={() => dispatch(logout(navigate))}
                >
                  LogOut
                </button>
              ) : (
                <Link
                  to="/signup"
                  className={`px-4 w-full text-center py-3 rounded-lg border-[1px] border-blue-800 hover:bg-blue-600 ${
                    theme === "dark" ? "text-white" : "text-black"
                  } hover:text-white transition-colors duration-300`}
                >
                  Sign Up
                </Link>
              )}
            </div>
            {/* Display buttons in a single line */}
            <div className="flex justify-around mt-4 space-x-2">
              <Button
                onClick={() =>
                  window.open("https://github.com/param-code/counter-app")
                }
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Github className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-blue-500" />
              </Button>

              <Button
                onClick={() => navigate("/WorldClock")}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Globe className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-green-500" />
              </Button>

              <Button
                onClick={() => navigate("/about")}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Info className="h-5 w-5 transition-all duration-300 ease-in-out" />
              </Button>

              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-indigo-500" />
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
