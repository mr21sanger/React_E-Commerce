import React from 'react'
import { NavLink } from 'react-router-dom'

function Banner() {
    return (
        <>
            <NavLink to="/items/laptops">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/XCM_CUTTLE_1622894_3373440_379x304_1X_en_size1_US._SY304_CB597469214_.jpg" alt="image"
                    className='h-3/4 w-11/12 mx-5 my-5' />
                <h1 className='text-xl text-blue-600 hover:text-red-400 font-extrabold m-5'>Find your Laptop here</h1>
            </NavLink>
        </>
    )
}

export default Banner
