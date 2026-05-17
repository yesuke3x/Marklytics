import { useState } from "react";

type SortDir = "asc" | "desc" | null;
type SortKey = keyof (typeof RAW_DATA)[number];

const YEARS = [2019, 2020, 2021, 2022, 2023];

const RAW_DATA = [
  { year: 2019, platform: "[Platform A]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
  { year: 2019, platform: "[Platform B]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
  { year: 2020, platform: "[Platform A]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
  { year: 2020, platform: "[Platform B]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
  { year: 2020, platform: "[Platform C]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
  { year: 2021, platform: "[Platform A]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
  { year: 2021, platform: "[Platform B]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
  { year: 2022, platform: "[Platform A]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
  { year: 2022, platform: "[Platform C]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
  { year: 2023, platform: "[Platform A]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
  { year: 2023, platform: "[Platform B]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
  { year: 2023, platform: "[Platform D]", campaigns: 0, reach: "0K", engagement: "0%", ctr: "0%", roi: "0x", sentiment: "N/A" },
];

const COLUMNS = [
  { key: "year", label: "Year" },
  { key: "platform", label: "Platform" },
  { key: "campaigns", label: "Campaigns" },
  { key: "reach", label: "Reach" },
  { key: "engagement", label: "Engagement" },
  { key: "ctr", label: "CTR" },
  { key: "roi", label: "ROI" },
  { key: "sentiment", label: "Sentiment" },
];

export default function DataTable() {
  const [activeYear, setActiveYear] = useState<number | "all">("all");
  const [sortKey, setSortKey] = useState<SortKey>("year");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const filtered =
    activeYear === "all"
      ? RAW_DATA
      : RAW_DATA.filter((d) => d.year === activeYear);

  const sorted = [...filtered].sort((a, b) => {
    if (!sortDir) return 0;
    const av = a[sortKey];
    const bv = b[sortKey];
    if (typeof av === "number" && typeof bv === "number") {
      return sortDir === "asc" ? av - bv : bv - av;
    }
    return sortDir === "asc"
      ? String(av).localeCompare(String(bv))
      : String(bv).localeCompare(String(av));
  });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : d === "desc" ? null : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <div>
      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="font-mono-code text-xs text-white/30 mr-2">FILTER BY YEAR</span>
        <button
          onClick={() => setActiveYear("all")}
          className={`chip ${activeYear === "all" ? "active" : ""}`}
        >
          All
        </button>
        {YEARS.map((y) => (
          <button
            key={y}
            onClick={() => setActiveYear(y)}
            className={`chip ${activeYear === y ? "active" : ""}`}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden border border-[rgba(108,99,255,0.15)] terminal">
        <div className="terminal-header">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="font-mono-code text-xs text-[#00D4FF]/60 ml-2">
            marklytics_data.db — {sorted.length} rows
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full data-table">
            <thead>
              <tr>
                {COLUMNS.map((col) => (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key as SortKey)}
                    className="select-none"
                  >
                    <div className="flex items-center gap-1">
                      {col.label}
                      <span className="opacity-40">
                        {sortKey === col.key
                          ? sortDir === "asc"
                            ? "↑"
                            : sortDir === "desc"
                            ? "↓"
                            : "⇅"
                          : "⇅"}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((row, i) => (
                <tr key={i}>
                  <td>
                    <span className="text-[#00D4FF]">{row.year}</span>
                  </td>
                  <td className="text-white/70">{row.platform}</td>
                  <td className="text-[#6C63FF]">{row.campaigns}</td>
                  <td className="text-white/50">{row.reach}</td>
                  <td className="text-white/50">{row.engagement}</td>
                  <td className="text-white/50">{row.ctr}</td>
                  <td className="text-[#FF6B9D]">{row.roi}</td>
                  <td>
                    <span className="chip text-xs py-0.5 px-2">{row.sentiment}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[rgba(0,212,255,0.08)] px-4 py-2 flex justify-between items-center">
          <span className="font-mono-code text-xs text-white/20">
            {sorted.length} rows · sorted by {sortKey} {sortDir || "default"}
          </span>
          <span className="font-mono-code text-xs text-[#6C63FF]/50">
            © MARKLYTICS Dataset
          </span>
        </div>
      </div>
    </div>
  );
}
