import React from "react";
import styles from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: Props) => {
  return (
    <div className={styles.container}>
      <button {...props} className={styles.btn}>
        {children}
      </button>
      <div />
    </div>
  );
};

export default Button;
