import React from 'react'
import "./Header.scss"


const Header = () => {
  return (
    <header className='header'>
        <div className='header--logo'>
            logo
        </div>
        
        <div className='header--nav'>
            <nav>
                <a href='#!'>Home</a>
                <a href='#!' className='selected--link'>About Us</a>
                <a href='#!'>Services</a>
                <a href='#!'>Blog</a>
            </nav>

            <button className='btn btn--blue'>
                Contact Us
            </button>
        </div>
    </header>
  )
}

export default Header