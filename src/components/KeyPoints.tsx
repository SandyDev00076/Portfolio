import React from "react";
import { PublicIcon } from "assets/icons";
import KeyPoint from "./KeyPoint";

import styles from "./KeyPoints.module.scss";

const KeyPoints = () => {
  return (
    <section className={styles.container}>
      <div className="keypoints">
        <KeyPoint
          title="Web Apps"
          line="Created responsive web apps, PWAs"
          icon={<PublicIcon />}
        />
        {/* <KeyPoint
          title="Hybrid Apps"
          line="Created cross platform apps using Ionic & Cordova"
          icon={<LaptopIcon />}
        />
        <KeyPoint
          title="Designs"
          line="Created and published designs using Figma, Adobe XD and Behance"
          icon={<BrushIcon />}
        /> */}
      </div>
    </section>
  );
};

export default KeyPoints;
