import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Optional from "./Optional";


const HeroSection = () => {
  return (
    <div className=" h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent flex md:justify-center justify-start">
      <div className="main-container max-w-3xl mx-auto px-6 py-20 text-left md:text-center flex flex-col gap-4 md:items-center">

        <div className="flex gap-2 items-center justify-center border border-yellow-500 
         px-4 py-1 w-fit bg-yellow-50 shadow-md hover:shadow-lg hover:-translate-1 rounded-lg">
          <div className="bg-yellow-500 rounded-full w-2 h-2 "></div>
          <p className="text-yellow-600">
            v0.12.1 <span className="text-yellow-800">find-in-page-bug-fixes </span>
          </p>
          <FaArrowRight className="text-yellow-600 hover:translate-l-1 "/>
        </div>

    <Optional/>
      <h1 className="text-4xl font-bold mt-6 md:text-6xl ">Web app to desktop app in minutes</h1>
      <p className="text-xl mt-2 md:text-2xl md:mt-4">Take your web app codebase and transform it into a cross platform desktop app with native functionality</p>
      <div className="button-container w-full flex flex-col md:flex-row md:items-center justify-center gap-4 mt-6">
        <button className="border py-2 px-8 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700">Download now</button>
        <button className="border py-2 px-8 rounded-lg font-medium bg-white text-gray-900 hover:bg-gray-100">Read Docs</button>
      </div>
      </div>

    </div>
  );
};

export default HeroSection;
