import { Link, useNavigate } from 'react-router-dom';
import { Button } from "./ui/button"
import { Github, Moon, Sun, Globe } from "lucide-react"
import logo from "../assets/logo.png"
import darkLogo from "../assets/dark.jpg"; // Use an appropriate dark version of the logo
import timer from "../assets/timer1.png";
import worldClock from "../assets/clock.png";
import "./css/navbar.css"

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:text-blue-800 dark:hover:text-blue-300">
              <img
                src={theme === 'dark' ? darkLogo : logo} // Conditionally render the logo based on the theme
                alt={theme === 'dark' ? "Dark Logo" : "Logo"}
                className="h-9 w-55 transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <Link to="/timer" className="pages font-bold text-xl text-blue-600 dark:text-blue-400 mr-8">
              <img
                src={timer}
                alt="Timer"
                className="h-9 w-55"
              />
            </Link>
            <Link to="/world-clock" className="pages font-bold text-xl text-blue-600 dark:text-blue-400">
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
                onClick={() => navigate('/world-clock')}
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
