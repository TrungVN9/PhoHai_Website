// import React, {useState} from 'react';
import React from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    // const [isMobile, setisMobile] = useState(false);
    // const [toggleMenu, setToggleMenu] = useState(false)

    // const toggle_nav = () => {
    //     setToggleMenu(!toggleMenu)
    // }

    let location_url = useLocation().pathname
    if (location_url === '/contact' || location_url === '/menu' || 
    location_url === '/about' || location_url === '/' || location_url === '/location'){
        return (
            <nav className='nav-bar'>
                <div className='header'>
                    {/* <img src='/img/0007_phoIcon.png' alt='icon'/> */}
                    <h1 className='logo'>Pho Hai</h1>
                </div>
                    {/* <ul className={isMobile ? 'nav-mobile-links' : 'nav-links'}> */}
                    <ul className='nav-links'>    
                        <Link to='/' className='nav-items'><li>Home</li></Link>
                        <Link to='/menu' className='nav-items'><li>Menu</li></Link>
                        <Link to='/location' className='nav-items'><li>Hours and Location</li></Link>
                        <Link to='/about' className='nav-items'><li>About</li></Link>
                        <Link to='/contact' className='nav-items'><li>Contact</li></Link>
                    </ul>
                    {/* <button className='btn'></button> */}
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
    else{
        return null
    }
}
