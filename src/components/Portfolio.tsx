import React from "react";
import AboutMe from "./AboutMe";
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
    </section>
  );
};

export default Portfolio;
