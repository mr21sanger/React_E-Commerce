import React from 'react'
import { NavLink } from 'react-router-dom';
import Add_to_cart_Btn from './Add_to_cart_Btn';

function ListView({ products }) {
    if (products.length === 0) {
        return (
            <>
                <div className='font-bold text-2xl flex h-full w-full items-center justify-center font-sans'>Sorry, No Product Available</div>
            </>
        )
    }
    return (
        <>
            {
                products.map((currElem) => {

                    const discount = Number(currElem.discountPercentage)
                    const discountPrice = Number(currElem.price) * (discount / 100)
                    const actualPrice = (Number(currElem.price) + discountPrice).toFixed(2);
                    return (
                        <div key={currElem.id} className='bg-white my-0.5 drop-shadow-lg h-60 border-2 border-gray-300 flex'>
                            <div className='h-60 px-5 py-1.5 w-60 b-gray-400'>
                                <NavLink to={`/singleproduct/${currElem.id}`}>
                                    <img
                                        src={currElem.thumbnail}
                                        alt="image"
                                        className='h-56 border-2 border-gray-600 w-56 my-auto mx-auto drop-shadow-md' />  </NavLink>
                            </div>


                            <div className='py-3 px-1 w-1/3'>
                                <NavLink to={`/singleproduct/${currElem.id}`}>
                                    <h1 className='text-2xl font-bold  '>{currElem.title}</h1>
                                    <p className='font-sm'>{currElem.brand}</p>
                                    <p className='my-2'>
                                        <span className='bg-green-600 text-md font-semibold text-white rounded-md p-1'>{currElem.rating}
                                            <i className='fa-solid fa-star m-1 text-sm mb-0.5 text-white'></i>
                                        </span> out of 5
                                        <span className='italic font-thin text-blue-500'><i className="fa-solid fa-shield ml-3 text-yellow-500 text-lg"></i> FlipZone Assured</span></p>
                                    <p className='h-1/2 w-5/6 overflow-hidden'>{currElem.description}</p>
                                </NavLink>
                            </div>

                            <div className='w-1/3 py-3 text-justify px-6'>
                                <p className='text-3xl font-semibold my-2'>${currElem.price}
                                    <span className='text-2xl font-extralight mx-2 text-gray-500'><s>${actualPrice}</s></span>
                                    <span className='text-green-600 text-2xl font-normal italc'>{discount}% Off  </span>
                                </p>


                                <Add_to_cart_Btn product={currElem} design={'px-5 py-3 bg-orange-600 font-bold text-lg my-2 text-white rounded-md hover:ring-2 hover:ring-black hover:bg-orange-700'} />
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}

export default ListView
