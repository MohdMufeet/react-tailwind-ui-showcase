import React from 'react'
import { FaFileCode } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa6";
import { PiHandGrabbingLight } from "react-icons/pi";

const Optional = () => {
  return (
    <div className="hidden md:flex gap-6 mt-4">
        <div className="flex gap-2">
            <FaFileCode className="text-gray-600 text-xl"/>
          <p p className='font-thin text-gray-600'>
            Code optional 
          </p>
        </div>
        <div className="flex gap-2">
            <PiHandGrabbingLight className="text-gray-600 text-xl"/>
          <p p className='font-thin text-gray-600'>
            Drag and drop builder  
          </p>
        </div>
        <div className="flex gap-2">
            <FaLaptop className="text-gray-600 text-xl"/>
          <p className='font-thin text-gray-600'>
            Windows, Mac, Linux 
          </p>
        </div>
    </div>
  )
}

export default Optional