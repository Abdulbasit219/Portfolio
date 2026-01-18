import React from "react";
import { motion } from "framer-motion";
import picture from "../assets/picture.png";
import { ArrowDownToLine } from "lucide-react";
import SocialIcons from "./SocialIcons";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const HeroSection = () => {
  return (
    <section id="home">
      <div
        className="h-[90vh] lg:h-[80vh] flex items-center justify-center mb-12 p-5
        shadow-md rounded-lg
         dark:bg-gray-950
        transition-colors duration-300"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:px-10">
          {/* LEFT CONTENT */}
          <div className="md:w-[50%]">
            <motion.h1
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-2 text-3xl font-bold
              text-gray-700 dark:text-gray-100"
            >
              Hi, I'm <span className="text-[#8228FF]">Abdul Basit</span>
            </motion.h1>

            <motion.h2
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="my-4 text-2xl font-bold
              text-gray-600 dark:text-gray-300"
            >
              MERN Stack Developer
            </motion.h2>

            <motion.p
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="my-6 leading-relaxed
              text-gray-600 dark:text-gray-400"
            >
              I build modern, responsive, and user-friendly web applications
              using MERN stack. Passionate about clean UI, smooth UX, and
              performance-focused development.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="my-6 flex flex-wrap gap-5"
            >
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="#contactus"
                className="flex px-10 items-center justify-center gap-1
                rounded-2xl bg-[#8228FF] py-3 font-semibold text-white
                border-2 border-[#8228FF]
                hover:bg-white hover:text-[#8228FF]
                dark:hover:bg-gray-900
                transition-all duration-300"
              >
                Hire Me
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="/Abdul-Basit-resume.pdf"
                download="Abdul-Basit-resume.pdf"
                className="flex items-center justify-center gap-2
                rounded-2xl border-2 border-[#8228FF]
                py-3 px-6 font-semibold text-[#8228FF]
                hover:bg-[#8228FF] hover:text-white
                transition-all duration-300"
              >
                Resume
                <ArrowDownToLine />
              </motion.a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={0.8}
              className="text-gray-700 dark:text-gray-300"
            >
              <SocialIcons />
            </motion.div>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.img
              src={picture}
              alt="Abdul Basit"
              className="size-72 md:size-80 lg:size-96
              rounded-full border-4 border-[#8228FF]
              shadow-lg dark:shadow-gray-800"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
