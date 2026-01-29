import React from "react";
import type { ButtonProps } from "../utils/Types";

const Button = ({ text, icon, style, onClick }: ButtonProps) => {
  return (
    <div onClick={onClick} className={`rounded-full ${style}`}>
      <img src={icon} alt="" />
      {text}
    </div>
  );
};

export default Button;
