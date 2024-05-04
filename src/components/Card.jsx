import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useCart } from '../context/AddToCart'
import Add_to_cart_Btn from './Add_to_cart_Btn'

function Card({ product, className }) {
  const { thumbnail, brand, title, price, rating, id } = product
  const { AddToCart } = useCart()


  return (
    <>
      <div className={`w-full bg-white border-5  border-red-900 rounded-lg drop-shadow shadow-black ${className} `}>
        <NavLink to={`/singleproduct/${id}`}>
          <img className="p-3 hover:scale-105 w-full rounded-t-lg h-44" src={thumbnail} alt="product image" />
        </NavLink>
        <div className="px-5 pb-5">
          <NavLink to={`/singleproduct/${id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900"
            >{title}</h5>
            <p className='text-xs mb-2 w-full'>{brand}<span className='text-right float-right'><i className="fa-solid fa-star text-yellow-300 text-sm mx-1"></i>{rating} out of 5.00</span></p>
          </NavLink>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 ">${price}</span>
            <Add_to_cart_Btn product={product} design={"text-white bg-blue-700 hover:bg-blue-800 focus:ring- focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"} />

          </div>
        </div>
      </div >
    </>
  )
}

export default Card
