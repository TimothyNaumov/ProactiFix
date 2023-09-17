import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";

const data = [
  { name: "Reactive", value: 30 },
  { name: "Proactive", value: 50 },
  { name: "Scheduled", value: 20 },
];
const COLORS = ["#FF8042", "#00C49F", "#FFBB28"];

export default class Example extends PureComponent {
  onPieEnter: CategoricalChartFunc | undefined;
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx="50%" // adjusted to be relative
            cy="50%" // adjusted to be relative
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="top" align="right" layout="vertical" />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
