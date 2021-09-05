import React, { useEffect, useState } from "react";

import styles from "./ColorPicker.module.scss";

const ColorPicker = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    document.documentElement.className = `${color}App`;
  }, [color]);

  return (
    <section className={styles.container}>
      {["red", "blue", "purple", "pink"].map((entry) => (
        <button
          key={entry}
          className={`${styles[entry]} ${
            color === entry ? styles.selected : ""
          }`}
          onClick={() => setColor(entry)}
        />
      ))}
    </section>
  );
};

export default ColorPicker;
