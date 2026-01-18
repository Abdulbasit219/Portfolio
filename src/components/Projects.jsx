import React from "react";
import { motion } from "framer-motion";
import sabzlink from "../assets/sabzlink.png";
import Ecommerce from "../assets/Ecommerce.png";
import Employeemgt from "../assets/Employeemgt.png";
import Blog from "../assets/Blog.png";
import TodoApp from "../assets/TodoApp.png";
import GPA from "../assets/GPA.png";

const projects = [
  {
    name: "SabzLink",
    image: sabzlink,
    link: "https://farmers-sol-3.onrender.com",
  },
  {
    name: "Ecommerce",
    image: Ecommerce,
    link: "https://ecommerce-mern-stack-project.netlify.app/",
  },
  {
    name: "Employee Management",
    image: Employeemgt,
    link: "https://empmngmntsystem.netlify.app/",
  },
  {
    name: "Blog App",
    image: Blog,
    link: "https://elaborate-capybara-b1bfd3.netlify.app/",
  },
  {
    name: "Todo App",
    image: TodoApp,
    link: "https://adorable-yeot-bf36c2.netlify.app/",
  },
  {
    name: "GPA Calculator",
    image: GPA,
    link: "https://abdulbasit219.github.io/GpaCal/",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="mt-16 px-5 dark:bg-gray-950 transition-colors duration-300"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-10 text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 transition-colors duration-300"
      >
        My Projects
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:shadow-gray-700 transition-all duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-[#8228FF] text-white font-semibold border-2 border-[#8228FF]
                hover:bg-white hover:text-[#8228FF] transition-all"
              >
                View Project
              </motion.a>
            </div>

            {/* Footer */}
            <div className="p-5">
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                {project.name}
              </h5>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
