import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='custom-screen py-3 flex items-center justify-between md:py-7'>
          <div>
              <p>Logo</p>
          </div>
          <div>
            <p>Moto</p>
          </div>
      </nav>
    </header>
  )
}

export default Header
