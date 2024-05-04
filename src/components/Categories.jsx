import React from 'react'
import { NavLink } from 'react-router-dom'

function Categories({category}) {
  const {name,imageSrc,visitSrc} = category
  return (
    <div className='w-36 m-5 rounded-md h-5/6 font-bold flex flex-col justify-center cursor-pointer items-center bg-contain'style={{fontFamily:"'Rubik', sans-serif"}}>
      <NavLink to={`${visitSrc}`} className=' flex flex-col justify-center items-center'>
      <img src={`${imageSrc}`} alt="image" className='h-24 hover:scale-105' />
      <span className='mt-3 text-xl'>{name}</span>
      </NavLink>
    </div>
  )
}

export default Categories
