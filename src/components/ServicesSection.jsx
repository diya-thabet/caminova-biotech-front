import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-yellow-400" />,
      title: "Sustainable Gelatin",
      description:
        "Premium gelatin extracted from camel skin using eco-friendly biotechnology processes.",
      link: "#learn-more",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-yellow-400" />,
      title: "Green Innovation",
      description:
        "Nature-inspired technology that transforms waste into valuable biomaterials.",
      link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-yellow-400" />,
      title: "Patent Technology",
      description:
        "Revolutionary patented process ensuring quality and environmental responsibility.",
      link: "#learn-more",
    },
    {
      icon: <BiTime className="w-8 h-8 text-yellow-400" />,
      title: "Future Ready",
      description:
        "Leading the next generation of sustainable biotechnology solutions.",
      link: "#learn-more",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* Header */}
        <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5 text-white"
          >
            Pioneering Desert Biotechnology
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-300 text-lg mb-4 md:w-4/5"
          >
            Transforming camel skin into sustainable gelatin through innovative
            green processes
          </motion.p>
          <motion.div variants={fadeIn("up", 0.6)} className="space-y-3">
            <motion.div
              variants={fadeIn("right", 0.7)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              </div>
              <span className="text-gray-300">Eco-friendly biotechnology</span>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.8)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              </div>
              <span className="text-gray-300">Nature-inspired innovation</span>
            </motion.div>
          </motion.div>
          <motion.button
            variants={fadeIn("up", 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-yellow-400 text-black px-8 py-3 cursor-pointer rounded-full hover:bg-yellow-300 transition-colors font-semibold"
          >
            Discover Innovation
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 border border-yellow-400/20"
            >
              <motion.div
                variants={fadeIn("down", 0.4 * (index + 1))}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <motion.h3
                variants={textVariant(0.3)}
                className="text-xl font-semibold mb-2 text-white"
              >
                {service.title}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.5 * (index + 1))}
                className="text-gray-300 mb-4"
              >
                {service.description}
              </motion.p>
              <motion.a
                variants={fadeIn("up", 0.6 * (index + 1))}
                href={service.link}
                className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors"
              >
                LEARN MORE
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
