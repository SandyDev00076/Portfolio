import React, { ReactElement, useEffect, useRef } from "react";
import Button from "atoms/Button";
import { ProjectType } from "types/ProjectType";

import styles from "./Project.module.scss";

interface Props extends ProjectType {
  blob: ReactElement<any, any>;
}
const Project = ({ title, subtitle, about, imageURL, link, blob }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectDetailsRef = useRef<HTMLDivElement>(null);
  const imageSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const options = {
      root: null,
      threshold: 0.5,
      rootMargin: "0px",
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        // do your task here
        if (projectDetailsRef.current)
          projectDetailsRef.current.classList.add(styles.appear);
        if (imageSectionRef.current)
          imageSectionRef.current.classList.add(styles.appear);
        if (containerRef.current) observer.unobserve(containerRef.current);
      });
    }, options);
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.proDetails} ref={projectDetailsRef}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{about}</p>
        <a href={link} target="_blank" rel="noreferrer noopener">
          <Button small>Visit</Button>
        </a>
      </div>
      <div className={styles.imgSection} ref={imageSectionRef}>
        <img src={imageURL} alt={`${title}-mockup`} />
        {blob}
      </div>
    </section>
  );
};

export default Project;
