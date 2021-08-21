import React from "react";
import {
  LaptopIcon,
  PhoneIcon,
  WebIcon,
  PublicIcon,
  BrushIcon,
  ArchIcon,
} from "assets/icons";
import KeyPoint from "./KeyPoint";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.image} />
      <div className={styles.keyPoints}>
        <KeyPoint
          title="Hybrid Apps"
          line="Created hybrid apps using Ionic & cordova"
          icons={[<LaptopIcon />, <PhoneIcon />]}
        />
        <KeyPoint
          title="Web apps"
          line="Created responsive web sites, PWAs."
          icons={[<WebIcon />, <PublicIcon />]}
        />
        <KeyPoint
          title="Design Ideas"
          line="Created designs using Figma."
          icons={[<ArchIcon />, <BrushIcon />]}
        />
      </div>
      <p>
        started out as a <strong>UI developer</strong>,
        <br />
        was slowly expanding my arsenal for the <strong>front-end</strong>{" "}
        world,
        <br />
        and then got introduced to <strong>UI/UX designing</strong>,
        <br />a work that I <strong>cherish</strong> and a world with{" "}
        <strong>infinite posibilities</strong>!
        <br />
        <em>still new! still learning!</em>
      </p>
    </section>
  );
};

export default AboutMe;
