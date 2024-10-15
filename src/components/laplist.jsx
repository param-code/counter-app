'use client'

import React, { memo, useEffect } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { motion, AnimatePresence } from 'framer-motion'

const LapList = ({ laps, formatTime, lapsEndRef }) => {
  // Auto-scroll to the latest lap
  useEffect(() => {
    if (lapsEndRef?.current) {
      lapsEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [laps, lapsEndRef])

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
      <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400 text-center">Laps</h3>
      
      <ScrollArea className="h-40 rounded-md border border-gray-200 dark:border-gray-700 p-4">
        <AnimatePresence initial={false}>
          {laps.map((lap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
              transition={{ duration: 0.2 }}
              className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
            >
              <span className="font-mono text-gray-600 dark:text-gray-400">Lap {index + 1}</span>
              <span className="font-mono text-gray-800 dark:text-gray-200">{formatTime(lap)}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={lapsEndRef} />
      </ScrollArea>
    </div>
  )
}

export default LapList
