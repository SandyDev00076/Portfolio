import React, { useEffect, useRef } from "react";

import styles from "./Heading.module.scss";

interface Props {
  children: React.ReactNode;
  dir?: "left" | "right";
}
const Heading = ({ dir = "left", children }: Props) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-150px",
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (headingRef.current) {
          headingRef.current.classList.add(styles.appear);
          observer.unobserve(headingRef.current);
        }
      });
    }, options);
    observer.observe(headingRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <h1
      ref={headingRef}
      className={`${styles.heading} ${dir === "right" ? styles.right : ""}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
