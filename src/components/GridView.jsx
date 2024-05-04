import React from 'react'
import Card from './card'
import SuggCard from './SuggCard'

function GridView({ products }) {

    if(products.length ===0){
        return(
            <>
            <div className='font-bold text-2xl flex h-full w-full items-center justify-center font-sans'>Sorry, No Product Available</div>
            </>
        )
    }
    return (
        <>
        <div className='w-full h-screen grid grid-cols-4 gap-5 p-5 mb-5'>
            {
                products.map((curElem) => {
                    return <SuggCard key={curElem.id} product={curElem} className={"h-64"} />
                })
            }
            </div>
        </>
    )
}

export default GridView
