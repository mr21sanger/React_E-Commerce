import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductContext, useProduct } from '../context/ProductContext';


function Dropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const {products} = useProduct()
  const { category } = products

  const categories =
    [...new Set(products.map((CurrElem) => {
      return CurrElem.category
    }))]

  


  return (
    <>
      <div className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          id="dropdownHoverButton"
          className="text-white bg-blue-700 rounded-lg px-2 py-2.5 text-2xl font-bold text-center inline-fle{`/items/${category}`}center"
          type="button"
        >
          Categories <i className="fa-solid fa-caret-down ml-2 hover:rotate-180 rotate-0"></i>
        </button>

        {isDropdownVisible && (
          <div className="z-800 absolute top-10 left-0 bg-white drop-shadow-xl divide-y divide-gray-100 rounded-lg shadow w-44 mt-1">
            <ul className="py-2 text-sm text-gray-700">
              {
                categories.map((CurrElem) => {
                  return (
                    <li key={CurrElem}>
                      <NavLink to={`/items/${CurrElem}`} className="block text-lg bold px-4 py-2 hover:bg-gray-100">
                        {CurrElem.toUpperCase()}
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
