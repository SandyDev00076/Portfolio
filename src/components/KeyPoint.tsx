import { KP } from "assets/blobs";
import React from "react";

import styles from "./KeyPoint.module.scss";

interface Props {
  title: string;
  line: string;
  icon: JSX.Element;
}
const KeyPoint = ({ title, line, icon }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.details}>
        <h1>{title}</h1>
        <div className={styles.line}>{line}</div>
      </div>
      <KP className={styles.blob} />
    </section>
  );
};

export default KeyPoint;
