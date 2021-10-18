import React from "react";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Journey from "./Journey";
import Mail from "./Mail";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Resume from "./Resume";

const Portfolio = () => {
  return (
    <section>
      <AboutMe />
      <Projects />
      <Journey />
      <Mail />
      <Resume />
      <Navbar />
      <Footer />
    </section>
  );
};

export default Portfolio;
