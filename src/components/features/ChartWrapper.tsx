import {
  LineChart, Line, BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const PLACEHOLDER_LINE_DATA = [
  { month: "Jan", series1: 0, series2: 0 },
  { month: "Feb", series1: 0, series2: 0 },
  { month: "Mar", series1: 0, series2: 0 },
  { month: "Apr", series1: 0, series2: 0 },
  { month: "May", series1: 0, series2: 0 },
  { month: "Jun", series1: 0, series2: 0 },
];

const PLACEHOLDER_BAR_DATA = [
  { platform: "[A]", value: 0, prev: 0 },
  { platform: "[B]", value: 0, prev: 0 },
  { platform: "[C]", value: 0, prev: 0 },
  { platform: "[D]", value: 0, prev: 0 },
];

const PLACEHOLDER_PIE_DATA = [
  { name: "[Category 1]", value: 25 },
  { name: "[Category 2]", value: 25 },
  { name: "[Category 3]", value: 25 },
  { name: "[Category 4]", value: 25 },
];

const PIE_COLORS = ["#6C63FF", "#00D4FF", "#FF6B9D", "#FFD700"];

const CUSTOM_TOOLTIP_STYLE = {
  background: "rgba(8,12,20,0.9)",
  border: "1px solid rgba(108,99,255,0.3)",
  borderRadius: "8px",
  fontFamily: "JetBrains Mono, monospace",
  fontSize: "12px",
  color: "#F0F4FF",
};

type ChartType = "line" | "bar" | "doughnut";

interface Props {
  type: ChartType;
  title: string;
  subtitle?: string;
}

export default function ChartWrapper({ type, title, subtitle }: Props) {
  const renderChart = () => {
    if (type === "line") {
      return (
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={PLACEHOLDER_LINE_DATA} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(108,99,255,0.08)" />
            <XAxis
              dataKey="month"
              tick={{ fill: "rgba(240,244,255,0.35)", fontSize: 11, fontFamily: "JetBrains Mono" }}
              axisLine={{ stroke: "rgba(108,99,255,0.15)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "rgba(240,244,255,0.35)", fontSize: 11, fontFamily: "JetBrains Mono" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip contentStyle={CUSTOM_TOOLTIP_STYLE} />
            <Legend wrapperStyle={{ fontFamily: "Space Grotesk", fontSize: "12px", color: "rgba(240,244,255,0.5)" }} />
            <Line
              type="monotone"
              dataKey="series1"
              stroke="#6C63FF"
              strokeWidth={2}
              dot={{ fill: "#6C63FF", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: "#6C63FF", stroke: "rgba(108,99,255,0.3)", strokeWidth: 4 }}
            />
            <Line
              type="monotone"
              dataKey="series2"
              stroke="#00D4FF"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "#00D4FF", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: "#00D4FF" }}
            />
          </LineChart>
        </ResponsiveContainer>
      );
    }

    if (type === "bar") {
      return (
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={PLACEHOLDER_BAR_DATA} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(108,99,255,0.08)" />
            <XAxis
              dataKey="platform"
              tick={{ fill: "rgba(240,244,255,0.35)", fontSize: 11, fontFamily: "JetBrains Mono" }}
              axisLine={{ stroke: "rgba(108,99,255,0.15)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "rgba(240,244,255,0.35)", fontSize: 11, fontFamily: "JetBrains Mono" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip contentStyle={CUSTOM_TOOLTIP_STYLE} />
            <Legend wrapperStyle={{ fontFamily: "Space Grotesk", fontSize: "12px", color: "rgba(240,244,255,0.5)" }} />
            <Bar dataKey="value" fill="#6C63FF" radius={[4, 4, 0, 0]} opacity={0.9} />
            <Bar dataKey="prev" fill="#00D4FF" radius={[4, 4, 0, 0]} opacity={0.5} />
          </BarChart>
        </ResponsiveContainer>
      );
    }

    // Doughnut
    return (
      <div className="flex flex-col md:flex-row items-center gap-6">
        <ResponsiveContainer width={240} height={240}>
          <PieChart>
            <Pie
              data={PLACEHOLDER_PIE_DATA}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
            >
              {PLACEHOLDER_PIE_DATA.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={PIE_COLORS[index % PIE_COLORS.length]}
                  stroke="transparent"
                />
              ))}
            </Pie>
            <Tooltip contentStyle={CUSTOM_TOOLTIP_STYLE} />
          </PieChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="space-y-3 flex-1">
          {PLACEHOLDER_PIE_DATA.map((entry, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ background: PIE_COLORS[i] }}
                />
                <span className="font-inter text-sm text-white/60">{entry.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${entry.value}%`,
                      background: PIE_COLORS[i],
                    }}
                  />
                </div>
                <span className="font-mono-code text-xs text-white/40">{entry.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="mb-6">
        <h3 className="font-syne font-bold text-xl text-white">{title}</h3>
        {subtitle && (
          <p className="font-inter text-sm text-white/40 mt-1">{subtitle}</p>
        )}
      </div>
      {renderChart()}
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="font-mono-code text-[10px] text-white/20">DATA PLACEHOLDER · MARKLYTICS</span>
        <span className="font-mono-code text-[10px] text-[#6C63FF]/50">RECHARTS</span>
      </div>
    </div>
  );
}
