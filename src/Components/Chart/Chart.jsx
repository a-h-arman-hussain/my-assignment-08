import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ ratings }) => {
  return (
    <div className="w-full h-72">
        <h1 className="text-3xl font-bold py-5">Ratings</h1>
      <ResponsiveContainer>
        <BarChart data={ratings}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar
            dataKey="count"
            barSize={40}
            fill="#8b5cf6"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
