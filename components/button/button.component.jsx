import React from "react";
import "./button.styles.scss";

const Button = ({ children, buttonType, type }) => {
  return (
    <button className={`${buttonType} button-container`} type={type}>
      {...children}
    </button>
  );
};

export default Button;
