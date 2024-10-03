import { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import moment from "moment-timezone";
import Navbar from "../components/navbar";

const WorldClockPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("UTC");
  const [currentTime, setCurrentTime] = useState(new Date());

  const countryTimezones = {
    "United States": "America/New_York",
    "United Kingdom": "Europe/London",
    "Japan": "Asia/Tokyo",
    "Australia": "Australia/Sydney",
    "New Zealand": "Pacific/Auckland",
    "France": "Europe/Paris",
    "United Arab Emirates": "Asia/Dubai",
    "Canada": "America/Toronto",
    "India": "Asia/Kolkata",
    "China": "Asia/Shanghai",
    "Brazil": "America/Sao_Paulo",
    "South Africa": "Africa/Johannesburg",
    "Russia": "Europe/Moscow",
    "Germany": "Europe/Berlin",
    "Mexico": "America/Mexico_City",
    "Italy": "Europe/Rome",
    "Argentina": "America/Argentina/Buenos_Aires",
    "Indonesia": "Asia/Jakarta",
  };

  const countries = Object.keys(countryTimezones);

  useEffect(() => {
    const timezone = countryTimezones[selectedCountry] || "UTC";
    
    const updateTime = () => {
      const now = moment();
      const time = now.tz(timezone);
      
     
      const newDate = new Date(
        time.year(),
        time.month(),
        time.date(),
        time.hour(),
        time.minute(),
        time.second()
      );
      
      setCurrentTime(newDate);
    };

   
    updateTime();

   
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  // const [theme, setTheme] = useState("");
  // const [theme, setTheme] = useState("");
  let ty="";
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      ty=storedTheme
      setTheme(storedTheme);
    }
  }, []);
  const [theme, setTheme] = useState(ty);
  // let ty="";
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] p-4 sm:p-6 md:p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg transition-all duration-300 ease-in-out">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            World Clock
          </h1>

          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="w-full mb-6 p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            <option value="UTC">UTC (Default)</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <div className="flex justify-center">
            <Clock value={currentTime} />
          </div>

          <div className="mt-6 text-center text-gray-600 dark:text-gray-300">
            {selectedCountry}: {moment(currentTime).format('YYYY-MM-DD HH:mm:ss')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldClockPage;