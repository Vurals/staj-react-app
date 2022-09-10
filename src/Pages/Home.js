import React, { useState, useEffect } from 'react';
import { ShoppingCartOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import ProductList from '../components/ProductList';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';

//let selectedIds = [];

export default (props) => {
    const [selectedIds, setSelectedProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const [handleDelete, setDeleteFunciton] = useState(false);
    const [badgeCount, setBadge] = useState('0');


    const url = 'https://localhost:7072/api/Product'

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProducts(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        //async function handleDelete(title) {
        //    await fetch('https://localhost:7072/api/Product/DeleteProduct', { method: 'DELETE' });
        //    setProducts(products.filter(prod => prod.title !== title))
        //        .catch((err) => console.log(err))
        //}
        //setDeleteFunciton(handleDelete);
    }, [])
    ///On Change Function
    const onChange = (e) => {
        console.log(`checked = ${e.target.value}`);
        console.log(`checked = ${e.target.checked}`);
        if (e.target.checked === false) {
            selectedIds = selectedIds.filter(f => selectedIds.includes(e.target.value));
            products[e.target.id] = true;
            setSelectedProducts({ selectedIds });           
        }
        else {
            if (Array.isArray(selectedIds)) {
                selectedIds.push(e.target.value);
            }
            console.log(selectedIds);
            setSelectedProducts(selectedIds);
            products[e.target.id] = false;
        }
        setBadge(selectedIds.length);
    };




    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Row type="flex" align="middle">
                    <Col>
                        {/*<Link to='/cart' state={{ selectedIds, products, handleDelete }}>*/}
                        {/*    <AppstoreAddOutlined style={{*/}
                        {/*        fontSize: '300%',*/}
                        {/*        display: 'inline-block',*/}
                        {/*        verticalAlign: 'middle',*/}
                        {/*        paddingLeft:25*/}
                        {/*    }} key="shopping" />*/}
                        {/*</Link>*/}
                    </Col>
                
                    <Col>
                        <Link to='/cart' state={{ selectedIds, products, handleDelete }}>
                            <Badge count={badgeCount} >
                                <ShoppingCartOutlined style={{
                                    fontSize: '300%',
                                    display: 'inline-block',
                                    verticalAlign: 'middle',
                                    paddingLeft: 930
                                }} key="shopping" />
                            </Badge>
                        </Link>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <ProductList products={products} onChange={onChange} />
                </Row>
                
            </>
        );
    }



}

