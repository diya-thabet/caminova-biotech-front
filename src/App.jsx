import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";
import ScheduleSection from "./components/ScheduleSection";
import MonitorSection from "./components/MonitorSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Sahara-themed background elements - White version */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400/5 to-yellow-600/8 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute -bottom-28 -right-28 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-500/4 to-amber-600/6 rounded-full blur-[60px] -z-10"></div>

      {/* Additional subtle background elements for white theme */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-amber-300/3 to-yellow-500/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/3 left-1/6 w-[350px] h-[350px] bg-gradient-to-tr from-yellow-400/4 to-orange-400/6 rounded-full blur-[90px] -z-10"></div>

      {/* Desert sand particles effect - Adapted for white background */}
      <div className="fixed inset-0 pointer-events-none -z-5">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-yellow-600/40 rounded-full sand-particle"></div>
        <div
          className="absolute top-3/4 left-3/4 w-1 h-1 bg-amber-600/35 rounded-full sand-particle"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/6 w-1 h-1 bg-yellow-700/30 rounded-full sand-particle"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/6 right-1/3 w-1 h-1 bg-orange-600/35 rounded-full sand-particle"
          style={{ animationDelay: "6s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/5 w-1 h-1 bg-amber-700/25 rounded-full sand-particle"
          style={{ animationDelay: "8s" }}
        ></div>
        <div
          className="absolute top-1/5 left-2/3 w-1 h-1 bg-yellow-800/20 rounded-full sand-particle"
          style={{ animationDelay: "10s" }}
        ></div>
      </div>

      {/* Subtle texture overlay for desert atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-8 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(217,119,6,0.02)_0%,_transparent_50%)] bg-[length:100px_100px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(245,158,11,0.015)_0%,_transparent_50%)] bg-[length:150px_150px]"></div>
      </div>

      <div className="overflow-hidden relative z-10">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
