import React from "react";
import styles from "./AboutMe.module.scss";
import KeyPoint from "./KeyPoint";

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.image} />
      <div className={styles.keyPoints}>
        <KeyPoint
          title="Hybrid Apps"
          line="Created hybrid apps using Ionic & cordova"
        />
        <KeyPoint title="Web apps" line="Created responsive web sites, PWAs." />
        <KeyPoint title="Design Ideas" line="Created designs using Figma." />
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
