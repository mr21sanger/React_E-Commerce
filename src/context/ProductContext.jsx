import { createContext, useContext, useEffect, useReducer, useState } from "react";


const ProductContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "Products":
            console.log("hii")

            console.log(action.payload)
            return {
                ...state,
                products: [...action.payload]
            }


        default:
            return state;
    }
}

const initialState = {
    products: [],
}

const ProductState = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const url = "https://dummyjson.com/products"
    const productData = async (url) => {
        let res = await fetch(url)
        let data = await res.json();
        console.log(data.products)
        dispatch({ type: "Products", payload: data.products });
    }
    useEffect(() => {
        productData(url)
    }, [])
    console.log(state)


    return (
        <ProductContext.Provider value={{...state}}>
            {children}
        </ProductContext.Provider>
    )
}


const useProduct = () => {
    return useContext(ProductContext)
}

export { ProductState, ProductContext, useProduct }