import React from 'react'
import { useFilterContext } from '../context/FilterContext'

function FilterRange({heading, opt1, opt2, opt3, opt4, opt5 }) {

    const {updateRating} = useFilterContext()
    return (
        <>
            <div className='px-3 py-4 w-11/12 m-auto flex flex-col justify-center border-b-2 border-black'>
                <h1 className='mb-3 font-semibold text-xl'>
                    {heading}
                </h1>
                <div className="relative mb-6 bg-red-500 flex justify-center items-center">
                    <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                    
                    <input id="labels-range-input" type="range" min="100" max="500" className="w-full bg-gray-100 rounded-lg appearance-none cursor-pointer ring-1 h-1.5 ring-black p-0" 
                    defaultValue={500}
                    onChange={(e)=>updateRating(e.target.value)}/>
                    <span className="text-sm text-gray-500 absolute start-0 -bottom-6  text-wrap">{`0-${opt1}`}</span>
                    <span className="text-sm text-gray-500 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{opt2}</span>
                    <span className="text-sm text-gray-500 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{opt3}</span>
                    <span className="text-sm text-gray-500 absolute start-3/4 -bottom-6">{opt4}</span>
                    <span className="text-sm text-gray-500 absolute end-0 -bottom-6">{opt5}</span>
                </div>
            </div>
        </>
    )
}

export default FilterRange
