'use client'

import React from 'react'
import { Button } from './ui/button'
import { Play, Pause, Flag, RotateCcw } from "lucide-react"

const Controls = ({ isRunning, handleStartStop, handleLap, handleReset }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8">
      <Button
        onClick={handleStartStop}
        // className={`w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full text-white font-medium transition-all duration-300 ease-in-out ${isRunning
        //   ? 'bg-red-500 hover:bg-red-600 active:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800'
        //   : 'bg-green-500 hover:bg-green-600 active:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:active:bg-green-800'
        //   }`}

        className={`w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full relative border hover:border-green-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-15 w-56 bg-green-800 p-2 flex justify-center items-center font-extrabold ${isRunning
          ? 'bg-red-500 hover:bg-red-600 active:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800'
          : 'bg-green-500 hover:bg-green-600 active:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:active:bg-green-800'
          }`}
      >
        {isRunning ?
        (<><div className="absolute z-10 w-48 h-8 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-8 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-800 delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-8 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-700 delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-8 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-600 delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-8 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-500 delay-150 group-hover:delay-300"></div>
          <Pause className="z-10 mr-2 h-4 w-4" /> 
          <span className='z-10'>Stop</span>
          </>)
          :
          (<><div className="absolute z-10 w-15 h-18 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-900 delay-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-4 h-18 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-800 delay-150 group-hover:delay-100"></div>
            <div className="absolute z-10 w-3 h-18 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-700 delay-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-2 h-18 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-600 delay-150 group-hover:delay-200"></div>
            <div className="absolute z-10 w-1 h-18 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-500 delay-150 group-hover:delay-300"></div>
            <Play className="z-10 mr-2 h-4 w-4" /> 
            <span className='z-10'>Start</span>
            </>)
        }
        
      </Button>




      <Button
        onClick={handleLap}
        disabled={!isRunning}
        className={`w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full bg-blue-500 text-white font-medium transition-all duration-300 ease-in-out transform
          ${isRunning 
            ? 'hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 hover:scale-105 hover:shadow-lg active:scale-95 hover:rotate-1' 
            : 'opacity-50 cursor-not-allowed'
          }`}
      >
        <Flag className={`mr-2 h-4 w-4 ${isRunning ? 'animate-spin-slow' : ''}`} />
        Lap
      </Button>

      <Button
        onClick={handleReset}
        className="w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full bg-gray-500 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-800 text-white font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95 hover:-rotate-1"
      >
        <RotateCcw className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />

        Reset
      </Button>
    </div>
  )
}

export default Controls
