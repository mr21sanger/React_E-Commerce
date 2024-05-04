import React from 'react'
import { useFilterContext } from '../context/FilterContext'

function FilterInputs({ Filter, name,func }) {
    const {filterCat , filterProducts} = useFilterContext();
    return (
        <>
            <div className='px-3 py-2  border-b-2 border-black w-11/12 m-auto'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                {Filter.map((currElem, idx) => {
                    return (
                        <div key={idx} className="flex items-center">
                            <input  id={currElem} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                                onChange={(e) => func(e.target.id)} />
                            <label htmlFor={currElem} className="ms-2 text-lg font-medium text-gray-900">{currElem}</label>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default FilterInputs
