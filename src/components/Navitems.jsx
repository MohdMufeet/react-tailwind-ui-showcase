import React from 'react'
const Navitems = () => {
  return (
   <nav className='hidden md:flex items-center justify-center'>
        <ul className='flex flex-cols gap-4 items-center justify-center '>
            <li className='hover:text-blue-500'><a href="#">Home</a></li>
            <li className='hover:text-blue-500'><a href="#">About</a></li>
            <li className='hover:text-blue-500'><a href="#">Contact</a></li>
            <li className='hover:text-blue-500'><a href="#">More</a></li>
        </ul>
        
   </nav>
  )
}

export default Navitems