import { useState } from "react";

const CHIPS = [
  { id: "overview", label: "[Topic 1 Placeholder]", icon: "◈" },
  { id: "engagement", label: "[Topic 2 Placeholder]", icon: "◉" },
  { id: "reach", label: "[Topic 3 Placeholder]", icon: "◎" },
  { id: "roi", label: "[Topic 4 Placeholder]", icon: "◆" },
  { id: "trends", label: "[Topic 5 Placeholder]", icon: "◈" },
];

interface Props {
  onSelect?: (id: string) => void;
}

export default function ChipRow({ onSelect }: Props) {
  const [active, setActive] = useState("overview");

  const handleSelect = (id: string) => {
    setActive(id);
    onSelect?.(id);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {CHIPS.map((chip) => (
        <button
          key={chip.id}
          onClick={() => handleSelect(chip.id)}
          className={`chip flex items-center gap-1.5 ${active === chip.id ? "active" : ""}`}
        >
          <span className="text-xs">{chip.icon}</span>
          {chip.label}
        </button>
      ))}

      {/* Spacer info chip */}
      <div className="flex items-center gap-1.5 ml-auto px-3 py-1.5 rounded-full border border-white/5 bg-white/2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
        <span className="font-mono-code text-[10px] text-white/20">AI READY</span>
      </div>
    </div>
  );
}
