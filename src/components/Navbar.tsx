import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.scss";

const links = [
  {
    link: "aboutme",
    name: "About me",
  },
  {
    link: "projects",
    name: "Projects",
  },
  {
    link: "journey",
    name: "Journey",
  },
];

const options: IntersectionObserverInit = {
  root: null,
  threshold: 0.2,
  rootMargin: "0px",
};

const Navbar = () => {
  const [currSection, setCurrSection] = useState("");

  useEffect(() => {
    const AboutMeSec = document.querySelector("#aboutme");
    const ProjectsSec = document.querySelector("#projects");
    const JourneySec = document.querySelector("#journey");

    const aboutMeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setCurrSection("aboutme");
      });
    }, options);
    if (AboutMeSec) aboutMeObserver.observe(AboutMeSec);

    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setCurrSection("projects");
      });
    }, options);
    if (ProjectsSec) projectsObserver.observe(ProjectsSec);

    const journeyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setCurrSection("journey");
      });
    }, options);
    if (JourneySec) journeyObserver.observe(JourneySec);

    return () => {
      aboutMeObserver.disconnect();
      projectsObserver.disconnect();
      journeyObserver.disconnect();
    };
  }, []);

  return (
    <section className={styles.container}>
      {links.map((link) => (
        <a
          href={`#${link.link}`}
          className={currSection === link.link ? styles.current : undefined}
          key={link.link}
        >
          {link.name}
        </a>
      ))}
    </section>
  );
};

export default Navbar;
