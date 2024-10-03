'use client'

import React from 'react'
import {Button} from './ui/button'
import { Play, Pause, Flag, RotateCcw } from "lucide-react"

const Controls = ({ isRunning, handleStartStop, handleLap, handleReset }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8">
      <Button
        onClick={handleStartStop}
        className={`w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full text-white font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95 ${
          isRunning
            ? 'bg-red-500 hover:bg-red-600 active:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800'
            : 'bg-green-500 hover:bg-green-600 active:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:active:bg-green-800'
        }`}
      >
        {isRunning ? <Pause className="mr-2 h-4 w-4 animate-pulse" /> : <Play className="mr-2 h-4 w-4 animate-bounce" />}
        {isRunning ? 'Stop' : 'Start'}
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
