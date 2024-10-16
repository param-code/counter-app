import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const CumulativeTimeChart = ({ laps, formatTime }) => {
  // Check if laps is an array and not empty
  if (!Array.isArray(laps) || laps.length === 0) {
    return <p>No lap data available.</p>; // Handle empty laps
  }

  // Calculate cumulative times
  const cumulativeData = laps.reduce((acc, lap, index) => {
    const cumulativeTime = (acc[index - 1]?.cumulativeTime || 0) + lap; // Add current lap to the previous cumulative time
    acc.push({
      lapNumber: index + 1,
      cumulativeTime,
    });
    return acc;
  }, []);

  return (
    <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-m text-center font-semibold mx-2 my-5 text-blue-600 dark:text-white underline">Progress Graph</h3>
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={cumulativeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="lapNumber" tick={{ fontSize: 12 }} />
        <YAxis tickFormatter={(value) => formatTime(value)} />
        <Tooltip formatter={(value) => [formatTime(value), 'Cumulative Time']} />
        <Line type="monotone" dataKey="cumulativeTime" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default CumulativeTimeChart;
