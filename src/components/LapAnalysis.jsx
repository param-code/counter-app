import React from 'react';

const LapAnalysis = ({ laps, formatTime }) => {
  if (laps.length === 0) return null;

  const lapTimes = laps.map((lap, index, array) => 
    index === 0 ? lap : lap - array[index - 1]
  );

  const averageLapTime = lapTimes.reduce((sum, time) => sum + time, 0) / lapTimes.length;
  const fastestLap = Math.min(...lapTimes);
  const slowestLap = Math.max(...lapTimes);

  return (
    <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
      <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Lap Analysis</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">Average Lap Time</p>
          <p className="font-mono text-lg text-yellow-600 dark:text-yellow-300">{formatTime(Math.round(averageLapTime))}</p>
        </div>
        <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
          <p className="text-sm text-green-800 dark:text-green-200">Fastest Lap</p>
          <p className="font-mono text-lg text-green-600 dark:text-green-300">{formatTime(fastestLap)}</p>
        </div>
        <div className="bg-red-100 dark:bg-red-900 p-3 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-200">Slowest Lap</p>
          <p className="font-mono text-lg text-red-600 dark:text-red-300">{formatTime(slowestLap)}</p>
        </div>
      </div>
    </div>
  );
};

export default LapAnalysis;
