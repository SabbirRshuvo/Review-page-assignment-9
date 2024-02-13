import { Tooltip } from "bootstrap";
import React from "react";
import {
    Area,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  AreaChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const CircleCharts = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="charts">
      <div className="line-charts">
        <LineChart width={400} height={400} data={data}>
          <Line dataKey={"investment"}></Line>
          <Line dataKey={"revenue"}></Line>
          <Line dataKey={"sell"}></Line>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
        </LineChart>
        
      </div>
    </div>
  );
};

export default CircleCharts;
