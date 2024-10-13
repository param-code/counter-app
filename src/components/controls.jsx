'use client'

import  { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from './ui/button'
import { Play, Pause, Flag, RotateCcw } from "lucide-react"

// const ProgressBar = ({ progress }) => {
//   const [animatedProgress, setAnimatedProgress] = useState(0);

//   useEffect(() => {
//     const animationDuration = 300;
//     const framesPerSecond = 60;
//     const totalFrames = (animationDuration / 1000) * framesPerSecond;
//     const progressIncrement = (progress - animatedProgress) / totalFrames;

//     let frame = 0;
//     const animateProgress = () => {
//       if (frame < totalFrames) {
//         setAnimatedProgress(prev => Math.min(prev + progressIncrement, progress));
//         frame++;
//         console.log(frame)
//         requestAnimationFrame(animateProgress);
//       }
//     };

//     animateProgress();
//   }, [animatedProgress, progress]);

//   return (
//     <div className="w-full bg-gray-200 rounded-full h-3 mb-4 dark:bg-gray-700 overflow-hidden relative">
//       <div 
//         className="absolute top-0 left-0 h-full w-full bg-blue-200 dark:bg-blue-900 opacity-30 animate-pulse"
//       ></div>
//       <div 
//         className="h-full rounded-full transition-all duration-300 ease-out relative overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700"
//         style={{ width: `${animatedProgress}%` }}
//       >
//         <div className="absolute top-0 left-0 h-full w-full bg-white opacity-20 animate-shimmer"></div>
//       </div>
//     </div>
//   )
// }



// const Controls = ({ isRunning, handleStartStop, handleLap, handleReset, elapsedTime, totalTime }) => {
  
//   const progress = totalTime > 0 ? (elapsedTime / totalTime) * 100 : 0;

//   useEffect(() => {
//     console.log('Controls rendered. isRunning:', isRunning, 'elapsedTime:', elapsedTime, 'totalTime:', totalTime);
//   }, [isRunning, elapsedTime, totalTime]);

//   const onStartStop = () => {
//     console.log('Start/Stop clicked. Current state:', isRunning);
//     handleStartStop();
//   };

//   const onLap = () => {
//     console.log('Lap clicked. Current time:', elapsedTime);
//     handleLap();
//   };

//   const onReset = () => {
//     console.log('Reset clicked.');
//     handleReset();
//     setElapsedTime(0);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <div className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8">
//         <Button
//           onClick={onStartStop}
//           className={`w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full relative border hover:border-green-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-15 w-56 bg-green-800 p-2 flex justify-center items-center font-extrabold ${isRunning
//             ? 'bg-red-500 hover:bg-red-600 active:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800'
//             : 'bg-green-500 hover:bg-green-600 active:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:active:bg-green-800'
//             }`}
//         >
//           {isRunning ?
//           (<>
//             <div className="absolute z-10 w-48 h-8 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-900 delay-150 group-hover:delay-75"></div>
//             <div className="absolute z-10 w-40 h-8 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-800 delay-150 group-hover:delay-100"></div>
//             <div className="absolute z-10 w-32 h-8 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-700 delay-150 group-hover:delay-150"></div>
//             <div className="absolute z-10 w-24 h-8 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-600 delay-150 group-hover:delay-200"></div>
//             <div className="absolute z-10 w-16 h-8 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-500 delay-150 group-hover:delay-300"></div>
//             <Pause className="z-10 mr-2 h-4 w-4" /> 
//             <span className='z-10'>Stop</span>
//           </>) :
//           (<>
//             <div className="absolute z-10 w-15 h-18 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-900 delay-150 group-hover:delay-75"></div>
//             <div className="absolute z-10 w-4 h-18 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-800 delay-150 group-hover:delay-100"></div>
//             <div className="absolute z-10 w-3 h-18 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-700 delay-150 group-hover:delay-150"></div>
//             <div className="absolute z-10 w-2 h-18 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-600 delay-150 group-hover:delay-200"></div>
//             <div className="absolute z-10 w-1 h-18 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-500 delay-150 group-hover:delay-300"></div>
//             <Play className="z-10 mr-2 h-4 w-4" /> 
//             <span className='z-10'>Start</span>
//           </>)
//           }
//         </Button>

//         <Button
//           onClick={onLap}
//           disabled={!isRunning}
//           className={`w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full bg-blue-500 text-white font-medium transition-all duration-300 ease-in-out transform
//             ${isRunning 
//               ? 'hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 hover:scale-105 hover:shadow-lg active:scale-95 hover:rotate-1' 
//               : 'opacity-50 cursor-not-allowed'
//             }`}
//         >
//           <Flag className={`mr-2 h-4 w-4 ${isRunning ? 'animate-spin-slow' : ''}`} />
//           Lap
//         </Button>

//         <Button
//           onClick={onReset}
//           className="w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full bg-gray-500 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-800 text-white font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95 hover:-rotate-1"
//         >
//           <RotateCcw className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
//           Reset
//         </Button>
//       </div>
      
//       <ProgressBar progress={progress} />
//     </div>
//   )
// }


//Dhruv's code


const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const animationDuration = 300; // Animation duration in milliseconds
    const framesPerSecond = 60; // Frames per second
    const totalFrames = (animationDuration / 1000) * framesPerSecond; // Total frames for the animation
    const progressIncrement = (progress - animatedProgress) / totalFrames;

    let frame = 0;
    const animateProgress = () => {
      if (frame < totalFrames) {
        setAnimatedProgress((prev) => Math.min(prev + progressIncrement, progress));
        frame++;
        requestAnimationFrame(animateProgress);
      }
    };

    animateProgress();
  }, [animatedProgress, progress]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-4 dark:bg-gray-700 overflow-hidden relative">
      <div className="absolute top-0 left-0 h-full w-full bg-blue-200 dark:bg-blue-900 opacity-30 animate-pulse"></div>
      <div
        className="h-full rounded-full transition-all duration-300 ease-out relative overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700"
        style={{ width: `${animatedProgress}%` }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-white opacity-20 animate-shimmer"></div>
      </div>
    </div>
  );
};

