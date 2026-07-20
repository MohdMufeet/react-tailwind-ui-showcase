import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className=" h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent flex md:justify-center ">
      <div className="main-container px-6 py-20 text-left md:text-center">

        <div className="flex gap-2 items-center justify-center border border-yellow-500 
         px-4 py-1 w-fit bg-yellow-50 hover:shadow-md hover:-translate-1 ">
          <div className="bg-yellow-500 rounded-full w-2 h-2 "></div>
          <p className="text-yellow-600">
            Made it easy <span className="text-yellow-800">V12 </span>
          </p>
          <FaArrowRight className="text-yellow-600 hover:translate-l-1 "/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
