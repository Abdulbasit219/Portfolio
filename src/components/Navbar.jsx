import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contactus" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 px-6 py-4 transition-all rounded-lg
      ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <p className="text-3xl font-Brush-Script-MT text-[#8228FF]">
          &lt; Abdul Basit /&gt;
        </p>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-200">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="hover:text-[#8228FF] transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 cursor-pointer dark:bg-gray-700
            text-gray-800 dark:text-gray-200 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu */}
          <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-4 space-y-4 text-gray-700 dark:text-gray-200"
          >
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
