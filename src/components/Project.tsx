import React, { ReactElement } from "react";
import Button from "atoms/Button";
import { ProjectType } from "types/ProjectType";

import styles from "./Project.module.scss";

interface Props extends ProjectType {
  blob: ReactElement<any, any>;
}
const Project = ({ title, subtitle, about, imageURL, link, blob }: Props) => {
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
      {blob}
    </section>
  );
};

export default Project;
