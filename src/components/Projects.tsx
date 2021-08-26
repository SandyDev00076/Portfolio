import React from "react";
import { ProjectType } from "types/ProjectType";
import { createProject } from "utils";
import { AIM_IMG_URL, AIM_URL, BINDER_URL, ORDERLY_URL } from "../constants";
import OtherProjects from "./OtherProjects";
import Project from "./Project";

import styles from "./Projects.module.scss";

const projects: ProjectType[] = [
  createProject(
    "Aim",
    "An idea management tool",
    "Got any ideas, jot them down! Organize and document your ideas with ease. Use it to present your idea to your friends, collegues or even investors.",
    AIM_IMG_URL,
    AIM_URL
  ),
  createProject(
    "Orderly",
    "A timer sequence app",
    "This app lets you create a fully customizable sequence of timers according to your needs.",
    AIM_IMG_URL,
    ORDERLY_URL
  ),
  createProject(
    "Binder",
    "An almanac of your youtube vids",
    "Organize links of your favorite youtube videos in folders so that you can categorize them in any way you want to increase accessibility.",
    AIM_IMG_URL,
    BINDER_URL
  ),
];

const Projects = () => {
  return (
    <section className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projects}>
        {projects.map((project) => (
          <Project {...project} />
        ))}
        <OtherProjects />
      </div>
    </section>
  );
};

export default Projects;
