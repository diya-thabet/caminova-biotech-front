import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔬",
      title: "Discover natural innovation",
      description:
        "We harness camel skin's unique properties through patented biotechnology",
    },
    {
      icon: "🌿",
      title: "Sustainable green process",
      description:
        "Nature-inspired methods that respect both environment and tradition",
    },
    {
      icon: "⚡",
      title: "Desert-proven excellence",
      description:
        "Sahara wisdom meets modern science for premium gelatin solutions",
    },
  ];

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl font-bold mb-4 text-black"
        >
          How can Caminova transform your industry?
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.4)} className="text-gray-700">
          When you partner with Caminova, you embrace sustainable innovation
          rooted in desert heritage
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.3 * (index + 1))}
            className="flex flex-col items-center p-6"
          >
            <motion.div
              variants={fadeIn("down", 0.4 * (index + 1))}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center border-2"
              style={{
                backgroundColor:
                  index === 0 ? "#FEF7E0" : index === 1 ? "#F8F9FA" : "#1F2937",
                borderColor:
                  index === 0 ? "#F59E0B" : index === 1 ? "#10B981" : "#F59E0B",
              }}
            >
              <motion.div
                variants={fadeIn("up", 0.5 * (index + 1))}
                className="text-3xl"
                style={{
                  filter:
                    index === 2
                      ? "invert(1) sepia(1) saturate(2) hue-rotate(35deg)"
                      : "none",
                }}
              >
                {feature.icon}
              </motion.div>
            </motion.div>
            <motion.h3
              variants={textVariant(0.3)}
              className="text-2xl font-medium mb-3 text-black"
            >
              {feature.title}
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.6 * (index + 1))}
              className="text-gray-600 text-center"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeIn("up", 0.7)} className="text-center mt-12">
        <motion.button
          variants={fadeIn("up", 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:from-yellow-700 hover:to-yellow-800 transition-all relative shadow-lg"
        >
          Partner with Caminova
          <div className="absolute -z-10 w-full h-full rounded-full bg-yellow-600/30 blur-xl top-0 left-0"></div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection;
