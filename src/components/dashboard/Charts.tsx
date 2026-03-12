import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip,
} from "recharts";

const trendData = [
  { time: "12 AM", aqi: 120 },
  { time: "6 AM", aqi: 160 },
  { time: "12 PM", aqi: 200 },
  { time: "6 PM", aqi: 180 },
];

const areaData = [
  { name: "Rohini", aqi: 325, color: "hsl(0, 80%, 50%)" },
  { name: "Dwarka", aqi: 180, color: "hsl(30, 90%, 50%)" },
  { name: "Anand Vihar", aqi: 220, color: "hsl(30, 90%, 50%)" },
  { name: "CP", aqi: 90, color: "hsl(140, 60%, 40%)" },
];

const pieData = [
  { name: "Hazardous", value: 45, color: "hsl(0, 80%, 50%)" },
  { name: "Moderate", value: 30, color: "hsl(30, 90%, 50%)" },
  { name: "Safe", value: 25, color: "hsl(140, 60%, 40%)" },
];

const Charts = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {/* AQI Trend */}
      <div className="bg-card rounded-lg p-4">
        <h4 className="font-bold text-sm text-foreground mb-2">AQI Trend</h4>
        <div className="bg-hazardous-bg/50 rounded p-2">
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="time" tick={{ fontSize: 10 }} />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="aqi" stroke="hsl(0, 80%, 50%)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Area Wise Pollution */}
      <div className="bg-card rounded-lg p-4">
        <h4 className="font-bold text-sm text-foreground mb-2">Area Wise Pollution</h4>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={areaData}>
            <XAxis dataKey="name" tick={{ fontSize: 9 }} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="aqi">
              {areaData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pollution Distribution */}
      <div className="bg-card rounded-lg p-4">
        <h4 className="font-bold text-sm text-foreground mb-2">Pollution Distribution</h4>
        <ResponsiveContainer width="100%" height={120}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={50}
              dataKey="value"
              label={({ name, value }) => `${value}%`}
              labelLine={false}
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-3 text-xs mt-1">
          {pieData.map((d) => (
            <span key={d.name} className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ background: d.color }} />
              {d.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Charts;
