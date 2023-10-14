import React from 'react';
import './navbar.css';
import icon from '../../assests/icon.jpg';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={icon} alt="loading.." className='logo'/>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">Skills</Link>
            <Link className="desktopMenuListItem">Education</Link>
        </div>
        <button className="desktopMenuBtn">
          Contact Me
        </button>
    </nav>
  )
}

export default Navbar
