import React from "react";
import NavList from "./NavList";

const NavMenu = () => {
  return (
    <div>
      <ul className="flex gap-12">
        <NavList text={`Home`} />
        <NavList text={`Properties`} />
        <NavList text={`Property`} />
        <NavList text={`Blog`} />
        <NavList text={`Pages`} />
        <NavList text={`Contact`} />
      </ul>
    </div>
  );
};

export default NavMenu;
