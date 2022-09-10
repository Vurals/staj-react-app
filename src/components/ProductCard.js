import { DeleteOutlined,  SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React, {useState } from 'react';
import { Checkbox } from 'antd';
const { Meta } = Card;



export const ProductCard = (props) => {
    

    const { productTitle, imgSrc, description, id, onChange } = props; //product =img, productlist
    
    //cardlara id eklenecek
    return (
        <Card
            style={{ width: 250 }}
            id= {id}
            cover={
                <img
                    alt="example"
                    src={imgSrc}
                    height="200"
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                //<DeleteOutlined onClick={handleDelete(productTitle)} key="edit" />,
                <Checkbox onChange={onChange} value={id} key={'checkbox'} >Add to cart</Checkbox>
            ]}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={productTitle}
                description={description}
                style={{
                    padding: 25,
                    margin: 0,
                    minHeight: 15,
                    textAlign: 'center',
                }}
            />
        </Card>
    );
};

export default ProductCard;
