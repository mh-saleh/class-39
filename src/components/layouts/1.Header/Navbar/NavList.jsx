import React from "react";

const NavList = ({ text }) => {
  return (
    <li>
      <a
        href="#"
        className="font-nun+ text-lg text-midnight font-bold hover:text-coral duration-500"
      >
        {text}
      </a>
    </li>
  );
};

export default NavList;
