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
          <p className='header-text fs-18 fw-3'>Today, most libraries use an electronic system to catalogue books. While the process of searching for a book may vary slightly from library to library, most libraries use the Library of Congress Classification System to organize its books. To locate a book, first search the librarys catalogue. Once you have identified a book, use the call number to find the book. If you cannot find your book, then ask a librarian to look for you or request an interlibrary loan if the book is missing.</p>
          <Search />
        </div>
      </header>
    </div>
  )
}

export default Header;