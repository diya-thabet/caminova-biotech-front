import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto"
    >
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          {/* Star badge */}
          <div className="flex items-center gap-2 bg-yellow-600/10 border border-yellow-600 w-fit px-4 py-2 rounded-full transition-colors cursor-pointer group hover:bg-yellow-600/15">
            <span className="text-yellow-600 group-hover:scale-110 transition-transform">
              🌟
            </span>
            <span className="text-sm font-medium text-gray-800">
              Desert Heritage Innovation
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black"
        >
          Transforming Camel Skin into
          <span className="text-yellow-600 relative inline-block">
            {" "}
            Premium Gelatin
          </span>
          <span className="inline-block ml-2 animate-pulse text-yellow-600">
            🔬
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-700 text-lg md:text-xl max-w-xl"
        >
          Caminova harnesses ancient Sahara wisdom to create revolutionary
          gelatin solutions. Our patented green biotechnology transforms camel
          skin into premium products while honoring both tradition and
          environmental sustainability.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
          {/* Email Form */}
          <input
            type="email"
            placeholder="Partner with us today"
            className="flex-1 px-6 py-4 border border-yellow-600 bg-white/80 backdrop-blur-sm text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all placeholder:text-gray-500 focus:bg-white shadow-sm"
          />
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-yellow-600 cursor-pointer transition-all hover:shadow-lg hover:shadow-yellow-600/20 active:scale-95 font-semibold">
            →
          </button>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="flex items-center gap-6 pt-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse"></div>
            <span className="text-gray-600 text-sm">100% Green Process</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse"></div>
            <span className="text-gray-600 text-sm">Patent Protected</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column - Images */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Caminova biotechnology innovation lab"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 border border-yellow-600/30 shadow-xl shadow-yellow-600/10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/8 to-transparent rounded-lg"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