const Controls = ({ isRunning, handleStartStop, handleLap, handleReset }) => {
  const [elapsedTime, setElapsedTime] = useState(0); // State to track elapsed time
  const totalTime = 60; // Total time for the timer in seconds
  const progress = (elapsedTime / totalTime) * 100; // Calculate progress

  useEffect(() => {
    let timer;
    if (isRunning && elapsedTime < totalTime) {
      timer = setInterval(() => {
        setElapsedTime((prev) => Math.min(prev + 1, totalTime)); // Update elapsed time
      }, 1000);
    }
    return () => clearInterval(timer); // Clear interval on cleanup
  }, [isRunning, elapsedTime, totalTime]);

  const onStartStop = () => {
    handleStartStop(); // Toggle the running state
  };

  const onLap = () => {
    handleLap(); // Handle lap functionality
  };

  const onReset = () => {
    handleReset(); // Handle reset functionality
    setElapsedTime(0); // Reset elapsed time
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8">
        <Button
          onClick={onStartStop}
          className={`w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full relative border hover:border-green-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-15 w-56 bg-green-800 p-2 flex justify-center items-center font-extrabold ${
            isRunning
              ? 'bg-red-500 hover:bg-red-600 active:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800'
              : 'bg-green-500 hover:bg-green-600 active:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:active:bg-green-800'
          }`}
        >
          {isRunning ? (
            <>
              <Pause className="z-10 mr-2 h-4 w-4" />
              <span className="mr-2 z-10">Stop</span>
            </>
          ) : (
            <>
              <Play className="z-10 mr-2 h-4 w-4" />
              <span className="mr-2 z-10">Start</span>
            </>
          )}
        </Button>

        <Button
          onClick={onLap}
          disabled={!isRunning}
          className={`w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full bg-blue-500 text-white font-medium transition-all duration-300 ease-in-out transform ${
            isRunning
              ? 'hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 hover:scale-105 hover:shadow-lg active:scale-95 hover:rotate-1'
              : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <Flag className="mr-2 h-4 w-4" />
          Lap
        </Button>

        <Button
          onClick={onReset}
          className="w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full bg-gray-500 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-800 text-white font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95 hover:-rotate-1"
        >
          <RotateCcw className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
          Reset
        </Button>
      </div>

      <ProgressBar progress={progress} />
    </div>
  );
};

Controls.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  handleStartStop: PropTypes.func.isRequired,
  handleLap: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  //elapsedTime: PropTypes.number.isRequired,
  //totalTime: PropTypes.number.isRequired,
  //totalTime:30
};

export default Controls