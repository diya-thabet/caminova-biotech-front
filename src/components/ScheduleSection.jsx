import scheduleImage from "../assets/stats.webp";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ScheduleSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left side - Image */}
        <motion.div variants={fadeIn("right", 0.3)} className="w-full md:w-1/2">
          <motion.img
            variants={fadeIn("up", 0.4)}
            src={scheduleImage}
            alt="Caminova innovation dashboard"
            className="w-full h-auto rounded-lg shadow-lg border border-yellow-200"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div variants={fadeIn("left", 0.3)} className="w-full md:w-1/2">
          <motion.span
            variants={fadeIn("up", 0.4)}
            className="text-yellow-600 font-semibold text-sm tracking-wide uppercase"
          >
            INNOVATION
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-black mt-4 mb-6 leading-tight"
          >
            Revolutionary Gelatin <br />
            From Nature&apos;s Desert Wisdom
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            className="text-gray-700 mb-8 leading-relaxed"
          >
            Caminova harnesses the ancient secrets of the Sahara, creating
            premium gelatin from camel skin through patented green
            biotechnology. Our nature-inspired process transforms desert
            resilience into sustainable innovation, delivering eco-friendly
            solutions that honor both tradition and tomorrow.
          </motion.p>
          <motion.a
            variants={fadeIn("up", 0.7)}
            href="#"
            className="text-yellow-700 font-semibold flex items-center gap-2 hover:gap-4 transition-all hover:text-yellow-800"
          >
            Discover our biotechnology
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
      </div>
    </motion.section>
  );
};

export default ScheduleSection;
