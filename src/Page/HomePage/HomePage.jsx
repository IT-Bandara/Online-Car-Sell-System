import React from 'react'
import './HomePage.css'
import Search from '../../Component/Search-panel/Search'
import Header from '../../Component/Header/Header'
import CarAdd from '../../Component/Car-add/CarAdd'
import { Cars } from '../../Data/Cars'
import Slider from '../../Component/Slider/Slider'

function HomePage() {
    return (
        <div>
            <div className="home-containt">
                <Header />

                <img className="home-img" src='home.jpg' />

                <div className='top-content'>
                    <button className="top-btn">SELL MY CAR</button>
                    <p className='Home-top-tital'>You Choose Your Car</p>
                    <Search />
                </div>

                <div className="top-trending">
                    <p className='topic'>Top Trending</p>
                    {/* <div className="col-md-9">
                        <div className="row">
                            {[...Array(6)].map((_, index) => (

                                <div className="col-md-4">
                                    <div className="card" >
                                        <CarAdd key={index} car={Cars[Cars.length - index - 1]} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <div className="top-trending-add">

                        {[...Array(8)].map((_, index) => (
                            <CarAdd key={index} car={Cars[Cars.length - index - 1]} />
                        ))}
                    </div>

                </div>

                <div className="vertical-large-add">
                    <Slider className="Advertisement-900x250" time='5000' />
                </div>

                <div className="most-reasent">
                    <p className='topic'>Most Reasently</p>
                    {/* <div className="col-md-9">
                        <div className="row">
                            {[...Array(6)].map((_, index) => (

                                <div className="col-md-4">
                                    <div className="card" >
                                        <CarAdd key={index} car={Cars[Cars.length - index - 1]} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <div className="most-reasent-add">

                        {[...Array(8)].map((_, index) => (
                            <CarAdd key={index} car={Cars[Cars.length - index - 1]} />
                        ))}
                    </div>

                </div>




            </div>
        </div>
    )
}

export default HomePage
