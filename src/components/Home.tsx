import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.container}>
      <section className={styles.intro}>
        <h1>Sanjeet Tiwari</h1>
        <div className={styles.role}>
          <h2>UI/UX Designer</h2>
          <h2>UI Developer</h2>
        </div>
      </section>
    </section>
  );
};

export default Home;
