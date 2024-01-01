import React from "react";
import Navbar from "./Navbar/Navbar";
import SubHeader from "./SubHeader/SubHeader";
import Container from "../../Container";

const Header = () => {
  return (
    <header>
      <SubHeader />
      <Navbar />
    </header>
  );
};

export default Header;
