import React from 'react';

const LapVisualization = ({ laps, formatTime }) => {
  const maxLap = Math.max(...laps);

  return (
    <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Lap Visualization</h3>
      <div className="space-y-3">
        {laps.map((lap, index) => (
          <div key={index} className="flex items-center">
            <span className="w-8 text-sm text-gray-600 dark:text-gray-400">#{index + 1}</span>
            <div className="flex-grow bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(lap / maxLap) * 100}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">{formatTime(lap)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LapVisualization;
