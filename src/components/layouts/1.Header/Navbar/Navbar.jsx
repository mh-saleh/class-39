import React from "react";
import Flex from "../../../Flex";
import NavMenu from "./NavMenu";
import NavbarRight from "../../../icons/NavbarRight";
import Logo from "../../../../assets/images/logo.png";
import Container from "../../../Container";

const Navbar = () => {
  return (
    <nav className="py-1">
      <Container>
        <Flex className={`justify-between items-center`}>
          <div>
            <img src={Logo} alt="" />
          </div>
          <Flex className={`justify-between items-center`}>
            <NavMenu />
            <NavbarRight />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
