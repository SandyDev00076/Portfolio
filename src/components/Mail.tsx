import Button from "atoms/Button";
import { mailID } from "../constants";
import React from "react";

import styles from "./Mail.module.scss";

const Mail = () => {
  return (
    <section className={styles.container}>
      <h1>Wanna reach out to me ?</h1>
      <h2>Drop a mail</h2>
      <a href={`mailto:${mailID}`}>
        <Button>Write a mail</Button>
      </a>
    </section>
  );
};

export default Mail;
