import React, { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "../components/navbar";
import SwitchTab from "../components/SwitchTab";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version for smaller bundle
import "./TimerPage.css";

const TimerPage = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [customTime, setCustomTime] = useState(0);
  //for pop-ups
  const [message, setMessage] = useState("");
  const timerRef = useRef(null);
  const [theme, setTheme] = useState("light");
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

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000); // Message disappears after 2 seconds
  };

  const handleStart = () => {
    if (customTime > 0) {
      setSecondsLeft(customTime);
      setIsRunning(true);
      setIsPaused(false);
      showMessage("Timer started!");
    }
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    clearInterval(timerRef.current);
    showMessage(isPaused ? "Timer Resumed!" : "Timer Paused!");
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(0);
    clearInterval(timerRef.current);
    showMessage("Timer reset!");
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

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div
      className={`h-svh bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 ${
        theme === "dark" ? "dark:bg-gray-900" : "bg-white"
      }`}
    >
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
      <Navbar
        theme={theme}
        toggleTheme={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
      />
      <div className="flex flex-col items-center justify-center h-[84vh] p-4 sm:p-6 md:p-8">
        <div className="bg-slate-400bg-opacity-10 backdrop-blur-sm dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg transition-all duration-300 ease-in-out">
          <h1>Timer</h1>
          <div className="timer-display">{formatTime(secondsLeft)}</div>
          <div>
            {message && (
              <div
                className="popup"
                style={{
                  animation: "fall 0.5s ease forwards, hide 0.5s ease forwards",
                  animationDelay: "2s",
                }}
              >
                {message}
              </div>
            )}

            <input
              type="number"
              placeholder="Enter time in seconds"
              value={customTime}
              onChange={(e) => setCustomTime(Math.max(0, e.target.value))}
              className="text-black"
            />
          </div>
          <div className="button-container space-x-2">
            <button className="start-button p-2" onClick={handleStart}>
              Start
            </button>
            <button className="pause-button p-2" onClick={handlePause}>
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button className="reset-button p-2" onClick={handleReset}>
              Reset
            </button>
          </div>
          <div className="preset-buttons">
            <button onClick={() => handlePreset(60)}>1 Min</button>
            <button onClick={() => handlePreset(300)}>5 Mins</button>
            <button onClick={() => handlePreset(600)}>10 Mins</button>
          </div>
          <SwitchTab /> {/* Include the SwitchTab component here */}
        </div>
      </div>
    </div>
  );
};

export default TimerPage;
