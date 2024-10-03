import { Link, useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import { Github, Moon, Sun, Globe } from "lucide-react";
import logo from "../assets/logo.png";
import darkLogo from "../assets/dark.jpg"; // Use an appropriate dark version of the logo

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-blue-600 dark:text-blue-400">
              <img
                src={theme === 'dark' ? darkLogo : logo} // Conditionally render the logo based on the theme
                alt={theme === 'dark' ? "Dark Logo" : "Logo"}
                className="h-9 w-55"
              />
            </Link>
          </div>
          <div>
            <div className="ml-4 flex items-center md:ml-6">
              <Button
                onClick={() => window.open('https://www.github.com/')}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 mr-2"
              >
                <Github className="h-5 w-5" />
              </Button>

              {/* World Clock button */}
              <Button
                onClick={() => navigate('/world-clock')}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 mr-2"
              >
                <Globe className="h-5 w-5" />
              </Button>

              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
