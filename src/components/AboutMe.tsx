import React, { useEffect, useRef } from "react";
import { BrushIcon, CodeIcon, MapIcon } from "assets/icons";
import KeyPoints from "./KeyPoints";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTipRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollTipRef.current) return;
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) return;
        if (scrollTipRef.current)
          scrollTipRef.current.classList.add(styles.disappear);
        if (containerRef.current) observer.unobserve(containerRef.current);
      });
    }, options);
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.container} id="aboutme" ref={containerRef}>
      <div className={styles.leftSide}>
        <h1>Hello,</h1>
        <h2>Welcome to my website</h2>
        <section className={styles.card}>
          <p>
            I am a <strong>UI developer by profession</strong> who also does{" "}
            <strong>UI/UX designing</strong> on the side.
          </p>
          <div className={styles.codingTools}>
            <CodeIcon />
            <span>React, TypeScript, JavaScript, Angular</span>
          </div>
          <div className={styles.designTools}>
            <BrushIcon />
            <span>Figma, Adobe XD</span>
          </div>
          <div className={styles.location}>
            <MapIcon />
            <span>Nagpur, India</span>
          </div>
        </section>
        <h3 ref={scrollTipRef} className={styles.scrollTip}>
          Scroll to view more
        </h3>
      </div>
      <div className={styles.rightSide}>
        <KeyPoints />
      </div>
    </section>
  );
};

export default AboutMe;
