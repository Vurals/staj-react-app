import { Card } from 'antd';
import React from 'react';
import ProductCard from './ProductCard';
const gridStyle = {
    width: '100%',
    textAlign: 'center',
};

export const SelectedProductList = (props) => {
    const { selectedProductIds, products } = props;
    
    var selectedProducts = products.filter(f => selectedProductIds.includes(f.id));
    
    ///* Egma script 6
    // * Function that creates product cards that are added to the cart
    //* */
    const createSelectedProducts = () => {
        const productList = []
        selectedProducts.forEach(f =>
            productList.push(
                <Card.Grid style={gridStyle}>
                    <ProductCard productTitle={f.title}
                        imgSrc={f.imagePath}
                        description={f.description}
                    />
                </Card.Grid>
            )
        );
        return productList;
    }

    return (
        <Card title="Selected Products">
            {createSelectedProducts()}
        </Card>
    );
};

export default SelectedProductList;