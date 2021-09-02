import React from "react";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Journey from "./Journey";
import Mail from "./Mail";
import Navbar from "./Navbar";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section>
      <AboutMe />
      <Projects />
      <Journey />
      <Mail />
      <Navbar />
      <Footer />
    </section>
  );
};

export default Portfolio;
