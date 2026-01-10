import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          
          <p className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-3xl font-Brush-Script-MT text-[#8228FF]">
            &lt; Abdul Basit /&gt;
          </p>

          <SocialIcons />
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025
          <a href="" className="hover:underline">
            AbdulBasit™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
