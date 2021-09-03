import React, { useEffect, useRef } from "react";
import { GigType } from "types/GigType";

import styles from "./Gig.module.scss";

interface Props extends GigType {
  index: number;
}
const Gig = ({ name, role, duration, contri, index }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const options = {
      root: null,
      threshold: 0.8,
      rootMargin: "0px",
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (containerRef.current) {
          containerRef.current.classList.add(styles.appear);
          observer.unobserve(containerRef.current);
        }
      });
    }, options);
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        <h2>{name}</h2>
        <h1>
          {role} | {duration}
        </h1>
        <p>{contri}</p>
      </div>
      <span>{index}</span>
    </section>
  );
};

export default Gig;
