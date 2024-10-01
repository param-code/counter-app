'use client'

import React from 'react'

const Timer = ({ formattedTime }) => {
  return (
    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 sm:mb-8 font-mono text-blue-600 dark:text-blue-400 transition-all duration-300 ease-in-out">
      {formattedTime}
    </div>
  )
}

export default Timer
