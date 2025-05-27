'use client'

import { RxHamburgerMenu } from 'react-icons/rx'
import { FaSearch } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { useState } from 'react'
import { Menu } from './Menu'

export const Header = () => {

    const [openmenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
    setOpenMenu(prev=> !prev);
    }

  return (
    <header className="bg-white flex p-8 text-black font-bold shadow-xl h-15">
      <nav className="flex items-center w-full justify-between ">
        
        <ul className="flex w-full justify-between items-center">
          <li>
            <div className="flex items-center gap-4">
              <span className='relative cursor-pointer' onClick={toggleMenu}>
                <RxHamburgerMenu />
                {openmenu && <Menu/>}
              </span>
              <span className="hidden sm:block">Women</span>
              <span className="hidden sm:block">Men</span>
            </div>
          </li>
          <li>
            <h1 className='text-xl'>Minna</h1>
          </li>
          <li className='flex items-center gap-4'>
            <span>
              <FaSearch />
            </span>
            <span>
              <FiShoppingCart />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
