import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto"
    >
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
