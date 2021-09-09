import React, { useEffect, useRef } from "react";
import { BrushIcon, LaptopIcon, PublicIcon } from "assets/icons";
import KeyPoint from "./KeyPoint";

import styles from "./KeyPoints.module.scss";

const CARD_ANIM_DURATION = 4000;

const KeyPoints = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = Array.from(containerRef.current.children);
    function startAnim() {
      cards.forEach((card, index) => {
        const cardTitle = card.querySelector("h1");
        const cardLine = card.querySelector("h2");
        setTimeout(() => {
          card.classList.add(styles.animateSlide);
          cardTitle?.classList.add(styles.animateCardTitle);
          cardLine?.classList.add(styles.animateCardLine);
          setTimeout(() => {
            card.classList.remove(styles.animateSlide);
            cardTitle?.classList.remove(styles.animateCardTitle);
            cardLine?.classList.remove(styles.animateCardLine);
          }, CARD_ANIM_DURATION);
        }, index * CARD_ANIM_DURATION);
      });
    }
    startAnim();
    const interval = setInterval(() => {
      startAnim();
    }, cards.length * CARD_ANIM_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.keypoints} ref={containerRef}>
        <KeyPoint
          title="Web Apps"
          line="Created responsive web apps, PWAs"
          icon={<PublicIcon />}
        />
        <KeyPoint
          title="Hybrid Apps"
          line="Created cross platform apps using Ionic & Cordova"
          icon={<LaptopIcon />}
        />
        <KeyPoint
          title="Designs"
          line="Created and published designs using Figma, Adobe XD and Behance"
          icon={<BrushIcon />}
        />
      </div>
    </section>
  );
};

export default KeyPoints;
