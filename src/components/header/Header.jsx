import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navbarItems } from '../../assets/data/data'
import HeaderItem from './HeaderItem'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header>
      <nav className='custom-screen py-3 flex items-center justify-between md:py-7'>
        <div>
          <p>Logo</p>
        </div>
        <div className='md:hidden'>
          {/* Botón de hamburguesa para pantallas pequeñas */}
          <button
            onClick={toggleMenu}
            className='text-black focus:outline-none focus:text-white'
          >
            paco
          </button>
        </div>
        <ul
          className={`flex ${
            showMenu ? 'block' : 'hidden md:flex'
          } md:flex-row gap-16`}
        >
          {/* Ítems del menú */}
          {navbarItems.map((item) => (
            <HeaderItem key={item.id} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
