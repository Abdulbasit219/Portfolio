import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        m-4 rounded-lg
      dark:bg-gray-950
        shadow-sm dark:shadow-md
        transition-colors duration-300
      "
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Logo */}
          <motion.p
            whileHover={{ scale: 1.08 }}
            className="
              text-3xl font-Brush-Script-MT
              text-[#8228FF]
              cursor-pointer
              select-none
            "
          >
            &lt; Abdul Basit /&gt;
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SocialIcons />
          </motion.div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />

        {/* Copyright */}
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Abdul Basit
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
