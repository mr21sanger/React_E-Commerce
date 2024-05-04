import React, { useContext } from 'react'
import { ProductContext, useProduct } from '../context/ProductContext'
import { useParams } from 'react-router-dom'
import Card from '../components/card';

function Itemlist() {
  const { id } = useParams();
  const {products} = useProduct()
  const { category } = products

  const items = products.filter((curElem) => {
    if (curElem.category == id.toLowerCase()) {
      return curElem
    }
  })
  console.log(items)
  return (
    <div className='abolsute bg-gray-100 mt-16 w-full h-screen flex gap-4 justify-center p-5'>
      <div className='w-11/12 bg-white h-full grid p-5 grid-cols-4 gap-3 overflow-scroll no-scrollbar '>
        {
          items.map((curElem)=>{
            return(
              <Card product={curElem} className=" drop-shadow-lg shadow-black"/>
            )
          })
        }
      </div>

    </div>
  )
}

export default Itemlist
