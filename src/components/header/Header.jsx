import React from 'react'
import { Link } from 'react-router-dom'
import { navbarItems } from '../../assets/data/data'
import HeaderItem from './HeaderItem'

const Header = () => {
  return (
    <header>
      <nav className='custom-screen py-3 flex items-center justify-between md:py-7'>
          <div>
              <p>Logo</p>
          </div>
            <ul className='flex md:flex-row'>
            {navbarItems.map((item) => (
              <HeaderItem key={item.id} {...item} />
            ))}
            </ul>
      </nav>
    </header>
  )
}

export default Header
