"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Timer from "../components/timer";
import Controls from "../components/controls";
import LapList from "../components/laplist";
import Navbar from "../components/navbar";
import SwitchTab from "../components/SwitchTab"; // Correct import

const AutoCounterPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const lapsEndRef = useRef(null);
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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  useEffect(() => {
    lapsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [laps]);

  const formatTime = useCallback((time) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const centiseconds = time % 100;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
  }, []);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, count]);
  };

  const handleSwitchToTimer = () => {
    navigate("/timer"); // Navigate to the Timer page
  };

  return (
    <div className={`h-svh bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-305`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="flex flex-col items-center justify-center h-[84vh] p-4 sm:p-6 md:p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg transition-all duration-300 ease-in-out">
          <Timer formattedTime={formatTime(count)} />
          <Controls isRunning={isRunning} handleStartStop={handleStartStop} handleLap={handleLap} handleReset={handleReset} />
          <LapList laps={laps} formatTime={formatTime} lapsEndRef={lapsEndRef} />
          <button onClick={handleSwitchToTimer} className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition">
            Switch to Timer Tab
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoCounterPage;
