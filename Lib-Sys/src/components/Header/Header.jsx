/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import './Header.css'

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalized'> find your book of choice...</h2> <br />
          <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit....</p>
          <Search />
        </div>
      </header>
    </div>
  )
}

export default Header;