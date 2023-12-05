import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// react icon react-icons/fa6
import { FaBars, FaDribbble, FaFacebook, FaTwitter, FaXing } from "react-icons/fa";
import Modal from './Modal';
const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    //navItems
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/services", link: "Service"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/contact", link: "Contact"},
    ]

    //model details
    const openModel = () => {
        setIsModalOpen(true);
    }

    const closeModele = () => {
        setIsModalOpen (false);
    }
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-x1 font-bold text-white'>Design
                <span className='text-orange-500'>DK</span></a>

            {/* navItem for lg devices */}
            <ul className='md:flex gap-12 text-1g hidden'>
                {
                    navItems.map(({path, link})=> <li className='text-white' key={path}>
                        <NavLink className={({ isActive, isPending }) =>
                          isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                        
                        to={path}>{link}
                        </NavLink>
                    </li>)
                }
            </ul>

                {/* menu Icons */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                     <a href="/" className='hover:text-orange-500'><FaFacebook/></a>
                     <a href="/" className='hover:text-orange-500'><FaDribbble/></a>
                     <a href="/" className='hover:text-orange-500'><FaTwitter/></a>
                     <button onClick={openModel} className=' bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in
                     ' >Log in</button>
                </div>

                {/* our modal componet is here */}
                <Modal isopen={isModalOpen} onclose={closeModele}/>

                  {/* Mobile menu, display mobile screen*/}
                  <div onClick={toggleMenu} className='md:hidden'>
                   
                    <button className='cursor-pointer'>
                        {
                            isMenuOpen ? <FaXing className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                        }
                        
                    </button>
                  </div>
        </nav>                     
                 {/* Menu Items only for mobiles */}
                 <div>
                    <ul className={`md:hidden gap-12 text-1g block space-y-4 px-4 py-6 mt-14 bg-white
                         ${isMenuOpen ? "fixed w-full top-0 left-0 transition-all duration-150 ease-out" : "hidden"}`}>
                      {
                        navItems.map(({path, link})=> <li className='text-black' key={path}>
                            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                        </li>)
                      }
                 </ul>
                 </div>
    </header>
  )
}

export default Navbar
