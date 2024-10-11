"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Timer from "../components/timer";
import Controls from "../components/controls";
import LapList from "../components/laplist";
import Navbar from "../components/navbar";
import LapAnalysis from "../components/LapAnalysis";
import LapVisualization from "../components/LapVisualization";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version for smaller bundle
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
  const [init, setInit] = useState(false);

  // Load particle engine only once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Load theme from local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Apply theme changes to body and local storage
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

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 ${theme === 'dark' ? 'dark:bg-gray-900' : 'bg-white'}`}>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
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
      <div className="container mx-auto px-2 py-4 max-w-xl">
        <div className="mt-16 inset-0 bg-slate-400 bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
          <div className="relative p-4 sm:p-6">
            <div className=" rounded-lg"></div> {/* Blurred background */}
            <div className="relative z-10"> {/* Ensure content is above blurred background */}
              <Timer formattedTime={formatTime(count)} />
              <Controls
                isRunning={isRunning}
                handleStartStop={handleStartStop}
                handleLap={handleLap}
                handleReset={handleReset}
              />
            </div>
          </div>
          <div className="p-4 sm:p-6 z-10">
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