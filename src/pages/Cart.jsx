import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/AddToCart'
function Cart() {

  const { cart } = useCart()
  const { remove } = useCart()
  const { amount } = useCart()

  let [shipping, setShipping] = useState(80)
  let [total, setTotal] = useState(0)

  const calculate = () => {
    let totalPrice = amount + shipping
    setTotal(totalPrice)
  }



  useEffect(() => {
    if (amount > 1500) {
      setShipping(0);
      calculate()
    }
    else {
      setShipping(80);
      calculate()
    }
  }, [total])

  const deleteItem = (currElem) => {
    const currPrice = currElem.product.price
    const updPrice = Number(total - currPrice + shipping);
    // console.log(updPrice)
    setTotal(updPrice)
    remove(currElem)
  }



  return (
    <div className='relative mt-16 w-full h-screen p-10 bg-gray-200 flex justify-center gap-3'>

      {/* Cart div */}
      <div className='w-4/6  h-full bg-white border-2 border-black'>

        <h1 className='text-3xl p-5 bg-blue-700 font-bold text-white'><i className='fa-solid fa-shopping-cart mx-3'></i>Cart</h1>
        <div className='h-ful pt-0.5 overflow-scroll no-scrollbar overflow-x-hidden' style={{ height: "78vh" }}>

          {
            cart.map((currElem) => {
              const { id, title, thumbnail, price, rating, brand, discountPercentage } = currElem.product
              const discount = Number(discountPercentage)
              const discountPrice = Number(price) * (discount / 100)
              const actualPrice = (Number(price) + discountPrice).toFixed(2);
              return (
                <div key={id} className='bg-red-200 w-full h-56 flex gap-1 items-center px-3'>
                  <NavLink to={`/singleproduct/${id}`} >
                    <img
                      src={thumbnail}
                      alt="image"
                      className='h-52 border-2 border-gray-600 w-56 my-auto mx-auto drop-shadow-md' />
                  </NavLink>

                  <div className='py-4 px-3 w-1/3 h-full'>
                    <NavLink to={`/singleproduct/${id}`}>
                      <h1 className='text-2xl font-bold  '>{title}</h1>
                      <p className='font-sm'>{brand}</p>
                      <p className='my-2'>
                        <span className='bg-green-600 text-md font-semibold text-white rounded-md p-1'>{rating}
                          <i className='fa-solid fa-star m-1 text-sm mb-0.5 text-white'></i>
                        </span> out of 5
                        <span className='italic font-thin text-blue-500'><i className="fa-solid fa-shield ml-3 text-yellow-500 text-lg"></i> FlipZone Assured</span></p>
                    </NavLink>

                    <button className='w-7 h-6 bg-gray-500'>-</button>
                    <input type="number"
                      className='w-12 font-lg font-bold text-center'
                    />
                    <button className='w-7 h-6 bg-gray-500'>+</button>

                  </div>

                  <div className='w-1/2 h-full py-3 text-justify px-6'>
                    <p className='text-3xl font-semibold my-2'>${price}
                      <span className='text-2xl font-extralight mx-2 text-gray-500'><s>${actualPrice}</s></span><br></br>
                      <span className='text-green-600 text-2xl font-normal italc'>{discount}% Off  </span>
                    </p>
                  </div>

                  <div className='w-1/12 h-5/6 text-center'>
                    <i className='fa-solid fa-trash text-red-500 text-xl cursor-pointer'
                      onClick={() => deleteItem(currElem)}></i>
                  </div>

                </div>
              )
            })
          }
        </div>

      </div>

      <div className='w-2/6 h-2/3 bg-white flex flex-col gap-3 border-black border-2'>
        <h1 className='p-4 text-2xl font-semibold text-gray-500 border-b-2 border-black'>
          Price Details :-
        </h1>
        <div className='w-full'>
          <table className=" w-5/6 text-xl mx-2 my-2  font-semibold ">
            <tr >
              <td>Total MRP</td>
              <td>$<span >{amount}</span></td>
            </tr>
            <tr>
              <td>Discount on MRP</td>
              <td>$<span >0</span></td>
            </tr>
            <tr >
              <td>Shipping Fees</td>
              <td>$<span>{shipping}</span></td>
            </tr>
            <tr className='h-8 border-y-2 border-black bg-green-300 font-mono text-md font-thin'>
              <td className='font-mono text-md font-thin'>Total Amount</td>
              <td>$<span >{total}</span></td>
            </tr>
          </table>
        </div>



        <div
          className='text-green-600 font-bold text-lg px-5 w-full text-center bg-green-200 h-10 py-1.5 '>
          <span>You saved 50000 on this deal</span>
        </div>
        <div className='w-full flex'>
          <button className='bg-orange-600 hover:bg-orange-700 rounded-lg px-5 py-3 mx-2 text-lg font-bold text-white w-1/2'>PLACE ORDER</button>

          <NavLink to={'/'} className=' text-center bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-3 mx-2 text-lg font-bold text-white w-1/2'><i className="fa-solid fa-shop mx-2"></i>SHOP MORE</NavLink>
        </div>
      </div>
    </div>



  )
}
export default Cart
