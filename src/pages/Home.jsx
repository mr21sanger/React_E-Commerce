import { useContext, useEffect, useState } from 'react'
import "../style.css"
import Categories from '../components/categories'
import Categoryapi from '../components/Categoryapi'
import Card from '../components/Card'
import Banner from '../components/banner'
import ItemBox from '../components/ItemBox'
import { ProductContext, useProduct } from '../context/ProductContext'
import { NavLink } from 'react-router-dom'

function Home() {

    const [category, setCategory] = useState(Categoryapi)
    const {products} = useProduct()
    return (
        <>
            {/* MAIN */}
            <div className=' relative mt-16 w-full'>
                <div className='py-1.5 w-full bg-blue-700 border-2 text-center border-x-0 border-black  '><span className='text-med font-bold text-yellow-300'>Best Quality Products At Cheapest Price</span></div>

                <div className='bg-image  flex justify-end items-center font-mono font-extrabold'>
                    <div className='w-1/2 h-96 font-semibold p-4 flex justify-center gap-5 flex-col items-center'>
                        <h1 className='text-6xl font-bold text-center font-sans'>"Infinite Choices, One Destination" <span className='text-black shadow-black  font-extrabold italic'> -  FlipZone!</span></h1>
                        <NavLink to={"/products"} className='p-4 shadow font-sans shadow-black rounded-sm border-black font-bold text-2xl bg-white'>Grab Latest Deal</NavLink>
                    </div>
                </div>


                {/* CATEGORY NAVBAR */}
                <div className='h-44 w-11/12 bg-white m-auto flex items-center mt-5 justify-center drop-shadow-md backdrop-blur-lg gap-8 mb-8 shadow-black '>
                    {
                        category.map((currElem) => {
                            return (
                                <Categories key={currElem.id} category={currElem} />
                            )
                        })
                    }
                </div>


                {/* CARDS */}
                <div className='flex justify-between items-center  m-auto' style={{ width: "90.5vw" }}>
                    {/* CARD BOX */}
                    <div className=' bg-red p-3  content-center border-2 border-gray-100 drop-shadow-lg gap-y-4 items-center bg-white shadow-black' style={{ height: "90vh", width: "55vw" }}>
                        <h1 className='font-bold text-3xl m-3 cursor-pointer' style={{ fontFamily: "'Rubik', sans-serif" }}>Best deal on Mobiles</h1>
                        <div className='place-items-center grid grid-cols-3 gap-1'>
                            {products.map((currElem) => {
                                if (currElem.id <= 6)
                                    return <Card key={currElem.id} product={currElem} />
                            })
                            }
                        </div>
                    </div>

                    {/* BANNER */}
                    <div className='banner-image drop-shadow-xl shadow-black border-2 border-gray-300 bg-white' style={{ height: "90vh", width: "34vw" }}>
                        <h1 className='text-3xl font-extrabold m-5'>Laptops For every need</h1>
                        <Banner />
                    </div>
                </div>

                <ItemBox product={products} category="fragrances" />
                <ItemBox product={products} category="home-decoration" />
            </div>

        </>
    )


}
export default Home