import { useState, useEffect, useCallback } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import moment from "moment-timezone";
import Navbar from "../components/navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version for smaller bundle
// import morningImage from "../assets/morningBackground.png";
import morningImage from "../assets/morningBackground.webp";
import nightImage from "../assets/nightBackground.png";
import afternoonImage from "../assets/afternoonBackground.png";  // Fix: Renamed to match usage

const WorldClockPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("UTC");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [theme, setTheme] = useState("light"); // Updated theme management
  const [init, setInit] = useState(false); // Track if particles are initialized
  const [backgroundImage, setBackgroundImage] = useState(morningImage); // Static based on time logic removed

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
    // Initialize the particles engine
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

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

  // Updated theme management similar to TimerPage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300`} style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: {
                value: theme === "dark" ? "#ffffff" : "#000000",
              },
              links: {
                color: theme === "dark" ? "#ffffff" : "#000000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 80,
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
        />
      )}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] p-4 sm:p-6 md:p-8">
        <div className="bg-opacity-10 backdrop-blur-sm bg-slate-400 dark:bg-gray-800 dark:bg-opacity-10 dark:backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg transition-all duration-300 ease-in-out">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            World Clock
          </h1>

          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
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
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '1px', borderRadius: '50%', display: 'inline-block' }}>
              <Clock value={currentTime} />
            </div>
          </div>


          <div className="mt-6 text-center text-gray-600 dark:text-gray-300">
            {selectedCountry}: {moment(currentTime).format("YYYY-MM-DD HH:mm:ss")}
          </div>
        </div>
      </div>

    </div>
  );
};

export default WorldClockPage;
