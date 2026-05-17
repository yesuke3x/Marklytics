import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Message sent! [Placeholder — backend not yet connected]");
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-10 text-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)" }}
        >
          <svg className="w-7 h-7 text-[#6C63FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-syne font-bold text-2xl text-white mb-2">Message Sent!</h3>
        <p className="font-inter text-sm text-white/40 mb-6">
          [Placeholder: Thank you for reaching out. We will get back to you soon.]
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-outline-glow px-6 py-2 rounded-lg text-sm"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="mb-8">
        <span className="section-label">GET IN TOUCH</span>
        <h3 className="font-syne font-bold text-2xl text-white mt-2">Contact the Team</h3>
        <p className="font-inter text-sm text-white/40 mt-1">
          [Placeholder: Leave your feedback or questions about this research project.]
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="float-label-group">
            <input
              type="text"
              placeholder=" "
              id="name"
              required
            />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="float-label-group">
            <input
              type="email"
              placeholder=" "
              id="email"
              required
            />
            <label htmlFor="email">Email Address</label>
          </div>
        </div>

        {/* Subject */}
        <div className="float-label-group">
          <input
            type="text"
            placeholder=" "
            id="subject"
          />
          <label htmlFor="subject">Subject</label>
        </div>

        {/* Message */}
        <div className="float-label-group textarea" style={{ position: "relative" }}>
          <textarea
            placeholder=" "
            id="message"
            rows={5}
            required
            style={{ resize: "none", paddingTop: "20px" }}
          />
          <label htmlFor="message">Message</label>
        </div>

        {/* Send button */}
        <button
          type="submit"
          disabled={loading}
          className="btn-glow w-full py-4 rounded-xl font-grotesk font-semibold relative z-10 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10" />
              <span className="relative z-10">Sending…</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="relative z-10">Send Message</span>
            </>
          )}
        </button>

        <p className="font-mono-code text-[10px] text-white/20 text-center">
          [Placeholder: form submission not connected to backend]
        </p>
      </form>
    </div>
  );
}
