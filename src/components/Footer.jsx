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
          className="flex flex-col lg:flex-row justify-between items-start gap-8"
        >
          {/* Info Section */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            className="space-y-3 flex-1"
          >
            <h3 className="text-2xl font-bold text-yellow-500">
              Caminova Biotech
            </h3>
            <p className="text-white/80">
              Pépinière des entreprises, Gabes, TUNISIA
            </p>
            <p className="text-white/80">+216 97 606 704</p>
            <p className="text-white/80">sbessalah@caminovabiotech.com</p>
          </motion.div>

          {/* Google Maps */}
          <motion.div variants={fadeIn("up", 0.5)} className="flex-shrink-0">
            <div className="w-72 h-48 rounded-lg overflow-hidden border border-yellow-500/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.532938461025!2d10.101836676258687!3d33.863936140304695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2stn!4v1635789012345!5m2!1sen!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Caminova Biotech Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            className="flex gap-4 lg:flex-col lg:items-end"
          >
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
              href="https://www.linkedin.com/company/caminova/"
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
