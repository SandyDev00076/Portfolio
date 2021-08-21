import React from "react";

import styles from "./KeyPoint.module.scss";

interface Props {
  title: string;
  line: string;
}
const KeyPoint = ({ title, line }: Props) => {
  return (
    <section className={styles.container}>
      <h1>{title}</h1>
      <div>{line}</div>
    </section>
  );
};

export default KeyPoint;
