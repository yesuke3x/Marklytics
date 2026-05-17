import { useState } from "react";

const SOURCES = [
  {
    id: "src_001",
    type: "JOURNAL",
    citation: "[Author(s), Year. Title of Article. Journal Name, Volume(Issue), Pages.]",
    url: "[https://doi.org/placeholder]",
    tags: ["[Tag A]", "[Tag B]"],
  },
  {
    id: "src_002",
    type: "BOOK",
    citation: "[Author(s), Year. Book Title. Publisher, Location.]",
    url: "[https://placeholder-source.com]",
    tags: ["[Tag A]"],
  },
  {
    id: "src_003",
    type: "DATASET",
    citation: "[Dataset Name, Year. Description of dataset source and methodology.]",
    url: "[https://data.placeholder.org]",
    tags: ["[Tag A]", "[Tag B]", "[Tag C]"],
  },
  {
    id: "src_004",
    type: "REPORT",
    citation: "[Organization, Year. Report Title. Publisher / Platform.]",
    url: "[https://report.placeholder.org]",
    tags: ["[Tag A]"],
  },
  {
    id: "src_005",
    type: "ONLINE",
    citation: "[Author, Year. Article/Page Title. Website Name. Retrieved from URL.]",
    url: "[https://web.placeholder.com]",
    tags: ["[Tag A]", "[Tag B]"],
  },
  {
    id: "src_006",
    type: "THESIS",
    citation: "[Author, Year. Thesis Title. [Master's/PhD Thesis]. University Name, Country.]",
    url: "[https://thesis.placeholder.edu]",
    tags: ["[Tag A]"],
  },
];

const TYPE_COLORS: Record<string, string> = {
  JOURNAL: "#6C63FF",
  BOOK: "#00D4FF",
  DATASET: "#FFD700",
  REPORT: "#FF6B9D",
  ONLINE: "#A9A4FF",
  THESIS: "#80ECFF",
};

export default function SourcesList() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState("ALL");

  const types = ["ALL", ...Object.keys(TYPE_COLORS)];
  const filtered = filter === "ALL" ? SOURCES : SOURCES.filter((s) => s.type === filter);

  return (
    <div>
      {/* Filter row */}
      <div className="flex flex-wrap gap-2 mb-5">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`chip text-xs ${filter === t ? "active" : ""}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Terminal container */}
      <div className="terminal rounded-2xl overflow-hidden">
        {/* Terminal header */}
        <div className="terminal-header justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="font-mono-code text-xs text-[#00D4FF]/60">references.bib</span>
          </div>
          <span className="font-mono-code text-xs text-white/20">{filtered.length} sources</span>
        </div>

        {/* Prompt line */}
        <div className="px-4 py-3 border-b border-[rgba(0,212,255,0.05)]">
          <span className="font-mono-code text-xs text-[#6C63FF]">$</span>
          <span className="font-mono-code text-xs text-white/40 ml-2">cat references.bib | grep --type=</span>
          <span className="font-mono-code text-xs text-[#00D4FF]">{filter}</span>
          <span className="font-mono-code text-xs text-white/40 animate-blink ml-0.5">█</span>
        </div>

        {/* Sources list */}
        <div className="divide-y divide-[rgba(0,212,255,0.04)]">
          {filtered.map((src, i) => (
            <div key={src.id} className="group">
              <button
                className="w-full text-left px-4 py-4 hover:bg-[rgba(108,99,255,0.04)] transition flex items-start gap-4"
                onClick={() => setExpanded(expanded === src.id ? null : src.id)}
              >
                {/* Line number */}
                <span className="font-mono-code text-xs text-white/15 flex-shrink-0 w-6 text-right mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Type badge */}
                <span
                  className="font-mono-code text-[10px] px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5"
                  style={{
                    background: `${TYPE_COLORS[src.type]}15`,
                    color: TYPE_COLORS[src.type],
                    border: `1px solid ${TYPE_COLORS[src.type]}30`,
                  }}
                >
                  {src.type}
                </span>

                {/* Citation */}
                <div className="flex-1 min-w-0">
                  <p className="font-mono-code text-xs text-white/60 truncate group-hover:text-white/80 transition">
                    {src.citation}
                  </p>
                </div>

                {/* Expand toggle */}
                <span
                  className={`font-mono-code text-xs text-[#6C63FF] flex-shrink-0 transition-transform ${
                    expanded === src.id ? "rotate-90" : ""
                  }`}
                >
                  ▶
                </span>
              </button>

              {/* Expanded */}
              {expanded === src.id && (
                <div className="px-14 pb-4">
                  <div className="font-mono-code text-[10px] text-[#00D4FF] mb-2">
                    <span className="text-white/20">url: </span>
                    {src.url}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {src.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="font-mono-code text-[10px] px-2 py-0.5 rounded-full border border-[rgba(108,99,255,0.2)] text-[#A9A4FF]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-[rgba(0,212,255,0.05)] flex items-center gap-2">
          <span className="font-mono-code text-[10px] text-white/15">EOF · {filtered.length} entries matched</span>
        </div>
      </div>
    </div>
  );
}
