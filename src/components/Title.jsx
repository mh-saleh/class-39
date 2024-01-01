import React from "react";

const Title = ({ text }) => {
  return (
    <p className="inline-block px-4 py-1 text-base font-bold rounded-full bg-coral text-coral font-nun bg-opacity-10">
      {text}
    </p>
  );
};

export default Title;
