import React, { useState } from 'react';
import SelectedProductList from '../components/ShoppingCart';
import { useLocation } from "react-router-dom";

export default (props) => {
    //debugger;
    const location = useLocation();

    const { selectedIds, products } = location.state;
    
    console.log(selectedIds);

    return (
        <>
            Shopping cart
            <SelectedProductList selectedProductIds={selectedIds} products={products} />
        </>
        
    );
}