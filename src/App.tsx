import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MusicPlayer from "@/components/layout/MusicPlayer";
import BackToTop from "@/components/layout/BackToTop";
import Home from "@/pages/Home";
import Analysis from "@/pages/Analysis";
import Visualization from "@/pages/Visualization";
import AIAssistant from "@/pages/AIAssistant";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#080C14] text-white relative noise">
        {/* Global ambient orbs */}
        <div
          className="orb w-[600px] h-[600px] fixed top-[-200px] left-[-100px] z-0 pointer-events-none"
          style={{ background: "rgba(108,99,255,0.08)" }}
        />
        <div
          className="orb w-[500px] h-[500px] fixed bottom-[-150px] right-[-100px] z-0 pointer-events-none"
          style={{ background: "rgba(0,212,255,0.06)" }}
        />

        <Header />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/visualization" element={<Visualization />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <MusicPlayer />
        <BackToTop />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
