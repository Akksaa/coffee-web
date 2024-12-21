import Link from 'next/link'
import React from 'react'
import { CiCoffeeCup } from 'react-icons/ci'

function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1 className="logo crimson"><span className='coffee'><CiCoffeeCup/></span>Brewly</h1>
          <nav className="nav poppins">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
