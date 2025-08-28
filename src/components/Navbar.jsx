import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // 50px from top
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`lg:px-16 px-4 flex flex-wrap items-center py-4 sticky top-0 z-50 transition-colors duration-500 rounded-lg 
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        {/* logo  */}
        <div className="flex-1 flex justify-between items-center">
          <p className="text-3xl font-Brush-Script-MT text-[#8228FF]">
            &lt; Abdul Basit /&gt;
          </p>
        </div>

        {/* hamburger menu and close */}
        <div
          className="pointer-cursor md:hidden block"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X /> : <Menu />}
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out md:flex md:items-center md:w-auto w-full ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:opacity-100"
          } md:max-h-none md:opacity-0`}
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0 font-medium">
              <li>
                <a
                  className="transition-all duration-500 md:p-4 py-3 px-0 block hover:text-[#8228FF] hover:underline"
                  href="#home"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="transition-all duration-500 md:p-4 py-3 px-0 block hover:text-[#8228FF] hover:underline"
                  href="#skills"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  className="transition-all duration-500 md:p-4 py-3 px-0 block hover:text-[#8228FF] hover:underline"
                  href="#projects"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  className="transition-all duration-500 md:p-4 py-3 px-0 block hover:text-[#8228FF] hover:underline"
                  href="#contactus"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
