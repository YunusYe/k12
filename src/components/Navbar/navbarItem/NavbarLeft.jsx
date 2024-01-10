import React from "react";
import k12 from "./vk12logobeyaz.png";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <div>
      <Link to="/Anasayfa">
        <img className="w-[150px] mt-5 mb-5 ml-5" src={k12} alt="" />
      </Link>
    </div>
  );
};

export default NavbarLeft;
