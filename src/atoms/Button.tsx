import React, { useRef } from "react";
import styles from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean;
}

const Button = ({ children, onClick, small = false, ...props }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  let btnStyle = `${styles.btn}`;
  if (small) btnStyle += ` ${styles.small}`;

  function animateContainer() {
    // TODO: put some container animation here
  }

  function preClick() {
    animateContainer();
  }

  return (
    <div
      className={`${styles.container} ${
        props.className !== undefined ? props.className : ""
      }`}
      ref={containerRef}
    >
      <button
        {...props}
        onClick={(e) => {
          preClick();
          if (onClick !== undefined) onClick(e);
        }}
        className={btnStyle}
      >
        {children}
      </button>
      <div />
    </div>
  );
};

export default Button;
