import React from 'react'
import './Header.css';
import { FaUser } from 'react-icons/fa';

function Header() {
  return (
    <div>
      <nav className="header">
        <div className="leftMenu">
          <img src='Logo.png' alt="Logo" className="logo" />
          <p className='siteName'>MotorCar</p>
        </div>

        <div className="rightMenu">

          <button className="homePage">Home</button>
          <button className="aboutUs">About Us</button>
          <button className="logOut">Log Out</button>
          <button className="profile"><div className="profile-img"><FaUser /></div></button>
        </div>
      </nav>
    </div>
  )
}

export default Header
