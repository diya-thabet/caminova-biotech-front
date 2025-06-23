import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
  const features = [
    {
      icon: "🧬",
      title: "Bio-inspired Innovation",
      description:
        "Caminova harnesses nature’s own design to develop sustainable biotechnology solutions.",
    },
    {
      icon: "🌍",
      title: "Sustainable Process",
      description:
        "We transform camel skin into gelatin using patented eco-friendly methods that reduce waste.",
    },
  ];

  return (
    <section id="about" className="w-full bg-[#121212] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          <motion.div variants={fadeIn("right", 0.3)}>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="text-sm text-yellow-500 font-medium mb-2"
            >
              WHY CAMINOVA
            </motion.div>
            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:w-4/5 md:text-4xl font-bold text-white"
            >
              Our purpose is to lead green biotechnology with elegance
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.3 * (index + 1))}
                className="flex items-start space-x-4"
              >
                <motion.div
                  variants={fadeIn("right", 0.4 * (index + 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-lg text-2xl"
                >
                  {feature.icon}
                </motion.div>
                <motion.div variants={fadeIn("left", 0.4 * (index + 1))}>
                  <motion.h3
                    variants={textVariant(0.3)}
                    className="text-xl font-semibold text-yellow-400 mb-2"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeIn("up", 0.4)}
                    className="text-white/80"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
