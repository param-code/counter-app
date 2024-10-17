import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell
} from 'recharts';

const BarChartLapTimes = ({ laps, formatTime }) => {
  // Function to get color based on lap index
  const getLapColor = (index) => {
    const colors = ['#82ca9d', '#ff7f50', '#6495ed', '#da70d6', '#ffd700', '#6a5acd'];
    return colors[index % colors.length]; // Cycle through colors
  };

  // Prepare the data for the chart
  const formattedData = laps.map((lap, index) => ({
    lapNumber: index + 1,
    lapTime: lap,
    color: getLapColor(index), // Add color property
  }));

  return (
    <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-m text-center font-semibold mx-2 my-5 text-blue-600 dark:text-white underline">Bar Graph</h3>
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="lapNumber" tick={{ fontSize: 12 }} />
        <YAxis />
        <Tooltip formatter={(value) => [formatTime(value), 'Lap Time']} />
        <Bar dataKey="lapTime" fill="#82ca9d" >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} /> // Use dynamic color
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default BarChartLapTimes;
