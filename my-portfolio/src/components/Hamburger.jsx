import React, { useState } from 'react'
import { Link } from 'react-router';
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

const Hamburger = () => {

    const [open,setOpen] =useState();

    const toggleMenu =()=>{
        setOpen(!open);
    };

  return (
    <div className='relative sm:hidden left-28'>
        <button
            className='flex flex-col text-2xl  justify-between text-[#FFE1A8] items-center w-8 h-6 bg-transparent border-none space-y-1.5 focus:outline-none'
            onClick={toggleMenu}
           > {open ? 
          <RiMenu3Fill />
          : 
          <AiOutlineMenu />
           }
           
        </button>
      
        <div className={`absolute top-8 right-8 text-[#FFE1A8] shadow-lg ${open ? 'block' : 'hidden'}`}>
         <ul className="flex  items-center py-2  gap-3  text-sm">
              <li><Link to="/"  className="text-xl  hover:text-[#C09C58]">Home</Link></li>
              <li><Link to="/about"  className="text-xl  hover:text-[#C09C58]">About</Link></li>
              <li><Link to="/contact"  className="text-xl  hover:text-[#C09C58]">Contact</Link></li>
              <li><Link to="/project"  className="text-xl  hover:text-[#C09C58]">Project</Link></li>
         </ul>
      </div>
    </div>
  )
}

export default Hamburger
