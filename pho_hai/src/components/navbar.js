import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    const [isMobile, setisMobile] = useState(false);

  return (
    <nav className='nav-bar'>
        <h1 className='logo'>Pho Hai</h1>
            <ul className={isMobile ? 'nav-mobile-links' : 'nav-links'}>
                <Link to='/' className='nav-home'><li>Home</li></Link>
                <Link to='/menu' className='nav-menu'><li>Menu</li></Link>
                <Link to='/review' className='nav-review'><li>Reviews</li></Link>
                <Link to='/contact' className='nav-contact'><li>Contact</li></Link>
            </ul>
            {/* <button className='mobile-nav'>
                {isMobile ? (
                    <i className='fas fa-times'></i>
                ) : (
                    <i className='fas fa-bars'></i>
                )
                }
            </button> */}


    </nav>
  )
}
