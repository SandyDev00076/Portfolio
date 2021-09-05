import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.endNote}>
        Portfolio website created and designed by <strong>me</strong>.
      </div>
      <div className={styles.toolsUsed}>
        <div>
          Built using{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/"
          >
            React
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.typescriptlang.org/"
          >
            TypeScript
          </a>
        </div>
        <div>
          Designed using{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.figma.com/"
          >
            Figma
          </a>
        </div>
        <div>
          Hosted using{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vercel.com/"
          >
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
