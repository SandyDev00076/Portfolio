import React from "react";
import { AimBlob, BinderBlob, GitLookupBlob, OrderlyBlob } from "assets/blobs";
import { AimImg, BinderImg, GitLookupImg, OrderlyImg } from "assets/images";
import { ProjectType } from "types/ProjectType";
import { createProject } from "utils";
import { AIM_URL, BINDER_URL, GITLOOKUP_URL, ORDERLY_URL } from "../constants";
import OtherProjects from "./OtherProjects";
import Project from "./Project";
import Heading from "./Heading";

import styles from "./Projects.module.scss";

const blobs = [<GitLookupBlob />, <AimBlob />, <OrderlyBlob />, <BinderBlob />];

const projects: ProjectType[] = [
  createProject(
    "GitLookup",
    "Tool to find any GitHub user",
    "This app lets you find any GitHub user and also shows his/her information as well as all the public repos of the user.",
    GitLookupImg,
    GITLOOKUP_URL
  ),
  createProject(
    "Aim",
    "An idea management tool",
    "Got any ideas, jot them down! Organize and document your ideas with ease. Use it to present your idea to your friends, collegues or even investors.",
    AimImg,
    AIM_URL
  ),
  createProject(
    "Orderly",
    "A timer sequence app",
    "This app lets you create a fully customizable sequence of timers according to your needs.",
    OrderlyImg,
    ORDERLY_URL
  ),
  createProject(
    "Binder",
    "An almanac of your youtube vids",
    "Organize links of your favorite youtube videos in folders so that you can categorize them in any way you want to increase accessibility.",
    BinderImg,
    BINDER_URL
  ),
];

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <Heading>Projects</Heading>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Project {...project} key={index} blob={blobs[index]} />
        ))}
        <OtherProjects />
      </div>
    </section>
  );
};

export default Projects;
