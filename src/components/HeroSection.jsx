import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className=" h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent flex md:justify-center justify-start">
      <div className="main-container px-6 py-20 text-left md:text-center flex flex-col gap-4">

        <div className="flex gap-2 items-center justify-center border border-yellow-500 
         px-4 py-1 w-fit bg-yellow-50 shadow-md hover:shadow-lg hover:-translate-1 rounded-lg">
          <div className="bg-yellow-500 rounded-full w-2 h-2 "></div>
          <p className="text-yellow-600">
            v12 <span className="text-yellow-800">find-in-page-bug-fixes </span>
          </p>
          <FaArrowRight className="text-yellow-600 hover:translate-l-1 "/>
        </div>


      <h1 className="text-4xl font-bold">Web app to desktop app in minutes</h1>
      <p className="text-md font-normal">Take your web app codebase and transform it into a cross platform desktop app with native functionality</p>
      <div className="button-container flex flex-col md:flex-row items-center justify-center">
        <button className=" w-full border px-4">Download now</button>
        <button className="">Read Docs</button>
      </div>
      </div>

    </div>
  );
};

export default HeroSection;
