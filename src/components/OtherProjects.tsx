import React from "react";
import { OtherProject } from "types/OtherProjectType";
import { createOtherProject } from "utils";
import {
  ESSENCE_IMG_URL,
  ESSENCE_URL,
  GOODCOLORS_IMG_URL,
  GOODCOLORS_URL,
  PROGRAMME_IMG_URL,
  PROGRAMME_URL,
  VARIANCE_IMG_URL,
  VARIANCE_URL,
} from "../constants";

import styles from "./OtherProjects.module.scss";

const otherProjects: OtherProject[] = [
  createOtherProject("Programme", PROGRAMME_IMG_URL, PROGRAMME_URL),
  createOtherProject("Variance", VARIANCE_IMG_URL, VARIANCE_URL),
  createOtherProject("Essence", ESSENCE_IMG_URL, ESSENCE_URL),
  createOtherProject("Good Colors", GOODCOLORS_IMG_URL, GOODCOLORS_URL),
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
