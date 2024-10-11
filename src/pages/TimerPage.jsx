import React, { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "../components/navbar"; // Ensure you have this component
// import Timer from "../components/timer"; // You can use the same Timer component
// import Controls from "../components/controls"; // Adjust based on your needs
import SwitchTab from "../components/SwitchTab"; // Import SwitchTab
import './TimerPage.css'
import Footer from "../components/Footer";

const TimerPage = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [customTime, setCustomTime] = useState(0);
  const timerRef = useRef(null);
  const [theme, setTheme] = useState("light");

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

  useEffect(() => {
    if (isRunning && !isPaused && secondsLeft > 0) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      clearInterval(timerRef.current);
      alert("Time's up!");
      setIsRunning(false);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, isPaused, secondsLeft]);

  const handleStart = () => {
    setSecondsLeft(customTime);
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(0);
    clearInterval(timerRef.current);
  };

  const handlePreset = (time) => {
    setCustomTime(time);
    setSecondsLeft(time);
    setIsRunning(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  };

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-305`}>
      <Navbar theme={theme} toggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))} />
      <div className="flex flex-col items-center justify-center flex-grow p-4 sm:p-6 md:p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg transition-all duration-300 ease-in-out">
          <h1>Timer</h1>
          <div className="timer-display">{formatTime(secondsLeft)}</div>
          <div>
            <input
              type="number"
              placeholder="Enter time in seconds"
              value={customTime}
              onChange={(e) => setCustomTime(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button className="start-button" onClick={handleStart}>Start</button>
            <button className="pause-button" onClick={handlePause}>{isPaused ? "Resume" : "Pause"}</button>
            <button className="reset-button" onClick={handleReset}>Reset</button>
          </div>
          <div className="preset-buttons">
            <button onClick={() => handlePreset(60)}>1 Min</button>
            <button onClick={() => handlePreset(300)}>5 Mins</button>
            <button onClick={() => handlePreset(600)}>10 Mins</button>
          </div>
          <SwitchTab /> {/* Include the SwitchTab component here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TimerPage;