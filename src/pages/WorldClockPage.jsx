import { useState, useEffect } from "react";
import Navbar from "../components/navbar";

const WorldClockPage = () => {
  const [selectedCountry, setSelectedCountry] = useState('UTC');
  const [currentTime, setCurrentTime] = useState(new Date());

 
  const countryTimezones = {
    "United States": "America/New_York",
    "United Kingdom": "Europe/London",
    "Japan": "Asia/Tokyo",
    "Australia": "Australia/Sydney",
    "New Zealand": "Pacific/Auckland",
    "France": "Europe/Paris",
    "United Arab Emirates": "Asia/Dubai",
    "Canada": "America/Los_Angeles",
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
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: countryTimezones[selectedCountry] || 'UTC',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] p-4 sm:p-6 md:p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg transition-all duration-300 ease-in-out">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">World Clock</h1>

          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full mb-6"
          >
            <option value="" disabled>Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <div className="text-5xl font-mono text-center text-gray-800 dark:text-white">
            {formatTime(currentTime)}
          </div>

          <div className="mt-6 text-center text-gray-600 dark:text-gray-300">
            {selectedCountry ? countryTimezones[selectedCountry] : "UTC"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldClockPage;
