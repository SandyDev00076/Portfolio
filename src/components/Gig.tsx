import React from "react";
import { GigType } from "types/GigType";

import styles from "./Gig.module.scss";

interface Props extends GigType {
  index: number;
}
const Gig = ({ name, role, duration, contri, index }: Props) => {
  return (
    <section className={styles.container}>
      <h2>{name}</h2>
      <h1>
        {role} | {duration}
      </h1>
      <p>{contri}</p>
      <span>{index}</span>
    </section>
  );
};

export default Gig;
