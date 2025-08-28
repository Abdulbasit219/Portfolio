import React from "react";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import python from "../assets/python.png";
import JS from "../assets/JS.png";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-9xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-9xl" /> },
    {
      name: "JavaScript",
      icon: (
        <img src={JS} alt="JavaScript" className="w-28 h-28 object-contain" />
      ),
    },
    { name: "React", icon: <FaReact className="text-sky-500 text-9xl" /> },
    { name: "Node JS", icon: <FaNodeJs className="text-[#339933] text-9xl" /> },
    { name: "Github", icon: <FaGithub className="text-[#181717] text-9xl" /> },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="text-[#38BDF8] text-9xl" />,
    },
    {
      name: "MongoDB",
      icon: <DiMongodb className="text-[#47A248] text-9xl" />,
    },
    {
      name: "Python",
      icon: (
        <img src={python} alt="Python" className="w-28 h-28 object-contain" />
      ),
    },
  ];

  return (
    <section id="skills">
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
        My Skills
      </h1>
      <div className="flex flex-wrap gap-10 p-6 justify-center w-[80%] mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 px-4 py-2 bg-transparent rounded-lg shadow-sm hover:shadow-md transition lg:w-[20%]"
          >
            <span>{skill.icon}</span>
            <p className="font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
