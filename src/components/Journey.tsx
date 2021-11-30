import React from "react";
import { GigType } from "types/GigType";
import { createGig } from "utils";
import Gig from "./Gig";
import Heading from "./Heading";

import styles from "./Journey.module.scss";

const gigs: GigType[] = [
  createGig(
    "ECS Infosolutions",
    "Senior Software Developer",
    "Oct 2019 - Present",
    "Worked on several projects where I created UI for various applications that are capable of telephony operations and contact centre reporting."
  ),
  createGig(
    "Siemens Technology & Services",
    "Software Developer",
    "Jan 2018 - Oct 2019",
    "Worked on UI tasks for several hybrid apps which we built using Ionic and Cordova, that were related to fire panel reporting and safety."
  ),
];

const Journey = () => {
  return (
    <section id="journey">
      <Heading dir="right">Journey</Heading>
      <div className={styles.gigs}>
        {gigs.map((gig, index) => (
          <Gig {...gig} index={gigs.length - index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Journey;
