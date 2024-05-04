import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'
import { useCart } from '../context/AddToCart'

function Navbar() {
    const options = [{ id: 0, name: "Home", path: "/" },
    { id: 1, name: "About", path: "/about" },
    { id: 2, name: "Products", path: "/products" },]
    const {IteminCart}= useCart()

    return (
        <>
            <div className='fixed top-0 w-full h-16 z-40'>
                <nav className='w-full z-40 h-16 bg-blue-700 flex gap-4 items-center'>
                    {/* LOGO */}

                    <div className='w-1/4 h-full text-center flex justify-center items-center'>
                        <span className='text-4xl font-extrabold text-white cursor-pointer'>🏪<span className='italic font-sans'>FlipZone</span></span>
                    </div>

                    {/* SEARCH-BOX */}
                    <div className='w-2/4 flex h-full items-center justify-center'>
                        <input type="text" className='w-full h-2/3 rounded-lg border-2 border-black rounded-r-none border-r-0 px-3' placeholder='Search' />
                        <button className='w-2/12 bg-gray-950 h-2/3 rounded-r-lg text-2xl text-white hover:bg-gray-800'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    {/* OPTIONS */}
                    <ul className='flex justify-center gap-8 items-center  w-2/3 h-1/2'>
                        {options.map((currElem) => {
                            return (

                                <NavLink to={currElem.path} key={currElem.id} className='text-2xl font-bold  hover:text-black  hover:font-extrabold transition-all duration-300 text-white cursor-pointer active:text-red-500'>{currElem.name}</NavLink>

                            )
                        })}

                        <Dropdown />

                        <NavLink className='  text-white text-3xl cursor-pointer transition-all duration-300'><i className='fa-solid fa-user'></i></NavLink>

                        <NavLink to="/cart" className=' relative text-white cursor-pointer text-3xl transition-all duration-300'><i className='fa-solid fa-cart-plus'></i>
                            <span className='bg-red-400 absolute rounded-full text-base py-0.5 pl-2  border-2 border-white bottom-4 left-7 w-7'>{IteminCart}</span></NavLink>
                    </ul>
                </nav>
            </div >

        </>
    )
}

export default Navbar
