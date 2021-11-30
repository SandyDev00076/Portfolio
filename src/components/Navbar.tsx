import React, { useEffect, useState } from "react";
import { FaceIcon, MapSheetIcon, ToolsIcon, WorkIcon } from "assets/icons";
import { NavLink, SectionID } from "types/NavLink";

import styles from "./Navbar.module.scss";

const links: NavLink[] = [
  {
    link: "aboutme",
    name: "About me",
    icon: <FaceIcon />,
  },
  {
    link: "projects",
    name: "Projects",
    icon: <WorkIcon />,
  },
  {
    link: "tools",
    name: "Tools",
    icon: <ToolsIcon />,
  },
  {
    link: "journey",
    name: "Journey",
    icon: <MapSheetIcon />,
  },
];

const options: IntersectionObserverInit = {
  root: null,
  threshold: 0.2,
  rootMargin: "0px",
};

const Navbar = () => {
  const [currSection, setCurrSection] = useState<SectionID | null>(null);

  useEffect(() => {
    const AboutMeSec = document.querySelector("#aboutme");
    const ToolsSec = document.querySelector("#tools");
    const ProjectsSec = document.querySelector("#projects");
    const JourneySec = document.querySelector("#journey");

    const aboutMeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setCurrSection("aboutme");
      });
    }, options);
    if (AboutMeSec) aboutMeObserver.observe(AboutMeSec);

    const toolsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setCurrSection("tools");
      });
    }, options);
    if (ToolsSec) toolsObserver.observe(ToolsSec);

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
      toolsObserver.disconnect();
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
          <span>{link.name}</span>
          {link.icon}
        </a>
      ))}
    </section>
  );
};

export default Navbar;
