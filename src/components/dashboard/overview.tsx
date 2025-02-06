import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    revenue: 400,
    repairs: 24,
    month: "Jan",
  },
  {
    revenue: 300,
    repairs: 18,
    month: "Feb",
  },
  {
    revenue: 500,
    repairs: 35,
    month: "Mar",
  },
  {
    revenue: 450,
    repairs: 28,
    month: "Apr",
  },
  {
    revenue: 600,
    repairs: 45,
    month: "May",
  },
  {
    revenue: 550,
    repairs: 42,
    month: "Jun",
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Tooltip />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="repairs"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}