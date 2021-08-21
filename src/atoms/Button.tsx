import React, { useRef } from "react";
import styles from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, onClick, ...props }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  function animateContainer() {
    // TODO: put some container animation here
  }

  function preClick() {
    animateContainer();
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        {...props}
        onClick={(e) => {
          preClick();
          if (onClick !== undefined) onClick(e);
        }}
        className={styles.btn}
      >
        {children}
      </button>
      <div />
    </div>
  );
};

export default Button;
