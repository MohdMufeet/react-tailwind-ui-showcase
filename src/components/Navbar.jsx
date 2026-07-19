import React, { useState } from "react";
import Logo from "./Logo";
import Navitems from "./Navitems";
import Navbutton from "./Navbutton";

const Navbar = () => {
  const [toggle,setToggle] = useState(true);
  const handleToggle = () => {
      setToggle(!toggle);
  }
  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 shadow-lg">
        <Logo />

       
        <Navitems />
        <Navbutton />
       
        <button onClick={handleToggle} className="md:hidden text-2xl text-gray-700 font-bold">
          &#9776;
        </button>
          {/* {
            toggle && <div className="absolute top-0 left-0 w-full h-screen bg-red-500 flex flex-col items-center justify-center gap-8 z-[-2]">
              <Navitems />
              <Navbutton />
            </div>
          } */}
      </header>
    </>
  );
};

export default Navbar;
