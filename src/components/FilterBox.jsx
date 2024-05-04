import React from 'react'
import FilterRange from './FilterRange'
import { useContext } from 'react'
import { ProductContext, useProduct } from '../context/ProductContext'
import { useFilterContext } from '../context/FilterContext'
import FilterInputs from './FilterInputs'


function FilterBox() {
    const { products } = useProduct()
    const { filterProducts,all, filterCat, filterPrice } = useFilterContext()
    const category = [... new Set(products.map((currElem) => {
        return currElem.category
    }))]

    const price = [
         "0-$200", "$200-$700", "$700-$1k", "above $1k "
    ]

    return (
        <>
            <div className='w-full h-full bg-white'>
                <div className='h-16 border-b-2 border-black flex justify-evenly gap-1 items-center'>
                    <h3 className=' font-bold text-2xl p-3.5'>
                        <i className="fa-solid fa-filter mx-2"></i>
                        <span>Filters</span>
                    </h3>
                    <button className='bg-blue-700 px-5 py-1 mr-2 font-bold text-lg text-white border-2 border-blue-800 rounded-lg'
                    onClick={()=>all()} >All Products</button>
                </div>
                <h1 className='bg-red-300 border-y-2 my-0.5 text-center font-bold text-xl font-sans  border-red-500'>
                    Shop with more Ease
                </h1>


                <FilterInputs name={"Category"} Filter={category} func={filterCat} />
                <FilterInputs name={"Price"} Filter={price} func={filterPrice} />

                <FilterRange heading={"Ratings"} opt1={"1"} opt2={"2"} opt3={"3"} opt4={"4"} opt5={"5"} />




            </div>
        </>
    )
}

export default FilterBox
