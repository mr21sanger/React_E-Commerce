import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/AddToCart'

function Add_to_cart_Btn({ product , design }) {
  const { AddToCart } = useCart();

  return (
    <>

      <NavLink to={'/cart'}>
        <button className={` ${design}`} onClick={() => AddToCart(product)}><i className='fa-solid fa-cart-shopping'/>Add to cart</button>
      </NavLink>
    </>
  )
}

export default Add_to_cart_Btn
