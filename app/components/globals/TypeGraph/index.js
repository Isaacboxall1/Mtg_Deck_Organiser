import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// this component currently counts the number of unique cards of each type, not taking into account quantity

export default function SimpleBarChart({ typeStats }) {

  return (
    <div style={{ width: "400px", height: "250px", boxShadow: "3px 3px 8px #c3c3c3, -3px -3px 8px #ffffff", padding: "10px", borderRadius: "20px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          layout="vertical"
          height={200}
          data={typeStats}
          margin={{
            top: 5,
            right: 30,
            left: 40,
            bottom: 5,
          }}
        >
          <XAxis
            tick={{ fontSize: 12, fill: "white", fontFamily: "Comfortaa" }}
            type="number"
            dataKey="value"
          />
          <YAxis
            tick={{ fontSize: 12, fill: "white", fontFamily: "Comfortaa" }}
            type="category"
            dataKey="name"
          />
          <Tooltip />
          <Bar dataKey="value" fill="blue" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
