import React from 'react';
import { assets } from '../../constants';
import "./ProductCard.css";

export const ProductCard = ({
    productInfo = {},
    onProductClick = () => {},
}) => {
    const { name, quantity, price, image } = productInfo;
    
    const renderProductInfo = () => 
        <div className='c-ProductCard__productInfo_container'>
            <label className='c-ProductCard__title'>{name || "Product Name Placeholder"}</label>
            <label className='c-ProductCard__price'>${price || 1}</label>
            <label>In Stock: {quantity || 0}</label>
        </div>

    return (
        <div 
         className='c-ProductCard__container'
         onClick={onProductClick}
        >
            <img src={image || assets.productImagePlaceholder}/>
            {renderProductInfo()}
        </div>
    )
}
