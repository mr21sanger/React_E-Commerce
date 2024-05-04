import { createContext, useContext, useEffect, useReducer } from "react";
import { useProduct } from "./ProductContext";

const FilterContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                isloading: true
            };
        case "Load_Filter":
            return {
                ...state,
                isloading: false,
                filterProducts: [...action.payload],
                allProducts: [...action.payload]
            };

        case "GridView":
            return {
                ...state,
                gridView: true,
                listView: false,
            };
        case "ListView":
            return {
                ...state,
                gridView: false,
                listView: true,
            }

        case "Filter":

            let allProducts = [...action.payload.products]
            let filtered = allProducts.filter((currElem) => {
                if (currElem.category == action.payload.cat)
                    return currElem
            })
            return {
                ...state,
                filterProducts: [...filtered],

            }


        case "Remove":
            let allItems = [...action.payload.products]
            let removeFilter = allItems.filter((currElem) => {
                if (currElem.category != action.payload.cat) {
                    return currElem
                }
            })

            return {
                ...state,
                filterProducts: [...removeFilter]
            }

        case "filterPrice":
            let itemsbyPrice = [...action.payload.products]
            let items = itemsbyPrice.filter((currElem) => {
                if (action.payload.price === "0-$200") {
                    if (currElem.price > 0 && currElem.price < 200) {
                        return currElem
                    }
                } if (action.payload.price === "$200-$700") {
                    if (currElem.price > 200 && currElem.price < 700) {
                        return currElem
                    }
                } if (action.payload.price === "$700-$1k") {
                    if (currElem.price > 700 && currElem.price < 1000) {
                        return currElem
                    }
                } if (action.payload.price === "above $1k ") {
                    if (currElem.price > 1000) {
                        return currElem
                    }
                }
            })

            return {
                ...state,
                filterProducts: [...items],
            }


        case "Rating":
            let all = [...action.payload.products]
            let ratedItems = all.filter((currElem) => {
                if (currElem.rating * 100 <= action.payload.val) {
                    return currElem
                }
            })
            return {
                ...state,
                filterProducts: [...ratedItems]
            }


        default:
            return state;
    }
};


const initialState = {
    isloading: false,
    allProducts: [],
    filterProducts: [],
    gridView: false,
    listView: true,
    category: "All"
}


export const FilterContextProvider = ({ children }) => {
    const { products } = useProduct();
    const [state, dispatch] = useReducer(reducer, initialState)

    // GRID AND LIST VIEWS
    const setGridView = () => {
        return dispatch({ type: "GridView" })
    }

    const setListView = () => {
        return dispatch({ type: "ListView" })
    }
    //SHOW ALL PRODUCTS

    const all = () => {
        dispatch({ type: "Load_Filter", payload: products })
    }

    // FILTER CATEGORY BASED PRODUCTS
    const filterCat = (cat) => {
        let element = document.getElementById(cat).checked
        if (element === true) {
            dispatch({ type: "Filter", payload: { products, cat } })
        }
        else {
            dispatch({ type: "Remove", payload: { products, cat } })
        }
    }

    //FILTER BASED ON PRICE

    const filterPrice = (price) => {
        let element = document.getElementById(price).checked
        console.log(price)
        if (element === true) {
            dispatch({ type: "filterPrice", payload: { products, price } })
        }
        
    }

    //FILTER BASED ON CATEGORY
    const updateRating = (val) => {
        dispatch({ type: "Rating", payload: { products, val } })
    }

    useEffect(() => {
        dispatch({ type: "loading" })
        dispatch({ type: "Load_Filter", payload: products })
    }, [products])

    return <FilterContext.Provider value={{ ...state, setGridView, setListView, filterCat, filterPrice, updateRating,all }}>{children}</FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}