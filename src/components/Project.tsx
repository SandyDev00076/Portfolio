import React from "react";
import { ProjectType } from "types/ProjectType";

import styles from "./Project.module.scss";

const Project = ({ title, subtitle, about, imageURL }: ProjectType) => {
  return (
    <section className={styles.container}>
      <div className={styles.proDetails}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{about}</p>
      </div>
      <img src={imageURL} alt={`${title}-mockup`} />
    </section>
  );
};

export default Project;
