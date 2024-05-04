import React from 'react'
import { NavLink } from 'react-router-dom'

function SuggCard({product, className}) {
    const { thumbnail, brand, price,id} = product

  return (
    <>
      <div className={ ` bg-white border-5  border-red-900 rounded-lg drop-shadow-lg shadow-black ${className} `} style={{border:"1px solid gray"}}>
      <NavLink to={`/singleproduct/${id}`}>
        <img className="p-3 hover:scale-105 transition-all duration-300 w-full rounded-t-lg h-44" src={thumbnail} alt="product image" />
      </NavLink>
      <div className="px-5 pb-5">
        <NavLink to={`/singleproduct/${id}`}>
          <h5 className="text-sm w-full font-thin text-black">{brand}</h5>
          <p className='text-lg font-bold mb-2 w-full'>from ${price}</p>
        </NavLink>
        
      </div>
    </div >
 
    </>
  )
}

export default SuggCard
