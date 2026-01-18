import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import python from "../assets/python.png";
import JS from "../assets/JS.png";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-8xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-8xl" /> },
  {
    name: "JavaScript",
    icon: <img src={JS} alt="JavaScript" className="w-24 h-24" />,
  },
  { name: "React", icon: <FaReact className="text-sky-500 text-8xl" /> },
  { name: "Node JS", icon: <FaNodeJs className="text-[#339933] text-8xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-[#181717] text-8xl" /> },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-[#38BDF8] text-8xl" />,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb className="text-[#47A248] text-8xl" />,
  },
  {
    name: "Python",
    icon: <img src={python} alt="Python" className="w-24 h-24" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16  dark:bg-gray-950 transition-colors duration-300">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10 text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 transition-colors duration-300"
      >
        My Skills
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-10 justify-center w-[85%] mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center gap-4 px-6 py-8
            rounded-xl bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700
            hover:shadow-xl dark:hover:shadow-gray-600 transition-all w-[140px] sm:w-[160px]"
          >
            <motion.span
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.span>

            <p className="font-semibold text-gray-700 dark:text-gray-200 tracking-wide transition-colors duration-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
