import React from 'react'
import { TiArrowMinimiseOutline } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";

const Navbutton = () => {
  return (
    <button className='hidden md:flex gap-2 border border-gray-400 rounded hover:border-gray-600 items-center justify-center px-4 py-2 hover:shadow-sm'>
            <TiArrowMinimiseOutline />
            Explore More
            <FaArrowRight />
    </button>
  )
}

export default Navbutton