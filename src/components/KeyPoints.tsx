import { BrushIcon, LaptopIcon, PublicIcon } from "assets/icons";
import React from "react";
import KeyPoint from "./KeyPoint";

import styles from "./KeyPoints.module.scss";

const KeyPoints = () => {
  return (
    <section className={styles.container}>
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
    </section>
  );
};

export default KeyPoints;
