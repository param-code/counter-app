import { Link, useNavigate } from 'react-router-dom';
import { Button } from "./ui/button"
import { Github, Moon, Sun, Globe } from "lucide-react"
import logo from "../assets/logo2.png"
import darkLogo from "../assets/logo3.png"; // Use an appropriate dark version of the logo
import timer from "../assets/timer1.png";
import worldClock from "../assets/clock.png";
import "./css/navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../services/operations/authAPI';

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:text-blue-800 dark:hover:text-blue-300">
              <img
                src={theme === 'dark' ? darkLogo : logo} // Conditionally render the logo based on the theme
                alt={theme === 'dark' ? "Dark Logo" : "Logo"}
                className="h-22 w-60 transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <Link to="/timer" className="pages font-bold text-xl text-blue-600 ml-6 dark:text-blue-400 mr-8">
              <img
                src={timer}
                alt="Timer"
                className="h-9 w-55"
              />
            </Link>
            <Link to="/WorldClock" className="pages font-bold text-xl text-blue-600 dark:text-blue-400">
              <img
                src={worldClock}
                alt="World Clock"
                className="h-9 w-55"
              />
            </Link>
          </div>
          <div>
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <Button
                onClick={() => window.open('https://github.com/param-code/counter-app')}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Github className='h-5 w-5 transition-all duration-300 ease-in-out hover:text-blue-500' />
              </Button>

              {/* World Clock button */}
              <Button
                onClick={() => navigate('/WorldClock')}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 hover:-rotate-12 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Globe className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-green-500" />
              </Button>

              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {theme === 'dark' ? 
                  <Sun className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-yellow-500" /> : 
                  <Moon className="h-5 w-5 transition-all duration-300 ease-in-out hover:text-indigo-500" />
                }
              </Button>

              {/* Sign-Up Link */}
              {
                user? (<button
                        className="px-4 text-center py-3 mx-auto rounded-lg border-[1px] border-blue-800 hover:bg-blue-600 text-black hover:text-white"
                        onClick={() => dispatch(logout(navigate))}>
                        LogOut
                      </button>) :
                      (<Link 
                        to="/signup" 
                        className="px-4 text-center rounded-lg mx-auto py-3 border-[1px] border-blue-800 hover:bg-blue-600 text-black hover:text-white"
                      >
                        Sign Up
                      </Link>)
              }
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
