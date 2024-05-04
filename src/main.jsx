import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import { ProductState } from './context/ProductContext.jsx'
import { CartProvider } from './context/AddToCart.jsx'
import { SingleItemState } from "./context/singleItem.jsx"
import { FilterContextProvider } from './context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductState>
    <FilterContextProvider>
      <SingleItemState>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </SingleItemState>
    </FilterContextProvider>

  </ProductState>
)
