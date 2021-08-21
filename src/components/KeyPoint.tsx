import React from "react";

import styles from "./KeyPoint.module.scss";

interface Props {
  title: string;
  line: string;
  icons: JSX.Element[];
}
const KeyPoint = ({ title, line, icons }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.icons}>{icons.map((icon) => icon)}</div>
      <h1>{title}</h1>
      <div className={styles.line}>{line}</div>
    </section>
  );
};

export default KeyPoint;
