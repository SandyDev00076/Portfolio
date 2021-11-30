import React from "react";
import Heading from "./Heading";

import styles from "./Tools.module.scss";

const Tools = () => {
  return (
    <section id="tools">
      <Heading dir="right">Tools</Heading>
      <div className={styles.tools}></div>
    </section>
  );
};

export default Tools;
