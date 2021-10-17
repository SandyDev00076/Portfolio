import Button from "atoms/Button";
import React, { useEffect, useRef } from "react";

import styles from "./Resume.module.scss";

const RESUME_NAME = "SanjeetTiwari_Resume2021";

const Resume = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!contentRef.current) return;
    const options = {
      root: null,
      threshold: 0.6,
      rootMargin: "0px",
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (contentRef.current) {
          contentRef.current.classList.add(styles.appear);
          observer.unobserve(contentRef.current);
        }
      });
    }, options);
    observer.observe(contentRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content} ref={contentRef}>
        <h1>Or, want my resume ?</h1>
        <a href="SanjeetTiwari-Jan19.pdf" download={RESUME_NAME}>
          <Button small>Download</Button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
