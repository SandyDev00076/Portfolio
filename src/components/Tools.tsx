import React from "react";
import { createTool } from "utils";
import Heading from "./Heading";
import ToolTile from "./Tool";

import styles from "./Tools.module.scss";

const tools = [
  createTool("React", 9),
  createTool("TypeScript", 8),
  createTool("Angular", 7),
  createTool("Vue", 5),
  createTool("Ionic", 6),
  createTool("Cordova", 5),
  createTool("Redux", 6),
  createTool("CSS3", 9),
  createTool("Sass", 8),
  createTool("NodeJS", 5),
  createTool("ExpressJS", 5),
  createTool("AWS Lambda", 4),
  createTool("Flask", 3),
  createTool("Figma", 9),
  createTool("AdobeXD", 8),
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
