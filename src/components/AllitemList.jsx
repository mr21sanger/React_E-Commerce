import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/AddToCart';
import Add_to_cart_Btn from './Add_to_cart_Btn';
import { useProduct } from '../context/ProductContext';
import { useFilterContext } from '../context/FilterContext';
import ListView from './ListView';
import GridView from './GridView';

function AllitemList({ product }) {

    const { AddToCart } = useCart();
    const { products } = useProduct()
    const { gridView, listView } = useFilterContext();


    if (listView === true)
        return (
            <ListView products={product} />
        )

    if (gridView === true)
        return (
            <GridView products={product}/>
)    
}

export default AllitemList
