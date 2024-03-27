import React from 'react';
import './CarAdd.css'

function CarAdd(props) {
    return (
        <div className="product-card">
            <div className="product-image">
                <div className="left-image">
                    <img src={props.car.image1} alt="First Image" width="150" height="100" />
                </div>
                <div className="right-images">
                    <img src={props.car.image2} alt="Second Image" width="100" height="50" />
                    <img src={props.car.image3} alt="Third Image" width="100" height="50" />
                </div>
            </div>
            <div className="product-details">

                <p className="title">{props.car.brand} | {props.car.model} </p>

            <p className="time-ago">{props.car.time}</p>
            <p className="price">Rs. {props.car.price}</p>
            <button className="view-details">VIEW DETAILS</button>
            </div>
        </div>
    );
}

export default CarAdd;
