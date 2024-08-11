import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants/index'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <header className='padding-x py-8 w-full z-10 absolute'>
        <nav className = 'flex justify-between items-center max-container'>
            <a href="/">
            <img src={headerLogo}
            alt='Logo' 
            height={29}
            width={130}/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map((link) => (
               <Link to={link.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{link.label}</Link>
              ))}
            </ul >
            <div className="hidden:max-lg: block ">
              <img src={hamburger} width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav
