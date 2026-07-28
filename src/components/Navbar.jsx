import React, { useState } from "react";
import Logo from "./Logo";
import Navitems from "./Navitems";
import Navbutton from "./Navbutton";
import Mobileview from "./Mobileview";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <header className="flex justify-between items-center bg-white px-6 py-4 shadow-lg sticky top-0 z-10">
        <Logo />

        <Navitems />

        <Navbutton isToggle="toggle" />

        <button
          onClick={handleToggle}
          className="md:hidden text-2xl text-gray-700 font-bold"
        >
          &#9776;
        </button>
        {toggle && <Mobileview handleToggle={handleToggle} />}
      </header>
    </>
  );
};

export default Navbar;
