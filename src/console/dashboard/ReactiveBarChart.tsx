import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sunday",
    Reactive: 4,
    Proactive: 7,
  },
  {
    name: "Monday",
    Reactive: 2,
    Proactive: 5,
  },
  {
    name: "Tuesday",
    Reactive: 4,
    Proactive: 3,
  },
  {
    name: "Wednesday",
    Reactive: 1,
    Proactive: 9,
  },
  {
    name: "Thursday",
    Reactive: 3,
    Proactive: 7,
  },
  {
    name: "Friday",
    Reactive: 2,
    Proactive: 8,
  },
  {
    name: "Saturday",
    Reactive: 1,
    Proactive: 7,
  },
];

export default class ReactiveBarChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Reactive" fill="#c42d2d" />
          <Bar dataKey="Proactive" fill="#84d459" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
