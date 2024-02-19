import React, { useState, useEffect } from 'react'
import { navbarItems } from '../../assets/data/data'
import HeaderItem from './HeaderItem'
import logo from '../../assets/img/logo.png'
import logoMobile from '../../assets/img/logoMobile.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY
    setIsScrolled(scrollTop > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`w-full z-30 transition-all duration-300 ${isScrolled ? 'fixed bg-secondary-50 opacity-90 shadow-lg' : ''}`}>
      <nav className='max-w-screen-xl mx-auto px-8 py-7 flex items-center justify-between'>
        <div>
        <img src={logoMobile} className='block lg:hidden' alt="Logo ERmotoservice" />
        <img src={logo} className='hidden lg:block' alt="Logo ERmotoservice" />
        </div>
        <div className='md:hidden'>
          {/* Botón de hamburguesa para pantallas pequeñas */}
          <button onClick={toggleMenu} className='text-black focus:outline-none focus:text-white'>
            paco
          </button>
        </div>
        <ul className={`flex ${showMenu ? 'block' : 'hidden md:flex'} md:flex-row gap-16`}>
          {/* Ítems del menú */}
          {navbarItems.map((item) => (
            <HeaderItem key={item.id} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
