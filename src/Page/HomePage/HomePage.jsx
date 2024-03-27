import React from 'react'
import './HomePage.css'
import Search from '../../Component/Search-panel/Search'
import Header from '../../Component/Header/Header'

function HomePage() {
    return (
        <div>
            <div className="homep-containt">
                <Header />

                <img className="home-img" src='home.jpg' />

                <div className='top-content'>
                    <button className="top-btn">SELL MY CAR</button>
                    <p className='Home-top-tital'>You Choose Your Car</p>
                    <Search />
                </div>




            </div>
        </div>
    )
}

export default HomePage
