import React from "react";
import NavbarLeft from "./navbarItem/NavbarLeft";
import NavbarRight from "./navbarItem/NavbarRight";

const Navbar = () => {
  return (
    <div className=" mt-[-20px] ">
      <div className="flex items-center justify-between my-5 mx-4">
        <NavbarLeft />
        <NavbarRight />
      </div>
    </div>
  );
};

export default Navbar;
