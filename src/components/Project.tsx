import React from "react";
import Button from "atoms/Button";
import { ProjectType } from "types/ProjectType";

import styles from "./Project.module.scss";

const Project = ({ title, subtitle, about, imageURL, link }: ProjectType) => {
  return (
    <section className={styles.container}>
      <div className={styles.proDetails}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{about}</p>
        <a href={link} target="_blank" rel="noreferrer noopener">
          <Button small>Visit</Button>
        </a>
      </div>
      <img src={imageURL} alt={`${title}-mockup`} />
    </section>
  );
};

export default Project;
