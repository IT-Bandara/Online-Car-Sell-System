import React from 'react'
import './WelcomeBody.css'

function WelcomeBody() {
  return (
    <div>
      <div className='top'>
        <img src='welcomeImage.jpg' alt="welcome" className="welcomeImage" />

        <div className='top-text'>
            <div className='top-tital'>
                Found Your Dream Car
            </div>
            <div className='top-paragraph'>
                From everyday commuters to luxury rides, discover the perfect vehicle that brings joy to your journeys, no matter where they take you
            </div>
        </div>

        <div className='bottom-text'>
            <div className='bottom-tital'>
                MOTORCAR IS SIMPLY
            </div>
            <div className='bottom-paragraph'>
                Welcome to MotorCar, the ultimate destination for buying and  selling cars hassle-free! Whether you're looking to upgrade your ride  or find a new home for your current vehicle, our user-friendly platform  connects you with thousands of listings and provides a seamless  experience from start to finish.
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default WelcomeBody
