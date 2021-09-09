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
        <h1 className={styles.cardTitle}>{title}</h1>
        <h2 className={styles.cardLine}>{line}</h2>
      </div>
    </section>
  );
};

export default KeyPoint;
