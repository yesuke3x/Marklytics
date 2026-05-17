import { useState } from "react";

const TRACKS = [
  { title: "[Track Placeholder 1]", artist: "[Artist Placeholder]" },
  { title: "[Track Placeholder 2]", artist: "[Artist Placeholder]" },
  { title: "[Track Placeholder 3]", artist: "[Artist Placeholder]" },
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(35);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 music-player rounded-2xl transition-all duration-500 ${
        isExpanded ? "w-72" : "w-14"
      }`}
    >
      {/* Collapsed: icon only */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-14 h-14 flex items-center justify-center rounded-2xl relative overflow-hidden group"
        >
          <div
            className={`absolute inset-0 rounded-2xl ${isPlaying ? "animate-glow-pulse" : ""}`}
          />
          <svg className="w-5 h-5 text-[#6C63FF] relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
          {isPlaying && (
            <div className="absolute bottom-1.5 left-0 right-0 flex justify-center gap-0.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-0.5 bg-[#6C63FF] rounded-full"
                  style={{
                    height: "8px",
                    animation: `float ${0.6 + i * 0.1}s ease-in-out ${i * 0.1}s infinite`,
                  }}
                />
              ))}
            </div>
          )}
        </button>
      )}

      {/* Expanded */}
      {isExpanded && (
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${isPlaying ? "bg-[#6C63FF] animate-pulse" : "bg-white/20"}`}
                style={isPlaying ? { boxShadow: "0 0 8px rgba(108,99,255,0.8)" } : {}}
              />
              <span className="font-mono-code text-xs text-[#6C63FF]">PLAYER</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Track Info */}
          <div className="mb-3">
            <div className="font-grotesk text-sm font-medium text-white truncate">
              {TRACKS[currentTrack].title}
            </div>
            <div className="font-inter text-xs text-white/40 truncate">
              {TRACKS[currentTrack].artist}
            </div>
          </div>

          {/* Progress */}
          <div className="mb-3">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-mono-code text-[10px] text-white/30">1:24</span>
              <span className="font-mono-code text-[10px] text-white/30">4:02</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setCurrentTrack((p) => (p - 1 + TRACKS.length) % TRACKS.length)}
              className="w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-white/80 hover:bg-white/5 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
              </svg>
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 flex items-center justify-center rounded-full btn-glow"
            >
              {isPlaying ? (
                <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 relative z-10 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setCurrentTrack((p) => (p + 1) % TRACKS.length)}
              className="w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-white/80 hover:bg-white/5 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zm2.5-6L13 9v6l-4.5-3z" />
                <path d="M16 6h2v12h-2z" />
              </svg>
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-2">
            <svg className="w-3 h-3 text-white/30 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="flex-1 h-1 accent-[#6C63FF] cursor-pointer"
            />
          </div>

          {/* Track list */}
          <div className="mt-3 border-t border-white/5 pt-3 space-y-1">
            {TRACKS.map((track, i) => (
              <button
                key={i}
                onClick={() => setCurrentTrack(i)}
                className={`w-full text-left px-2 py-1.5 rounded-lg font-inter text-xs transition ${
                  currentTrack === i
                    ? "text-[#6C63FF] bg-[rgba(108,99,255,0.1)]"
                    : "text-white/30 hover:text-white/60 hover:bg-white/5"
                }`}
              >
                <span className="mr-2 font-mono-code">{String(i + 1).padStart(2, "0")}</span>
                {track.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
