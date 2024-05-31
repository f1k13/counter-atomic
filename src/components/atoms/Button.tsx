import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./button.module.css";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.root} {...props}>
      {children}
    </button>
  );
};

export default Button;
