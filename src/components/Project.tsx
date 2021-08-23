import React from "react";

import styles from "./Project.module.scss";

interface Props {
  title: string;
  subtitle: string;
  about: string;
  imageURL: string;
}
const Project = ({ title, subtitle, about, imageURL }: Props) => {
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
