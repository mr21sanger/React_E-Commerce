import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useCart } from '../context/AddToCart';
import { useSingleProduct } from '../context/singleItem'
import Add_to_cart_Btn from '../components/Add_to_cart_Btn';


function SingleProduct() {

  let { id } = useParams();
  // let [singleIte, setSingleIte] = useState([])
  const { getProduct, images } = useSingleProduct();
  const { singleItem, isLoading, brand, title, rating, price, description, stock, thumbnail, discountPercentage } = useSingleProduct();
  const { AddToCart } = useCart()

  const [img, setImg] = useState([]);

  const [thumbnailImg, setThumbnailImg] = useState(thumbnail);


  const getid = () => { }

  useEffect(() => {
    getProduct(id)
  }, []);

  useEffect(() => {
    setThumbnailImg(thumbnail)
    images.map((currElem) => {
      setImg(currElem);
    })
  }, [getProduct])

  // CALCULATING DISCOUNT PRICE


  if (isLoading)
    return <div className='h-screen w-full  text-center text-4xl font-serif my-72'>.......Loading</div>


  const discount = Number(discountPercentage)
  const discountPrice = Number(price) * (discount / 100)
  const actualPrice = (Number(price) + discountPrice).toFixed(2);

  return (
    <div className=' mt-16 w-full h-screen bg-gray-100 flex justify-center gap-1'>
      <div className='w-1/6 h-5/6 my-5 ml-12 bg-white drop-shadow-md overflow-scroll no-scrollbar '>
        {
          img.map((currElem,idx) => {
            return <img key={idx} src={currElem}
              className='hover:ring-2 hover:ring-blue-500 h-1/6 m-auto my-2 w-5/6 border-2 border-black hover:border-0'
              alt="image"
              onClick={() => setThumbnailImg(currElem)} />

          })
        }
      </div>
      <div className='w-2/3 h-2/3  my-5 mx-2 bg-white drop-shadow-md'>
        <img
          src={thumbnailImg}
          alt="image"
          className='h-full w-full ' />
      </div>
      <div className='w-1/2 h-5/6 p-5  my-5 mr-12 bg-white drop-shadow-md'>
        <h1 className='text-3xl  font-bold '>{title}</h1>

        <p className='font-sans font-semibold w-1/2'>{brand}</p>

        <p className='my-2'>

          <span className='bg-green-600 text-md font-semibold text-white rounded-md p-1'>{rating}
            <i className='fa-solid fa-star m-1 text-sm mb-0.5 text-white'></i>
          </span> out of 5
          <span className='italic font-thin text-blue-500'><i className="fa-solid fa-shield ml-3 text-yellow-500 text-lg"></i> FlipZone Assured</span></p>

        <p className='text-xl font-semibold text-green-600'>Special Price</p>

        <p className='text-4xl font-semibold my-2'>${price}
          <span className='text-2xl font-extralight mx-2 text-gray-500'><s>${actualPrice}</s></span>
          <span className='text-green-600 text-2xl font-normal italc'>{discount}% Off  </span>
        </p>


        {/* ******* Badges*************** */}
        <div className='w-4/6 h-24 flex justify-center gap-5 items-center border-b-2 border-gray-900 pb-3'>
          <div className='text-center flex flex-col items-center justify-center hover:ring-1 p-2 hover:ring-gray-800
          '>
            <i className="fa-solid fa-truck text-2xl"></i>
            <p className='w-16'>Fast Delivery</p>
          </div>

          <div className='text-center flex flex-col items-center justify-center hover:ring-1 p-2 hover:ring-gray-800
          '>
            <i className="fa-solid fa-rotate-left text-2xl"></i>
            <p className='w-16'>10 Days return</p>
          </div>

          <div className='text-center flex flex-col items-center justify-center hover:ring-1 p-2 hover:ring-gray-800
          '>
            <i className="fa-solid fa-user-shield text-2xl"></i>
            <p className='w-20'>Safe and Secure</p>
          </div>

        </div>

        <h2 className='text-4xl mt-5 font-semibold'>Details :-</h2>
        <p className='mb-5'>{description}</p>
        <p className='font-lg font-bold italic text-red-500' style={{ fontFamily: "serif" }}>Hurry up!! Only {stock} Left in stock</p>
        {/* <NavLink to={"/cart"}>
          <button className='' onClick={() => AddToCart(singleItem)} />Add to Cart</button>
        </NavLink> */}

        <Add_to_cart_Btn product={singleItem[0]} design={"px-5 py-3 bg-orange-600 font-bold text-2xl my-2 text-white rounded-md hover:ring-2 hover:ring-black hover:bg-orange-700'>" } />

      </div>

    </div>
  )

}

export default SingleProduct
