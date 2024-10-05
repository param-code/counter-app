"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Timer from "../components/timer";
import Controls from "../components/controls";
import LapList from "../components/laplist";
import Navbar from "../components/navbar";
import LapAnalysis from "../components/LapAnalysis";
import LapVisualization from "../components/LapVisualization";
import SwitchTab from "../components/SwitchTab"; // Correct import
import Footer from "../components/Footer"; // Import Footer component

const AutoCounterPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const lapsEndRef = useRef(null);
  const [theme, setTheme] = useState("light");
  const [showAnalysis, setShowAnalysis] = useState(false);

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
    if (!isRunning && showAnalysis) {
      setShowAnalysis(false);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
    setLaps([]);
    setShowAnalysis(false);
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, count]);
  };

  const handleShowAnalysis = () => {
    setShowAnalysis(true);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 flex flex-col`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="container mx-auto px-2 py-4 max-w-xl flex-grow">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <Timer formattedTime={formatTime(count)} />
            <Controls
              isRunning={isRunning}
              handleStartStop={handleStartStop}
              handleLap={handleLap}
              handleReset={handleReset}
            />
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6">
            {showAnalysis ? (
              <div className="space-y-6">
                <LapVisualization laps={laps} formatTime={formatTime} />
                <LapAnalysis laps={laps} formatTime={formatTime} />
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
                  onClick={() => setShowAnalysis(false)}
                >
                  Close Analysis
                </button>
              </div>
            ) : (
              <>
                <LapList
                  laps={laps}
                  formatTime={formatTime}
                  lapsEndRef={lapsEndRef}
                />
                {laps.length > 0 && (
                  <button
                    className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
                    onClick={handleShowAnalysis}
                  >
                    Show Analysis
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AutoCounterPage;