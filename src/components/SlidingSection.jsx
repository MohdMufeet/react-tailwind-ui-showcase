import React from 'react'
import { ImBlogger2 } from "react-icons/im";

const SlidingSection = () => {
  return (
    <div className="sliding-section flex flex-col m-4 gap-4">
        <div className="lin1 flex items-center gap-4">
            <div className="box bg-[#f1f1f1] border border-black flex items-center justify-center flex-col p-4 rounded-md">
            <div className="icon text-4xl">
                <ImBlogger2 />
            </div>
            <p>HIi</p>
            </div>
    
        </div>
    </div>
  )
}

export default SlidingSection