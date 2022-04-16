import React from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    // const [isMobile, setisMobile] = useState(false);
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
                        <Link to='/' className='nav-home'><li>Home</li></Link>
                        <Link to='/menu' className='nav-menu'><li>Menu</li></Link>
                        <Link to='/location' className='nav-location'><li>Hours and Location</li></Link>
                        <Link to='/about' className='nav-review'><li>About</li></Link>
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
    else{
        return null
    }
}
