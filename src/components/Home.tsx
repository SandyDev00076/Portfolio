import React from "react";
import Button from "atoms/Button";
import {
  AngularIcon,
  BehanceIcon,
  FigmaIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  ReactIcon,
  SvelteIcon,
  VSCodeIcon,
  VueIcon,
} from "assets/icons";
import {
  BEHANCE_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  PINTEREST_URL,
} from "../constants";

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
      <section className={styles.links}>
        <a href={BEHANCE_URL} target="_blank" rel="noopener noreferrer">
          <BehanceIcon />
        </a>
        <a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer">
          <PinterestIcon />
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
      </section>
      <svg
        className={styles.skillsBg}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 714 1024"
        preserveAspectRatio="none"
      >
        <path
          d=" M 65.435 0 L 714 0 L 714 1024 L 65.435 1024 C 205.301 545.5 -136.077 355.5 65.435 0 Z "
          fill="rgb(254,205,205)"
        />
      </svg>
      <ReactIcon className={styles.reactIcon} />
      <VSCodeIcon className={styles.vsCodeIcon} />
      <AngularIcon className={styles.angularIcon} />
      <VueIcon className={styles.vueIcon} />
      <FigmaIcon className={styles.figmaIcon} />
      <SvelteIcon className={styles.svelteIcon} />
    </section>
  );
};

export default Home;
