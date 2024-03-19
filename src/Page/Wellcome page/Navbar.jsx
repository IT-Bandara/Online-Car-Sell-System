import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="left-menu">
                    <img src='Logo.png' alt="Logo" className="logo" />
                    <p className='name'>MotorCar</p>
                </div>

                <div className="right-menu">
                    
                    <button className="home">Home</button>
                    <button className="aboutus">About Us</button>
                    <button className="login">Log in</button>
                    <button className="signup">Sign Up</button>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
