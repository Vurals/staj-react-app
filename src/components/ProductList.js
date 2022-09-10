import { Card } from 'antd';
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
const gridStyle = {
    width: '30%',
    textAlign: 'center',
};


//2. hafta baþý toplantý
//design pattern solid what is design pattern 15.08.2022 orm mimarisi
export const ProductList = (props) => {
    const { products, onChange } = props; //product =img, productlist


    /* 
     * Function that creates product cards from ProductCard component
    * */
    const createProducts = () => {
        const productList = [];

        for (let i = 0; i < products.length; i++) {
            productList.push(
                <Card.Grid style={gridStyle}>
                    <ProductCard productTitle={products?.[i].title}
                        imgSrc={products?.[i].imagePath} 
                        description={products?.[i].price}
                        id={products?.[i].id}
                        onChange={onChange}
                        key={i}
                    />
                </Card.Grid>          
            )
            console.log(products?.[i].price);
        }
        return productList;
    }

    return (
        <Card title="Products">
            {createProducts()}
        </Card>
    );
};

export default ProductList;