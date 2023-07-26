import React, { useState } from 'react';
import { assets } from '../../constants';
import "./ProductCard.css";

export const ProductCard = ({
    productInfo = {},
    onProductClick = () => {},
}) => {
    const { name, quantity, price, image } = productInfo;
    const [imageURL, setImageURL] = useState(image);

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
            <img 
              src={imageURL}
              onError={() => setImageURL(assets.productImagePlaceholder)}
            />
            {renderProductInfo()}
        </div>
    )
}
