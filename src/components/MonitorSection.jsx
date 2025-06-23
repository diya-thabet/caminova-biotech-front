import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import "swiper/css";
import "swiper/css/navigation";
import monitorCardBg from "../assets/monitor-card.webp";

const MonitorSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Content */}
        <motion.div variants={fadeIn("right", 0.3)} className="w-full md:w-1/2">
          <motion.span
            variants={fadeIn("up", 0.4)}
            className="text-yellow-400 font-semibold tracking-wide"
          >
            INNOVATION
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6 md:w-4/5"
          >
            Revolutionary Camel-Based Gelatin Technology
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            className="text-gray-300 mb-8 md:w-4/5"
          >
            Caminova pioneers sustainable biotechnology by transforming camel
            skin into premium gelatin through nature-inspired green processes.
            Our patented technology represents the future of eco-friendly
            biomaterial production, honoring the desert&apos;s wisdom.
          </motion.p>
          <motion.a
            variants={fadeIn("up", 0.7)}
            href="#"
            className="text-yellow-400 font-semibold flex items-center gap-2 hover:gap-4 transition-all hover:text-yellow-300"
          >
            Discover our sustainable innovation
            <motion.svg
              variants={fadeIn("left", 0.8)}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Right side - Swiper with background */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          className="w-full md:w-1/2 relative"
        >
          <motion.div
            variants={fadeIn("up", 0.4)}
            className="p-4 bg-gradient-to-r from-yellow-400/10 to-yellow-600/20 rounded-xl border border-yellow-400/30"
          >
            <motion.img
              variants={fadeIn("up", 0.5)}
              src={monitorCardBg}
              alt="Caminova biotechnology innovation dashboard"
              className="w-full h-auto rounded-lg shadow-2xl border border-yellow-400/20"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MonitorSection;
