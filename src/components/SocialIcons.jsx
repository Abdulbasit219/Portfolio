import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 mt-8 text-white">
      <a
        href="https://www.linkedin.com/in/abdul-basit2259/"
        target="_blank"
        title="LinkedIn"
        className="bg-[#8228FF] p-2 rounded-full transition-all duration-300 hover:bg-[#DCDDDF] border-2 border-[#8228FF] hover:text-[#8228FF]"
      >
        <Linkedin />
      </a>
      <a
        href="https://github.com/Abdulbasit219"
        target="_blank"
        title="Facebook"
        className="bg-[#8228FF] p-2 rounded-full transition-all duration-300 hover:bg-[#DCDDDF] border-2 border-[#8228FF] hover:text-[#8228FF]"
      >
        <Github />
      </a>
    </div>
  );
};

export default SocialIcons;
