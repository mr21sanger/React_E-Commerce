import { createContext, useContext, useEffect, useReducer, useState } from "react";

const useCartContext = createContext();


const initialState = {
    cart: [],
    shipping: 500,
    total_item: "",
    total_amount: "",
}
const reducer = (state, action) => {
    // FOR ADD ITEM IN CART CONDITION
    if (action.type === "Add_to_cart") {
        let { product } = action.payload
        let cartItem;
        cartItem = {
            product
        }
        return {
            ...state,
            cart: [...state.cart, cartItem],
        }
    }
    // TO REMOVE THE ITEM FROM THE CART
    if (action.type === "Remove") {

        let updatedCart = state.cart.filter(
            (currElem) => currElem.product.id !== action.payload)
        return {
            ...state,
            cart: updatedCart
        }
    }
    return state;
}


const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [IteminCart, setIteminCart] = useState(0)
    const [amount, setAmount] = useState(0)

    // ADD TO CART**********************
    const AddToCart = (product) => {
        setIteminCart(IteminCart + 1)
        let price = Number(product.price);
        setAmount(amount + price);
        dispatch({ type: "Add_to_cart", payload: { product } });
    }

    // REMOVE FROM CART*****************************
    const remove = (currElem) => {
        setIteminCart(IteminCart - 1)
        let { id, price } = currElem.product
        setAmount(amount - price);
        dispatch({ type: "Remove", payload: id })
    }

    // LOCAL STORAGE

    useEffect(() => {
        localStorage.setItem("FlipzoneCart", JSON.stringify(state.cart))
    }, [state.cart])
    return (
        <useCartContext.Provider value={{ ...state, AddToCart, remove, IteminCart, amount }}>
            {children}
        </useCartContext.Provider>
    )
}

const useCart = () => {
    return useContext(useCartContext)
}

export { useCart, CartProvider }