import React from "react";
import Heading from "./Heading";

import styles from "./Tools.module.scss";

const techs = [
  "React",
  "TypeScript",
  "Angular",
  "Vue",
  "Ionic",
  "Cordova",
  "Redux",
  "CSS3",
  "Sass",
  "NodeJS",
  "ExpressJS",
  "AWS Lambda",
  "Flask",
  "Figma",
  "AdobeXD",
];

const Tools = () => {
  return (
    <section id="tools">
      <Heading dir="right">Tools</Heading>
      <div className={styles.tools}>
        <div className={styles.type}>
          {techs.map((tech) => (
            <div className={styles.tech} key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
