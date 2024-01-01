import React from "react";

const Paragraph = ({ text, className }) => {
  return (
    <p className={`text-base font-normal font-nun text-slate ${className}`}>
      {text}
    </p>
  );
};

export default Paragraph;
