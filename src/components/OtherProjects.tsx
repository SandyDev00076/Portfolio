import React from "react";
import { ProgrammeImg } from "assets/images";
import { OtherProjectType } from "types/OtherProjectType";
import { createOtherProject } from "utils";
import {
  CLIPBOARD_URL,
  ESSENCE_URL,
  GLASSPASS_URL,
  GOODCOLORS_URL,
  PROGRAMME_URL,
  VARIANCE_URL,
} from "../constants";

import styles from "./OtherProjects.module.scss";

const otherProjects: OtherProjectType[] = [
  createOtherProject("Programme", ProgrammeImg, PROGRAMME_URL),
  createOtherProject("Variance", ProgrammeImg, VARIANCE_URL),
  createOtherProject("Essence", ProgrammeImg, ESSENCE_URL),
  createOtherProject("Good Colors", ProgrammeImg, GOODCOLORS_URL),
  createOtherProject("Glass Pass", ProgrammeImg, GLASSPASS_URL),
  createOtherProject("Clipboard", ProgrammeImg, CLIPBOARD_URL),
];

const OtherProjects = () => {
  return (
    <section className={styles.container}>
      <h1>Some More</h1>
      <div className={styles.grid}>
        {otherProjects.map((op, index) => (
          <a
            href={op.link}
            className={styles.opContainer}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={op.image} alt={`${op.title}-op`} />
            <div className={styles.backdrop}>
              <span>{op.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
