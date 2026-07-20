import React from 'react'

const NavList = () => {
  return (
    <ul className='flex md:flex-row flex-col gap-8 items-center justify-center text-xl md:text-md md:gap-4'>
            <li className='hover:text-blue-500'><a href="#">Home</a></li>
            <li className='hover:text-blue-500'><a href="#">About</a></li>
            <li className='hover:text-blue-500'><a href="#">Contact</a></li>
            <li className='hover:text-blue-500'><a href="#">More</a></li>
        </ul>
  )
}

export default NavList