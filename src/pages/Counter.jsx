import { useState, useEffect } from "react";
import Navbar from "../components/navbar";

function Counter() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState("light"); // State for theme

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleMinutesChange = (e) => {
    setMinutes(Math.max(0, Math.min(59, parseInt(e.target.value))));
  };

  const handleSecondsChange = (e) => {
    setSeconds(Math.max(0, Math.min(59, parseInt(e.target.value))));
  };

  const startTimer = () => {
    if (minutes === 0 && seconds === 0) {
      return;
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            return;
          }
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const formatTime = () => {
    const minutesStr = String(minutes).padStart(2, "0");
    const secondsStr = String(seconds).padStart(2, "0");
    return `${minutesStr}:${secondsStr}`;
  };

  return (
    <div
      className={`h-svh bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-305 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      {/* Navbar with toggleTheme function passed as a prop */}
      <Navbar toggleTheme={toggleTheme} />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700 dark:text-gray-200">
            Countdown Timer
          </h1>

          {/* Input Fields */}
          <div className="flex justify-center space-x-4 mb-6">
            {/* Minutes Input */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 dark:text-gray-200 font-medium">
                Minutes
              </label>
              <input
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={handleMinutesChange}
                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="00"
              />
            </div>

            {/* Seconds Input */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 dark:text-gray-200 font-medium">
                Seconds
              </label>
              <input
                type="number"
                min="0"
                max="59"
                value={seconds}
                onChange={handleSecondsChange}
                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="00"
              />
            </div>
          </div>

          {/* Timer Display */}
          <div className="text-5xl font-mono text-center mb-6 text-gray-900 dark:text-gray-100">
            {formatTime()}
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center space-x-4 font-mono">
            {/* Start Button */}
            <button
              onClick={startTimer}
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200 ${
                minutes === 0 && seconds === 0
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={minutes === 0 && seconds === 0}
            >
              {isRunning ? "Resume" : "Start"}
            </button>

            {/* Pause Button */}
            {isRunning && (
              <button
                onClick={pauseTimer}
                className="bg-yellow-600 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200"
              >
                Pause
              </button>
            )}

            {/* Reset Button */}
            <button
              onClick={resetTimer}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
