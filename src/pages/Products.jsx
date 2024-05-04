import React, { useContext } from 'react'
import AllitemList from '../components/AllitemList'
import FilterBox from '../components/FilterBox'
import { useFilterContext } from '../context/FilterContext'

function Products() {

  const { filterProducts, setGridView, setListView } = useFilterContext();
  console.log(filterProducts)


  return (
    <div className='relative mt-16 w-full h-screen flex gap-2 justify-center'>
      {/* Filter */}
      <div className='h-full w-1/5 left-0 bg-white border-2 my-5   ml-3 border-gray-300' style={{ height: "95vh" }}>
        <FilterBox />
      </div>

      {/* All Products */}
      <div className=' w-9/12  bottom-0 relative  border-2 my-5 ml-3 bg-white' style={{ height: "95vh" }} >
        <div className='w-full bg-blue-700 h-20 py-5 border-b-2 border-black flex justify-between'>
          <h1 className='text-3xl mx-9 h-12  text-white font-sans font-bold'>Our Products ({filterProducts.length})</h1>

          <div className="options">
            <button onClick={setGridView}>
              <i className="fa-solid fa-grip text-3xl text-white focus:ring-1 focus:ring-black"
              ></i>
            </button>
            <button onClick={setListView}>
              <i className="fa-solid fa-bars text-3xl px-6 text-white"
              ></i>
            </button>
          </div>
        </div>

        
        <div className='overflow-scroll h-5/6 no-scrollbar '>
          {
            <AllitemList product={filterProducts} />
          }
        </div>
      </div>
    </div>
  )
}

export default Products
