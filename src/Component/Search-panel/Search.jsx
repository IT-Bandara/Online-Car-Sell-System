import React, { useState } from 'react'
import './Search.css'
function Search() {



    return (

        <form className='search-form'>
            <div className="form-content">

                <div className="left-side">
                    <label className='price'>
                        Price
                        <span className='from'>from</span>
                        <input type="number" />
                        <span>to</span>
                        <input type="number" />
                    </label>

                    <label className='location'>Location
                        <input type='text' />
                    </label>

                    <label >Transmission Type
                        <select>
                            <option value="">Select Type</option>
                            <option value="auto">Auto</option>
                            <option value="manual ">Manual </option>
                        </select>
                    </label>


                    <label>
                        Brand
                        <select >
                            <option value="">Select Brand</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Honda">Honda</option>
                            <option value="Suzuki">Suzuki</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Mitsubishi">Mitsubishi</option>
                            <option value="Ford">Ford</option>
                            <option value="BMW">BMW</option>
                            <option value="Audi">Audi</option>
                            <option value="Benz">Benz</option>
                            <option value="Kia">Kia</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Tata">Tata</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                </div>

                <div className="right-side">

                    <label className='Year'>Year
                        <input type='number' />
                    </label>

                    <label >Condition
                        <select>
                            <option value="">Select Type</option>
                            <option value="brandNew">Brand New</option>
                            <option value="registered ">Registered  </option>
                            <option value="unRegistered ">Unregistered  </option>
                        </select>
                    </label>

                    <label >Fuel Type
                        <select>
                            <option value="">Select Type</option>
                            <option value="petrol">Petrol </option>
                            <option value="diesel">Diesel </option>
                            <option value="hybrid">Hybrid </option>
                            <option value="electric">Electric </option>
                        </select>
                    </label>

                    <label className='model'>Model
                        <input type='text' />
                    </label>

                </div>


            </div>
            <div className="button-container">
                <button className='search-btn'>Search</button>
            </div>
        </form>

    )
}

export default Search
