import React, { useEffect, useRef } from "react";
import Button from "atoms/Button";
import {
  BEHANCE_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  MAILID,
  PINTEREST_URL,
} from "../constants";
import {
  BehanceIcon,
  PinterestIcon,
  LinkedInIcon,
  GithubIcon,
} from "assets/icons";

import styles from "./Mail.module.scss";

const Mail = () => {
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
        <h1>Wanna reach out to me ?</h1>
        <h2>Get in touch</h2>
        <div className={styles.options}>
          <a href={`mailto:${MAILID}`}>
            <Button>Write a mail</Button>
          </a>
          <section className={styles.links}>
            <a href={BEHANCE_URL} target="_blank" rel="noopener noreferrer">
              <BehanceIcon />
            </a>
            <a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer">
              <PinterestIcon />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Mail;
