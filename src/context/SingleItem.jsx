import { createContext, useContext, useReducer } from "react";

const singleProduct = createContext();


const initialState = {
    brand:"",
    isLoading: false,
    title:"" ,
    rating:"",
    description : "",
    stock: "",
    thumbnail:"",
    discountPercentage: "",
    price: "",
    images:[],
    singleItem:[]
}

const reducer = (state, action) => {
    if (action.type === "Loading") {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === "set_single_item") {
        let singleProduct = action.payload
        return {
            ...state,
            isLoading: false,
            singleItem: [singleProduct],
            images: [singleProduct.images],
            brand: singleProduct.brand,
            title: singleProduct.title,
            rating:singleProduct.rating,
            description : singleProduct.description,
            stock: singleProduct.stock,
            thumbnail: singleProduct.thumbnail,
            discountPercentage: singleProduct.discountPercentage,
            price: singleProduct.price,

        }
    }

    return state

}


const SingleItemState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    let url = "https://dummyjson.com/products"

    const getProduct = async (id) => {
        dispatch({ type: "Loading" })
        try {
            let res = await fetch(`${url}/${id}`);
            let single = await res.json();
            dispatch({ type: "set_single_item", payload: single })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <singleProduct.Provider value={{ ...state, getProduct }}>
            {children}
        </singleProduct.Provider>
    )
}

const useSingleProduct = () => {
    return useContext(singleProduct)
}

export { useSingleProduct, SingleItemState }