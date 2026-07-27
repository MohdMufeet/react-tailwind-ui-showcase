import React from "react";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";
import NavList from "./NavList";
import Navbutton from "./Navbutton";


const Mobileview = ({ handleToggle }) => {
  return (
    <div className="md:hidden bg-white h-screen w-full z-50 absolute top-0 left-0 px-6 py-4">
      <div className="flex justify-between items-center">
        <Logo />
        <button className="text-4xl" onClick={handleToggle}>
          <IoClose />
        </button>
      </div>

      <div className="flex items-center justify-center my-8">
        <NavList />
      </div>
      <div className="flex items-center justify-center my-40">
        <Navbutton />
      </div>
    </div>
  );
};

export default Mobileview;
