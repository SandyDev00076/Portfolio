import React from "react";
import AboutMe from "./AboutMe";
import Journey from "./Journey";
import Mail from "./Mail";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section>
      <AboutMe />
      <Projects />
      <Journey />
      <Mail />
    </section>
  );
};

export default Portfolio;
