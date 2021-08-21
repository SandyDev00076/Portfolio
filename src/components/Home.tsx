import Button from "atoms/Button";
import React from "react";
import styles from "./Home.module.scss";

interface Props {
  showHome: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home = ({ showHome }: Props) => {
  function explore() {
    showHome(false);
    console.log("clicked explore");
  }

  return (
    <section className={styles.container}>
      <section className={styles.intro}>
        <h1>Sanjeet Tiwari</h1>
        <div className={styles.role}>
          <h2>UI/UX Designer</h2>
          <h2>UI Developer</h2>
        </div>
        <Button onClick={explore}>Explore</Button>
      </section>
    </section>
  );
};

export default Home;
