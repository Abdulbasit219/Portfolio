import { Github, Linkedin } from "lucide-react";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 mt-8">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/abdul-basit2259/"
        target="_blank"
        title="LinkedIn"
        className="p-2 rounded-full transition-all duration-300 bg-[#8228FF] dark:bg-gray-700 border-2 border-[#8228FF] dark:border-gray-500 text-white dark:text-gray-200 hover:bg-[#DCDDDF] dark:hover:bg-[#8228FF] hover:text-[#8228FF] dark:hover:text-white"
      >
        <Linkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Abdulbasit219"
        target="_blank"
        title="GitHub"
        className="p-2 rounded-full transition-all duration-300 bg-[#8228FF] dark:bg-gray-700 border-2 border-[#8228FF] dark:border-gray-500 text-white dark:text-gray-200 hover:bg-[#DCDDDF] dark:hover:bg-[#8228FF] hover:text-[#8228FF] dark:hover:text-white"
      >
        <Github />
      </a>
    </div>
  );
};

export default SocialIcons;
