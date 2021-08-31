import React from "react";
import { MapIcon } from "assets/icons";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <h1>Hello,</h1>
      <section className={styles.card}>
        <p>
          I am a <strong>UI developer by profession</strong> who also does{" "}
          <strong>UI/UX designing</strong> on the side.
        </p>
        <div className={styles.location}>
          <MapIcon />
          <span>Nagpur, India</span>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
