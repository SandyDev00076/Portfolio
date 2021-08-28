import Button from "atoms/Button";
import { MAILID } from "../constants";
import React from "react";

import styles from "./Mail.module.scss";

const Mail = () => {
  return (
    <section className={styles.container}>
      <h1>Wanna reach out to me ?</h1>
      <h2>Drop a mail</h2>
      <a href={`mailto:${MAILID}`}>
        <Button>Write a mail</Button>
      </a>
    </section>
  );
};

export default Mail;
