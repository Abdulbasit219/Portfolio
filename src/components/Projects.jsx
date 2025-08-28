import React from "react";
import sabzlink from "../assets/sabzlink.png";
import Ecommerce from "../assets/Ecommerce.png";
import Employeemgt from "../assets/Employeemgt.png";
import Blog from "../assets/Blog.png";
import TodoApp from "../assets/TodoApp.png";
import GPA from "../assets/GPA.png";

const Projects = () => {
  const myProjects = [
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
      name: "Emp Mng Sys",
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
      name: "GPA Cal",
      image: GPA,
      link: "https://abdulbasit219.github.io/GpaCal/",
    },
  ];

  return (
    <section id="projects" className="mt-10">
      <h1 className="my-8 text-4xl tracking-tight font-extrabold text-center text-gray-900">
        My Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-5">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm  rounded-lg bg-transparent shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className="p-2 rounded-lg w-full h-48 object-cover"
              />
            </a>

            <div className="flex justify-between p-5">
              <h5 className="mb-2 text-xl font-semibold tracking-tight">
                {project.name}
              </h5>
              <a
                href={project.link}
                target="_blank"
                className="flex items-center justify-center gap-1 rounded-2xl transition-all duration-300 bg-[#8228FF] font-semibold hover:bg-[#DCDDDF] hover:text-[#8228FF] border-2 border-[#8228FF] cursor-pointer px-2 text-white"
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
