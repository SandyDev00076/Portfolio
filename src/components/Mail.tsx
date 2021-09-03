import Button from "atoms/Button";
import { MAILID } from "../constants";
import React, { useEffect, useRef } from "react";

import styles from "./Mail.module.scss";

const Mail = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.6,
      rootMargin: "0px",
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        contentRef.current?.classList.add(styles.appear);
        if (contentRef.current) observer.unobserve(contentRef.current);
      });
    }, options);
    if (contentRef.current) observer.observe(contentRef.current);
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content} ref={contentRef}>
        <h1>Wanna reach out to me ?</h1>
        <h2>Drop a mail</h2>
        <a href={`mailto:${MAILID}`}>
          <Button>Write a mail</Button>
        </a>
      </div>
    </section>
  );
};

export default Mail;
