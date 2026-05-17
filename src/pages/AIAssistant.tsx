import { useState, useRef, useEffect } from "react";
import ChipRow from "@/components/features/ChipRow";
import PredictionCards from "@/components/features/PredictionCards";
import aiImg from "@/assets/ai-bg.jpg";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const PLACEHOLDER_RESPONSES: Record<string, string> = {
  overview: "[AI Response Placeholder — Overview]: This is a placeholder response from the AI assistant. The actual AI integration will provide real analysis of social media campaign effectiveness data here. Content will be populated during final development.",
  engagement: "[AI Response Placeholder — Engagement]: Engagement metrics placeholder response. The AI will analyze engagement rate trends, compare platforms, and provide actionable insights when connected to real data.",
  reach: "[AI Response Placeholder — Reach]: Reach analysis placeholder. The AI assistant will analyze campaign reach data across different platforms and demographic segments when the backend is connected.",
  roi: "[AI Response Placeholder — ROI]: ROI prediction placeholder. Predictive modeling results for return on investment across analyzed campaigns will be displayed here.",
  trends: "[AI Response Placeholder — Trends]: Trend analysis placeholder. The AI will identify emerging patterns and future projections based on historical campaign performance data.",
};

const SUGGESTED_QUESTIONS = [
  "[Suggested Question 1 — click to ask]",
  "[Suggested Question 2 — click to ask]",
  "[Suggested Question 3 — click to ask]",
  "[Suggested Question 4 — click to ask]",
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "assistant",
      content: "[AI Assistant Greeting Placeholder] — Welcome to MARKLYTICS AI. I am your research assistant for social media campaign effectiveness analysis. Ask me anything about the dataset, predictions, or analytical methodology. This is a placeholder response — real AI integration coming soon.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("overview");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((m) => [...m, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const responseKey = Object.keys(PLACEHOLDER_RESPONSES).find((k) =>
        content.toLowerCase().includes(k)
      ) || "overview";

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: PLACEHOLDER_RESPONSES[responseKey],
        timestamp: new Date(),
      };
      setMessages((m) => [...m, aiMsg]);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Page header */}
      <section className="relative overflow-hidden mb-12">
        <div className="absolute inset-0 h-64">
          <img src={aiImg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080C14]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-4 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">AI ASSISTANT</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[rgba(108,99,255,0.3)] to-transparent" />
          </div>
          <h1 className="font-syne font-black text-5xl md:text-7xl text-white mb-4">
            AI <span className="gradient-text">Assistant</span>
          </h1>
          <p className="font-inter text-white/50 text-lg max-w-2xl">
            [AI assistant page description placeholder — explain the capabilities of the AI assistant and what types of questions it can answer about the campaign data.]
          </p>
        </div>
      </section>

      {/* Chip Row */}
      <section className="max-w-7xl mx-auto px-6 mb-8">
        <ChipRow onSelect={setSelectedTopic} />
      </section>

      {/* Main content: chat + sidebar */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat area — 2 cols */}
          <div className="lg:col-span-2 flex flex-col">
            {/* Messages */}
            <div
              className="glass-card rounded-2xl flex-1 flex flex-col overflow-hidden"
              style={{ minHeight: "520px", maxHeight: "600px" }}
            >
              {/* Chat header */}
              <div
                className="flex items-center justify-between px-5 py-4 border-b"
                style={{ borderColor: "rgba(108,99,255,0.15)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(108,99,255,0.15)" }}
                  >
                    <svg className="w-5 h-5 text-[#6C63FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-grotesk font-semibold text-white text-sm">MARKLYTICS AI</div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                      <span className="font-mono-code text-[10px] text-[#00D4FF]">READY · [PLACEHOLDER MODE]</span>
                    </div>
                  </div>
                </div>
                <span className="font-mono-code text-[10px] text-white/20">
                  {messages.length} messages
                </span>
              </div>

              {/* Messages scroll area */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-sm ${
                        msg.role === "assistant"
                          ? "bg-[rgba(108,99,255,0.15)]"
                          : "bg-[rgba(0,212,255,0.15)]"
                      }`}
                    >
                      {msg.role === "assistant" ? "🤖" : "👤"}
                    </div>

                    {/* Bubble */}
                    <div
                      className={`max-w-lg rounded-2xl px-4 py-3 ${
                        msg.role === "user"
                          ? "rounded-tr-sm"
                          : "rounded-tl-sm"
                      }`}
                      style={
                        msg.role === "assistant"
                          ? {
                              background: "rgba(17,24,39,0.8)",
                              border: "1px solid rgba(108,99,255,0.15)",
                            }
                          : {
                              background: "rgba(0,212,255,0.1)",
                              border: "1px solid rgba(0,212,255,0.2)",
                            }
                      }
                    >
                      <p className="font-inter text-sm text-white/80 leading-relaxed">{msg.content}</p>
                      <span className="font-mono-code text-[10px] text-white/20 mt-1 block">
                        {msg.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center bg-[rgba(108,99,255,0.15)] text-sm">
                      🤖
                    </div>
                    <div
                      className="rounded-2xl rounded-tl-sm px-4 py-3"
                      style={{ background: "rgba(17,24,39,0.8)", border: "1px solid rgba(108,99,255,0.15)" }}
                    >
                      <div className="flex items-center gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]"
                            style={{
                              animation: `float 0.8s ease-in-out ${i * 0.15}s infinite`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested questions */}
              <div
                className="px-5 py-3 border-t flex gap-2 overflow-x-auto"
                style={{ borderColor: "rgba(108,99,255,0.1)" }}
              >
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    className="chip flex-shrink-0 text-xs"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div
                className="px-5 py-4 border-t"
                style={{ borderColor: "rgba(108,99,255,0.15)" }}
              >
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="[Ask about campaign data, metrics, predictions…]"
                    className="flex-1 bg-[rgba(17,24,39,0.8)] border border-[rgba(108,99,255,0.2)] text-white text-sm rounded-xl px-4 py-3 font-inter focus:outline-none focus:border-[#6C63FF] placeholder:text-white/20 transition"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="btn-glow w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10 disabled:opacity-40"
                  >
                    <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar — 1 col */}
          <div className="space-y-5">
            {/* AI status card */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                <span className="font-mono-code text-xs text-[#00D4FF]">MODEL STATUS</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Model", val: "[Placeholder Model]" },
                  { label: "Context", val: "[0K / 0K tokens]" },
                  { label: "Temperature", val: "0.0" },
                  { label: "Mode", val: "PLACEHOLDER" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="font-inter text-xs text-white/30">{item.label}</span>
                    <span className="font-mono-code text-xs text-white/50">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Topic context */}
            <div className="glass-card rounded-2xl p-5">
              <span className="font-mono-code text-[10px] text-[#6C63FF] tracking-widest">ACTIVE TOPIC</span>
              <div className="mt-3">
                <div className="font-syne font-bold text-xl text-white capitalize">{selectedTopic}</div>
                <p className="font-inter text-xs text-white/35 mt-2 leading-relaxed">
                  [Topic context placeholder — description of the currently selected analysis topic will appear here.]
                </p>
              </div>
            </div>

            {/* Capabilities */}
            <div className="glass-card rounded-2xl p-5">
              <span className="font-mono-code text-[10px] text-white/30 tracking-widest">CAPABILITIES</span>
              <ul className="mt-3 space-y-2">
                {[
                  "[Capability 1 placeholder]",
                  "[Capability 2 placeholder]",
                  "[Capability 3 placeholder]",
                  "[Capability 4 placeholder]",
                  "[Capability 5 placeholder]",
                ].map((cap, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#6C63FF] text-xs mt-0.5 flex-shrink-0">▸</span>
                    <span className="font-inter text-xs text-white/40">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Cards */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="mb-10">
          <span className="section-label">AI PREDICTIONS</span>
          <h2 className="section-title text-3xl md:text-4xl text-white mt-3">
            Model <span className="gradient-text">Forecasts</span>
          </h2>
          <p className="font-inter text-white/40 mt-2 max-w-xl">
            [Prediction section description placeholder — explain the AI models used and what these forecasts represent for campaign planning.]
          </p>
        </div>
        <PredictionCards />
      </section>
    </div>
  );
}
