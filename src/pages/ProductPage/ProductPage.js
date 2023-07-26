import React from 'react';
import { ProductCard, AppButton } from '../../components';
import "./ProductPage.css";

export const ProductPage = ({
  products = []
}) => {
  const onProductClick = (productId) => {

  }

  const renderProducts = () => products
                                .map(productInfo => 
                                  <ProductCard 
                                    productInfo={productInfo} 
                                    onProductClick={onProductClick}
                                  />)
  
  return (
    <div className='p-ProductPage__container'>
      <div className='p-ProductPage__header'>
        <label>Products</label>
         <AppButton text="Add new Product" onClick={() =>{}} />
      </div>
      <div className='p-ProductPage__product_container'>
        {renderProducts()}
      </div>
    </div>
  )
}
