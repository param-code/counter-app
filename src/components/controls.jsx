'use client'

import React from 'react'
import { Button } from './ui/button'
import { Play, Pause, Flag, RotateCcw } from "lucide-react"

const Controls = ({ isRunning, handleStartStop, handleLap, handleReset }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8">
      <Button
        onClick={handleStartStop}
        className={`w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full text-white font-medium transition-all duration-300 ease-in-out ${isRunning
            ? 'bg-red-500 hover:bg-red-600 active:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800'
            : 'bg-green-500 hover:bg-green-600 active:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:active:bg-green-800'
          }`}
      >
        {isRunning ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
        {isRunning ? 'Stop' : 'Start'}
      </Button>
      <Button
        onClick={handleLap}
        disabled={!isRunning}
        // className="w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800  font-medium transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        className="w-full sm:w-auto flex-1 sm:flex-none rounded-full px-4 py-2 bg-blue-500 text-green-400  text-white border-rounded  border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group dark:hover:bg-blue-700"
      >
        <Flag className="mr-2 h-4 w-4" />
        <span className="bg-blue-500 shadow-blue-500 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        Lap
      </Button>
      
      <Button
        onClick={handleReset}
        className="w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-full bg-gray-500 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-800 text-white font-medium transition-all duration-300 ease-in-out group"
      >
        <RotateCcw className="mr-2 h-4 w-4 group-hover:-rotate-180 duration-300 " />
        Reset
      </Button>
    </div>
  )
}

export default Controls
