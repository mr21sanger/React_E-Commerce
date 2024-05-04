import React from 'react'
import SuggCard from './SuggCard'

function ItemBox({product, category}) {
    return (
        <>
            <div className='w-11/12 h-88 bg-white drop-shadow-xl border-2 border-gray-300 py-5 my-8 m-auto '>
                <h1 className='font-bold text-3xl px-5 pb-5'>Best of {category}</h1>
                <div className='flex justify-evenly items-center gap-2 w-full'>
                {product.map((currElem) => {
                    if (currElem.category === category) {
                        return <SuggCard key={currElem.id} product={currElem} className={"w-60 h-76"} />
                    }
                })}
                </div>
            </div>
        </>
    )
}

export default ItemBox
