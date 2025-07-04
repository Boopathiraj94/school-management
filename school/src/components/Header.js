import React from 'react'
import './Header.css'
export const Header = (props) => {
  return (
    <>
        <header>
            <div className='logo'>
                LOGO
            </div>
            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Service</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
