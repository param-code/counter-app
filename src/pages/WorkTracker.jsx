import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";

const WorkTracker = () => {
    const [subject, setSubject] = useState(""); // Subject input
    const [minutes, setMinutes] = useState(0); // Preset minutes input
    const [seconds, setSeconds] = useState(0); // Preset seconds input
    const [isRunning, setIsRunning] = useState(false); // Timer state
    const [subjects, setSubjects] = useState([]); // Array to store subjects and time spent
    const [currentTime, setCurrentTime] = useState({ minutes: 0, seconds: 0 }); // Time for current session
    const [showAnalysis, setShowAnalysis] = useState(false); // Toggle analysis view
    const [showPopup, setShowPopup] = useState(false); // Popup for time's up
    const [showStopModal, setShowStopModal] = useState(false); // Popup for stop confirmation
    const [presetTime, setPresetTime] = useState({ minutes: 0, seconds: 0 }); // Preset time storage
    const [isTimeSet, setIsTimeSet] = useState(false); // Check if time has been set
    const [theme, setTheme] = useState("light"); // State for theme

    // Handles subject name change
    const handleSubjectChange = (e) => setSubject(e.target.value);

// Function to toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

    const calculateMostAndLeastTimeSpent = () => {
        if (subjects.length === 0) return { mostTimeSpent: {}, leastTimeSpent: {} };

        let mostTimeSpent = subjects[0];
        let leastTimeSpent = subjects[0];

        subjects.forEach(sub => {
            const totalTimeSub = sub.minutes * 60 + sub.seconds;
            const totalTimeMost = mostTimeSpent.minutes * 60 + mostTimeSpent.seconds;
            const totalTimeLeast = leastTimeSpent.minutes * 60 + leastTimeSpent.seconds;

            if (totalTimeSub > totalTimeMost) {
                mostTimeSpent = sub;
            }
            if (totalTimeSub < totalTimeLeast) {
                leastTimeSpent = sub;
            }
        });

        return { mostTimeSpent, leastTimeSpent };
    };
    // Timer logic (counts upwards from 0)
    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                if (
                    currentTime.minutes === presetTime.minutes &&
                    currentTime.seconds === presetTime.seconds
                ) {
                    clearInterval(intervalId);
                    timerFinished();
                } else {
                    // Increment time
                    if (currentTime.seconds === 59) {
                        setCurrentTime((prev) => ({
                            minutes: prev.minutes + 1,
                            seconds: 0,
                        }));
                    } else {
                        setCurrentTime((prev) => ({
                            ...prev,
                            seconds: prev.seconds + 1,
                        }));
                    }
                }
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, currentTime, presetTime]);

    // When the timer finishes
    const timerFinished = () => {
        setIsRunning(false);
        setShowPopup(true); // Show styled popup when time runs out
    };

    // Save the subject and time to the list
    const saveSubjectTime = () => {
        setSubjects((prevSubjects) => [
            ...prevSubjects,
            {
                subject,
                minutes: currentTime.minutes,
                seconds: currentTime.seconds,
            },
        ]);
        resetTimer();
    };

    // Set the time and disable further changes
    const setTime = () => {
        setPresetTime({ minutes, seconds });
        setIsTimeSet(true); // Disable input changes
    };

    // Start the timer
    const startTimer = () => {
        if (!isTimeSet) {
            return; // Don't start if time isn't set
        }
        setIsRunning(true);
    };

    // Reset the timer
    const resetTimer = () => {
        setMinutes(0);
        setSeconds(0);
        setSubject("");
        setIsRunning(false);
        setCurrentTime({ minutes: 0, seconds: 0 }); // Reset the current time too
        setIsTimeSet(false); // Allow new time input
    };

    // Stop the timer and ask for confirmation
    const stopTimer = () => {
        setIsRunning(false);
        setShowStopModal(true); // Show confirmation modal
    };

    // Handle stop modal confirmation
    const handleStopConfirmation = (continueTimer) => {
        if (continueTimer) {
            setIsRunning(true); // Continue timer
        } else {
            saveSubjectTime(); // Save the subject and stop
        }
        setShowStopModal(false); // Close modal
    };

    // Prepare data for pie chart analysis
    const chartData = {
        labels: subjects.map((sub) => sub.subject),
        datasets: [
            {
                label: "Time Spent on Subjects",
                data: subjects.map((sub) => sub.minutes * 60 + sub.seconds), // Convert time to total seconds
                backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56", "#4bc0c0"],
            },
        ],
    };



    const { mostTimeSpent, leastTimeSpent } = calculateMostAndLeastTimeSpent();

    return (
        <div
        className={`h-svh bg-gradient-to-br mb-10 from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-305 ${
            theme === "dark" ? "dark" : ""
          }`}
    >
        <Navbar toggleTheme={toggleTheme} />
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
                <div className=" bg-gray-100 dark:bg-gray-900 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-20 p-7">
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
                        <h1 className="text-3xl font-bold text-center mb-6 text-gray-700 dark:text-gray-200">Study/Work Tracker</h1>

                        {/* Subject Input */}
                        <div className="mb-6">
                            <label className="mb-2 text-gray-700 dark: text-gray-200 font-medium">Subject</label>
                            <input
                                type="text"
                                value={subject}
                                onChange={handleSubjectChange}
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                placeholder="Enter subject or task"
                            />
                        </div>

                        {/* Timer Inputs */}
                        <div className="flex justify-center space-x-4 mb-6">
                            <div className="flex flex-col">
                                <label className="mb-2 text-gray-700 dark:text-gray-200 font-medium">Set Time (Minutes)</label>
                                <input
                                    type="number"
                                    min="0"
                                    max="59"
                                    value={minutes}
                                    onChange={(e) =>
                                        !isTimeSet && setMinutes(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))
                                    }
                                    className="border border-gray-300 rounded-md px-3 py-2"
                                    placeholder="00"
                                    disabled={isTimeSet} // Disable once time is set
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 text-gray-700 dark:text-gray-200 font-medium">Set Time (Seconds)</label>
                                <input
                                    type="number"
                                    min="0"
                                    max="59"
                                    value={seconds}
                                    onChange={(e) =>
                                        !isTimeSet && setSeconds(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))
                                    }
                                    className="border border-gray-300 rounded-md px-3 py-2"
                                    placeholder="00"
                                    disabled={isTimeSet} // Disable once time is set
                                />
                            </div>
                        </div>

                        {/* Set Time Button */}
                        {!isTimeSet && (
                            <div className="flex justify-center mb-6">
                                <button
                                    onClick={setTime}
                                    className={`bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md ${minutes === 0 && seconds === 0 ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                    disabled={minutes === 0 && seconds === 0} // Disable if time is not set
                                >
                                    Set Time
                                </button>
                            </div>
                        )}

                        {/* Timer Display */}
                        <div className="text-5xl font-mono dark: text-gray-200 text-center mb-6">
                            {String(currentTime.minutes).padStart(2, "0")}:{String(currentTime.seconds).padStart(2, "0")}
                        </div>

                        {/* Control Buttons */}
                        <div className="flex justify-center space-x-4 font-mono">
                            <button
                                onClick={startTimer}
                                className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200 ${!isTimeSet ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                disabled={!isTimeSet}
                            >
                                {isRunning ? "Running" : "Start"}
                            </button>
                            <button
                                onClick={stopTimer}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200"
                                disabled={minutes === 0 && seconds === 0}
                            >
                                Stop
                            </button>
                            <button
                                onClick={resetTimer}
                                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200"
                                disabled={minutes === 0 && seconds === 0}
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mt-6 w-full max-w-md">
                        {/* Tracked Subjects List */}
                        <h2 className="text-xl font-bold text-center dark:text-gray-200 mb-4">Tracked Subjects</h2>
                        {subjects.length === 0 ? (
                            //<p className="text-center ">No subjects logged yet.</p>
                            <h2 className="text-xs font-bold text-center dark:text-gray-200 mb-">No subjects logged yet</h2>
                        ) : (
                            <ul className="space-y-2">
                                {subjects.map((sub, index) => (
                                    <li key={index} className="text-center font-semibold dark: text-gray-200">
                                        {sub.subject}: {sub.minutes} min {sub.seconds} sec
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Analysis Button */}
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={() => setShowAnalysis(!showAnalysis)}
                                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200"
                                disabled={subjects.length === 0}
                            >
                                {showAnalysis ? "Hide Analysis" : "Show Analysis"}
                            </button>
                        </div>

                        {showAnalysis && (
                            <div className="mt-8 w-full max-w-4xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
                                <h2 className="text-2xl font-bold text-center dark:text-gray-200 mb-4">Analysis</h2>



                                {/* Most and Least time spent subjects */}
                                <div className="mt-4">
                                    <h3 className="text-xl dark:text-gray-200 font-semibold">Most Time Spent on:</h3>
                                    <p>{mostTimeSpent.subject || "N/A"} - {mostTimeSpent.minutes} minutes {mostTimeSpent.seconds} seconds</p>

                                    <h3 className="text-xl font-semibold dark:text-gray-200 mt-4">Least Time Spent on:</h3>
                                    <p>{leastTimeSpent.subject || "N/A "} - {leastTimeSpent.minutes} minutes {leastTimeSpent.seconds} seconds</p>
                                </div>
                            </div>
                        )}

                        {/* Time's Up Popup */}
                        {showPopup && (
                            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
                                <div className="bg-white p-6 dark:bg-gray-800 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold dark:text-gray-200     mb-4 ">Time's Up!</h3>
                                    <button
                                        onClick={() => {
                                            setShowPopup(false);
                                            saveSubjectTime(); // Automatically save subject when closing
                                        }}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Stop Timer Confirmation Modal */}
                        {showStopModal && (
                            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold mb-4">Stop the timer?</h3>
                                    <div className="flex justify-between gap-2">
                                        <button
                                            onClick={() => handleStopConfirmation(true)}
                                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md"
                                        >
                                            Continue
                                        </button>
                                        <button
                                            onClick={() => handleStopConfirmation(false)}
                                            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md"
                                        >
                                            Stop and Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>




                </div>
            </div>
        </div>
    );
};

export default WorkTracker;

