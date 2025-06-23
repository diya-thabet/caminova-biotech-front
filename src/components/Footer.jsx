import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-[#121212] border-t border-yellow-500/20 py-12 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          {/* Info Section */}
          <motion.div variants={fadeIn("right", 0.4)} className="space-y-3">
            <h3 className="text-2xl font-bold text-yellow-500">
              Caminova Biotech
            </h3>
            <p className="text-white/80">Gabes, TUNISIA</p>
            <p className="text-white/80">+216 97 606 704</p>
            <p className="text-white/80">email@caminovabiotech.com</p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeIn("left", 0.4)} className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="w-10 h-10 bg-yellow-500/10 border border-yellow-500 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-black transition-colors"
            >
              <FaFacebookF className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="w-10 h-10 bg-yellow-500/10 border border-yellow-500 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-black transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="w-10 h-10 bg-yellow-500/10 border border-yellow-500 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-black transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          className="mt-10 pt-6 border-t border-yellow-500/10 text-center text-sm text-white/60"
        >
          © {new Date().getFullYear()} Caminova Biotech. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
