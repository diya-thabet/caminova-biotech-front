import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Caminova" },
    { href: "#services", label: "Our Innovation" },
    { href: "#testimonials", label: "Partners" },
  ];

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-yellow-400/30 shadow-sm"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          className="flex items-center gap-1 cursor-pointer"
        >
          {/* <motion.img
            src="sigle.png"
            alt="Logo"
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-full object-cover transition-transform duration-300"
          /> */}
          <motion.img
            src="logopng.png"
            alt="Logo"
            whileHover={{ scale: 1.1 }}
            className="w-37 h-37 rounded-full object-cover transition-transform duration-300"
          />
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={fadeIn("left", 0.3)}
          className="md:hidden p-2 text-yellow-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6 text-yellow-400" />
          ) : (
            <HiMenu className="h-6 w-6 text-yellow-400" />
          )}
        </motion.button>

        {/* Navigation Links - Desktop */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={fadeIn("down", 0.1 * (index + 1))}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-500 after:transition-all
                ${
                  activeLink === link.href
                    ? "text-yellow-500 after:w-full"
                    : "text-white hover:text-yellow-400"
                }`}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={fadeIn("left", 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-yellow-500 text-black px-6 py-2.5 rounded-lg hover:bg-yellow-400 text-sm font-medium transition-all hover:shadow-lg hover:shadow-yellow-400/50"
        >
          <a href="#newsletter">Contact Caminova</a>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-black border-t border-yellow-400/20 py-4"
        >
          <motion.div
            variants={fadeIn("down", 0.3)}
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeIn("right", 0.1 * (index + 1))}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2
                  ${
                    activeLink === link.href
                      ? "text-yellow-500"
                      : "text-white hover:text-yellow-400"
                  }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              variants={fadeIn("up", 0.4)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-yellow-500 text-black px-6 py-2.5 rounded-lg hover:bg-yellow-400 text-sm font-medium transition-all hover:shadow-lg hover:shadow-yellow-400/50"
            >
              Contact Caminova
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
