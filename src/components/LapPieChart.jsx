import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const LapTimePieChart = ({ laps, formatTime }) => {
  // Calculate total lap time
  const totalLapTime = laps.reduce((acc, lap) => acc + lap, 0);

  // Create data for the pie chart
  const data = laps.map((lap, index) => ({
    name: `Lap ${index + 1}`,
    value: lap,
  }));
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5555'];

  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, value }) => `${name}: ${formatTime(value)}`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [formatTime(value), 'Lap Time']} />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default LapTimePieChart;
