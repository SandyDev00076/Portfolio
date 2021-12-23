import React from "react";
import { createTool } from "utils";
import Heading from "./Heading";
import ToolTile from "./Tool";

import styles from "./Tools.module.scss";

const tools = [
  createTool("React", 9, "proficient"),
  createTool("TypeScript", 8, "proficient"),
  createTool("Figma", 9, "proficient", "design"),
  createTool("Angular", 7, "intermediate"),
  createTool("CSS3", 9, "proficient"),
  createTool("Sass", 8, "intermediate"),
  createTool("Ionic", 6, "intermediate"),
  createTool("AdobeXD", 8, "intermediate", "design"),
  createTool("Redux", 6, "beginner"),
  createTool("NodeJS", 5, "intermediate", "back"),
  createTool("Vue", 5, "beginner"),
  createTool("ExpressJS", 5, "beginner", "back"),
  createTool("AWS Lambda", 4, "beginner", "back"),
  createTool("Cordova", 5, "beginner"),
  createTool("Flask", 3, "beginner", "back"),
];

const Tools = () => {
  return (
    <section id="tools">
      <Heading dir="right">Tools</Heading>
      <div className={styles.tools}>
        <div className={styles.type}>
          {tools.map((tool) => (
            <ToolTile tool={tool} key={tool.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
