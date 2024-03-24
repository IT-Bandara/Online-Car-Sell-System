import React from 'react';
import './CarAdd.css'

function CarAdd() {
    return (
        <div className="product-card">
            <div className="product-image">
                <div className="left-image">
                    <img src="welcomeImage.jpg" alt="First Image" width="150" height="100" />
                </div>
                <div className="right-images">
                    <img src="welcomeImage.jpg" alt="Second Image" width="100" height="50" />
                    <img src="welcomeImage.jpg" alt="Third Image" width="100" height="50" />
                </div>
            </div>
            <div className="product-details">

                <p className="title">Toyota | Aqua </p>

            <p className="time-ago">2days ago</p>
            <p className="price">Rs. 13,400,000</p>
            <button className="view-details">VIEW DETAILS</button>
            </div>
        </div>
    );
}

export default CarAdd;
