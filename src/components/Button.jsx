import React from "react";

const Button = ({ text, className }) => {
  return (
    <button className={`text-sm text-white bg-coral font-nun ${className}`}>
      {text}
    </button>
  );
};

export default Button;
