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
      {icon}
      <div className={styles.details}>
        <h1>{title}</h1>
        <div className={styles.line}>{line}</div>
      </div>
    </section>
  );
};

export default KeyPoint;
