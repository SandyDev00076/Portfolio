import React from "react";
import { GigType } from "types/GigType";
import { createGig } from "utils";
import Gig from "./Gig";

import styles from "./Journey.module.scss";

const gigs: GigType[] = [
  createGig(
    "ECS Infosolutions",
    "Senior Software Developer",
    "Oct 2019 - Present",
    "My job role in all my projects in ECS was of a front end developer, where I created UI for various applications that are capable of telephony operations and contact centre reporting."
  ),
  createGig(
    "Siemens Technology & Services",
    "Software Developer",
    "Jan 2018 - Oct 2019",
    "My job role in all my projects in ECS was of a front end developer, where I created UI for various applications that are capable of telephony operations and contact centre reporting."
  ),
];

const Journey = () => {
  return (
    <section className={styles.container} id="journey">
      <h1>Journey</h1>
      <div className={styles.gigs}>
        {gigs.map((gig, index) => (
          <Gig {...gig} index={gigs.length - index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Journey;
