import React from "react";
import picture from "../assets/picture.png";
import { ArrowDownToLine } from "lucide-react";
import SocialIcons from "./SocialIcons";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="h-[90vh] lg:h-[80vh] flex items-center justify-center mb-12 p-5 shadow-md rounded-lg">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:px-10">
          <div className="md:w-[50%]">
            <h1 className="mb-2 text-3xl font-bold text-gray-600">
              Hi, I'm <span className="text-[#8228FF]">Abdul Basit</span>
            </h1>

            <h2 className="my-4 text-2xl font-bold text-gray-500">
              MERN Stack Developer
            </h2>
            
            <p className="my-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              excepturi magnam enim officiis facilis numquam corporis quos
              accusantium tempora, dolores quod cum facere architecto soluta
              atque corrupti a alias perferendis.
            </p>

            {/* follow and resume btn */}
            <div className="my-6 flex space-x-5">
              <a href="#contactus" className="flex px-10 items-center justify-center gap-1 rounded-2xl bg-[#8228FF] p-5 py-3 font-semibold hover:bg-[#DCDDDF] hover:text-[#8228FF] border-2 border-[#8228FF] cursor-pointer text-white transition-all duration-300">
                Hire Me
              </a>

              <a href="/resume.pdf" download="Abdul-Basit-resume.pdf" className="flex items-center justify-center gap-2 transition-all duration-300 rounded-2xl border-2 border-[#8228FF] p-5 py-3 font-semibold text-[#8228FF] hover:bg-[#8228FF] hover:text-white cursor-pointer">
                Resume
                <ArrowDownToLine />
              </a>
            </div>

            {/* social icons */}
            <SocialIcons />

          </div>

          {/* image */}
          <div>
            <img
              src={picture}
              className=" size-72 md:size-78 lg:size-96 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
